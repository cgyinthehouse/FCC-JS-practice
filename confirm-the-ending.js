function confirmEnding(str, target) {
  let suffix = str.substring(str.length,str.length-target.length);
  return suffix == target
}

confirmEnding("Bastian", "n");
console.log(confirmEnding('Bastian','n'))