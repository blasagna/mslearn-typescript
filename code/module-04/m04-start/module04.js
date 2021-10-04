/* Module 4: Develop typed functions using TypeScript
   Lab Start  */
/*  sortDescending is a comparison function that tells the sort method how to sort
    numbers in descending order */
var sortDescending = function (a, b) {
    if (a > b) {
        return -1;
    }
    else if (b > a) {
        return 1;
    }
    else {
        return 0;
    }
};
/*  sortDescending is a comparison function that tells the sort method how to sort
    numbers in ascending order. */
var sortAscending = function (a, b) {
    if (a > b) {
        return 1;
    }
    else if (b > a) {
        return -1;
    }
    else {
        return 0;
    }
};
/*  The buildArray function builds an array of unique random numbers containing the number
    of items based on the number passed to it. The sortOrder parameter determines
    whether to sort the array in ascending or descending order. */
function buildArray(items, sortOrder) {
    var randomNumbers = [];
    var nextNumber;
    for (var counter = 0; counter < items; counter++) {
        nextNumber = Math.ceil(Math.random() * (100 - 1));
        if (randomNumbers.indexOf(nextNumber) === -1) {
            randomNumbers.push(nextNumber);
        }
        else {
            counter--;
        }
    }
    if (sortOrder === 'ascending') {
        return randomNumbers.sort(sortAscending);
    }
    else {
        return randomNumbers.sort(sortDescending);
    }
}
var myArray1 = buildArray(12, 'ascending');
var myArray2 = buildArray(8, 'descending');
console.log(myArray1);
console.log(myArray2);
/*  EXERCISE 2
*/
function loanCalculator(principle, interestRate, months) {
    if (months === void 0) { months = 12; }
    var interest = interestRate / 1200; // Calculates the monthly interest rate
    var payment;
    payment = principle * interest / (1 - (Math.pow(1 / (1 + interest), months)));
    return payment.toFixed(2);
}
var myLoan = loanCalculator(1000, 5);
console.log(myLoan);
