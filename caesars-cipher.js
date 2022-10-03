function rot13(str) {
    return str.replace(/[A-Z]/g, (char) => {
        let charcode = char.charCodeAt() + 13;
        if (charcode > 90) {
            charcode -= 26;
        }
        return char = String.fromCharCode(charcode);
    });
};

console.log(rot13("SERR PBQR PNZC"));