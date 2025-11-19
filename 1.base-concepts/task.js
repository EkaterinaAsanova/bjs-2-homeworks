"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	const discriminant = Math.pow(b, 2) - 4 * a * c;

	if (discriminant < 0) {
		return arr;
	} else if (discriminant === 0) {
		arr[0] = -b / (2 * a);
	} else if (discriminant > 0) {
		arr[0] = (-b + Math.sqrt(discriminant)) / (2 * a);
		arr[1] = (-b - Math.sqrt(discriminant)) / (2 * a);
	}

	return arr;
}
solveEquation;
console.log(solveEquation);

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let percentMonths = percent / 12;
	let percentTransformer = percentMonths / 100;
	let repaymentOfMainDebt = amount - contribution; // тело кредита
	let payment = repaymentOfMainDebt * (percentTransformer + (percentTransformer / (((1 + percentTransformer) ** countMonths) - 1)));
	let totalLoanRepayment = Number((payment * countMonths).toFixed(2));

	return totalLoanRepayment;
}
calculateTotalMortgage;
