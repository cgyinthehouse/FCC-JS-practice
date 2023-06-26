// Design a cash register drawer function checkCashRegister() that accepts purchase
// price as the first argument(price), payment as the second argument(cash), and
// cash-in-drawer(cid) as the third argument.

// The checkCashRegister() function should always return an object with a status key and a change key.
// Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.
// Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.
// Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

function checkCashRegister(price, cash, cid) {
    const unit = {
        "ONE HUNDRED": 100,
        "TWENTY": 20,
        "TEN": 10,
        "FIVE": 5,
        ONE: 1,
        QUARTER: 0.25,
        DIME: 0.1,
        NICKEL: 0.05,
        PENNY: 0.01,
    };
    let change = parseFloat((cash - price).toFixed(2));
    const unitArr = Object.entries(unit);
    // 找出change的最大單位
    let unitMax = unitArr.find(element => element[1] <= change)[0];
    // 取得cid的unit以下所有unit總和
    const idx = cid.findIndex(element => element[0] == unitMax);
    let sum = 0;
    for (let i = 0; i <= idx; i++) {
        sum += cid[i][1];
    }
    // OPEN: cid的unit以下所有unit總和大於等於change
    // CLOSED: cidSum 等於change
    // INSUFFICIENT_FUNDS: cid的unit以下所有unit總和小於change
    let result = {};
    if (change > sum) {
        result.status = "INSUFFICIENT_FUNDS";
        result.change = [];
    } else if (change < sum) {
        result.status = "OPEN";
        // 假設QUARTER是最大單位: A + B + C + D = change
        // A <= cid.Quarter && A % 0.25 == 0
        // B <= cid.Dime && B % 0.1 == 0
        // 以此類推
        // 如果cid金額允許，需讓A>B>C>D，以符合一般找錢原則
        result.change = [];
        for (let i = idx, c = change + 0; i >= 0; i--) {
            let u = unit[cid[i][0]];
            let q_change = Math.floor(c / u);
            let q_cid = Math.floor(cid[i][1] / u);
            if (q_change == 0) continue;
            if (q_change > q_cid) {
                result.change.push(cid[i]);
                c = (c - cid[i][1]).toFixed(2);
            } else {
                result.change.push([cid[i][0], q_change * u]);
                c = (c - q_change * u).toFixed(2);
            }
            if (c == 0) break;
        }
    } else {
        result.status = "CLOSED";
        result.change = cid;
    }
    console.log(result);
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25],
["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
checkCashRegister(19.5, 20.5, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25],
["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
checkCashRegister(19.5, 20, [["PENNY", 0], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0.5], ["ONE", 0],
["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25],
["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])