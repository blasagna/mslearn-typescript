/// <reference path="module08_loans.ts" />
/*  Create LoanPrograms namespace. */
var LoanPrograms;
(function (LoanPrograms) {
    /*  Update the calculateInterestOnlyLoanPayment function. */
    function calculateInterestOnlyLoanPayment(loanTerms) {
        var payment;
        payment = loanTerms.principle * calculateInterestRate(loanTerms.interestRate);
        return 'The interest only loan payment is ' + payment.toFixed(2);
    }
    LoanPrograms.calculateInterestOnlyLoanPayment = calculateInterestOnlyLoanPayment;
    /*  Update the calculateConventionalLoanPayment function. */
    function calculateConventionalLoanPayment(loanTerms) {
        var interest = calculateInterestRate(loanTerms.interestRate);
        var payment;
        payment = loanTerms.principle * interest / (1 - (Math.pow(1 / (1 + interest), loanTerms.months)));
        return 'The conventional loan payment is ' + payment.toFixed(2);
    }
    LoanPrograms.calculateConventionalLoanPayment = calculateConventionalLoanPayment;
    function calculateInterestRate(interestRate) {
        var interest = interestRate / 1200;
        return interest;
    }
})(LoanPrograms || (LoanPrograms = {}));
/*  Module 8: Organize code using TypeScript namespaces
    Lab Start */
/*  Add reference paths. */
/// <reference path="module08_loans.ts" />
/// <reference path="module08_loan-programs.ts" />
/*  Update the function calls. */
var interestOnlyPayment = LoanPrograms.calculateInterestOnlyLoanPayment({ principle: 30000, interestRate: 5 });
var conventionalLoanPayment = LoanPrograms.calculateConventionalLoanPayment({ principle: 30000, interestRate: 5, months: 180 });
console.log(interestOnlyPayment); //* Returns "The interest only loan payment is 125.00" 
console.log(conventionalLoanPayment); //* Returns "The conventional loan payment is 237.24"
