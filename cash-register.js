// Design a cash register drawer function checkCashRegister() that accepts purchase
// price as the first argument(price), payment as the second argument(cash), and
// cash-in-drawer(cid) as the third argument.
function checkCashRegister(price, cash, cid) {
    const unit = {
        "One-hundred Dollars": 100,
        "Twenty Dollars": 20,
        "Ten Dollars": 10,
        "Five Dollars": 5,
        Dollar: 1,
        Quarter: 0.25,
        Dime: 0.1,
        Nickel: 0.05,
        Penny: 0.01,
    };
    let change = (cash - price).toFixed(2);
    console.log(change);
    // find the closest unit below change
    const unitArr = Object.entries(unit);
    let idx0 = unitArr.findIndex(element => element[1] <= change);
    console.log(unitArr[idx0]);
    let changeObj = {};
    while (true) {
        let [quotient, remains] = [Math.floor(change / unitArr[idx0][1]), change % unitArr[idx0][1]];
        changeObj[unitArr[idx0][0]] = quotient;
        idx0++;
        change = remains;
        if (remains == 0) break;
    };
    console.log(changeObj);
}

checkCashRegister(19.5, 19.9);