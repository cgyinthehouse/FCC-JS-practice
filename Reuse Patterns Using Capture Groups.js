let repeatNum = "42 42 42";
let reRegex = /^(\d+)(\s)\1\2\1$/; // 修改這一行
let result = reRegex.test(repeatNum);