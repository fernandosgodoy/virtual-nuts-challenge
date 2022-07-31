function printSequentialResults(numberOfIteractions) {
    let numberOfIteractionsTogo = 0;
    for (let i=1; i <= numberOfIteractions; i++) {
        if (verifyConditionVisualNuts(i))
            console.log('Visual Nuts');
        else if (verifyConditionIsNuts(i))
            console.log('Nuts');
        else if (verifyConditionIsVisual(i))
            console.log('Visual');
        else 
            console.log(i);

        numberOfIteractionsTogo = i;
    }
    return numberOfIteractionsTogo;
}

function verifyConditionVisualNuts(number) {
    return (number % 5 == 0) && (number % 3 == 0);
}

function verifyConditionIsNuts(number) {
    return (number % 5 == 0);
}

function verifyConditionIsVisual(number) {
    return (number % 3 == 0);
}

module.exports = { 
    printSequentialResults,
    verifyConditionVisualNuts,
    verifyConditionIsNuts,
    verifyConditionIsVisual
}
