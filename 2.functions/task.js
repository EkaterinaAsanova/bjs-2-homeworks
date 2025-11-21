function getArrayParams(...arr) {
	let min = Math.min(...arr);
	let max = Math.max(...arr);
	const initialValue = 0;
	let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue,
		initialValue,
	);
	let avg = Number((sum / arr.length).toFixed(2));

  
	return {
		min: min,
		max: max,
		avg: avg
	};
}

function summElementsWorker(...arr) {
	const initialValue = 0;
	let sum = 0;
	if (arr.length > 0) {

		sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue,
			initialValue,
		);
	}
	return sum;
}

function differenceMaxMinWorker(...arr) {
	let difference = 0;
	if (arr.length > 0) {
		let min = Math.min(...arr);
		let max = Math.max(...arr);
		difference = max - min;
	}

	return difference;
}

function differenceEvenOddWorker(...arr) {
	let sumEvenElement = 0;
	let sumOddElement = 0;
	let differenceSum = 0;
	if (arr.length > 0) {

		for (let i = 0; i < arr.length; i++) {
			if (arr[i] % 2 === 0) {
				sumEvenElement = sumEvenElement + arr[i];
			} else
				sumOddElement = sumOddElement + arr[i];

		}
		differenceSum = sumEvenElement - sumOddElement;
	}

	return differenceSum;
}

function averageEvenElementsWorker(...arr) {
	let averageEvenElement = 0;
	let sumEvenElement = 0;
	let count = 0;
	if (arr.length > 0) {
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] % 2 === 0) {

				sumEvenElement = sumEvenElement + arr[i];
				count = count + 1;
			}
		}
		averageEvenElement = Math.round(sumEvenElement / count);
	}
	return averageEvenElement;
}

function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;
	for (let i = 0; i < arrOfArr.length; i++) {
		const arr = func(...arrOfArr[i]);
		if (arr > maxWorkerResult)
			maxWorkerResult = arr;
	}

	return maxWorkerResult;
}