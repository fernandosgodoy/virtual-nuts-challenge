function verifyConditionVisualNuts(number) {
    return (number % 5 == 0) && (number % 3 == 0);
}

module.exports = {
    verifyConditionVisualNuts
};