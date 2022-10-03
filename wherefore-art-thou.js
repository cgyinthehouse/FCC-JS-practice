function whatIsInAName(collection, source) {

  // Only change code below this line
  return collection
    .filter(obj=>Object.keys(source)
        .every(key=>obj.hasOwnProperty(key) && obj[key]==source[key]));
  // Only change code above this line

}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

const test = whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 })

console.log(test)