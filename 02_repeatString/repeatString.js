const repeatString = function(string, num) {
    let word = "";
    for (let i = 0; i < num; i++) {
        word += string;
    }
    return word;
};
repeatString("hey", 3);
repeatString("hello", 10);

// Do not edit below this line
module.exports = repeatString;