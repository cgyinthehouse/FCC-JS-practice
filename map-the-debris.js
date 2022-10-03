function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    let newArr = [...arr];
    newArr.forEach(element => {
        element.orbitalPeriod = Math.round(((earthRadius + element.avgAlt) ** 3 / GM )** 0.5 * 2 * Math.PI);
        delete element.avgAlt;
    })
    return newArr;
}


orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);
console.log(orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]));