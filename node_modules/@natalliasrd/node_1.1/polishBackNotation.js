//calcPolishBackNotation
module.exports = function(string) {
    const operators = {
        '+' : (a, b) => a + b,
        '-' : (a, b) => a - b,
        '/' : (a, b) => Math.trunc(a / b),
        '*' : (a, b) => a * b,
    }
    const stringArray = string.split(' ');
    const rezCurrent = [];
    for (let item of stringArray) {
        if (item in operators) {
            const b = rezCurrent.pop();
            const a = rezCurrent.pop();
            const result = operators[item](a, b);
            rezCurrent.push(result);
        } else {
            rezCurrent.push(Number(item));
        }
    }
    return rezCurrent[0];
}