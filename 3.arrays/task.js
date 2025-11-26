function compareArrays(arr1, arr2) {
	if (arr1.length !== arr2.length) {
		return false;
	}

	return arr1.every((element, index) => element === arr2[index]);
}

function getUsersNamesInAgeRange(users, gender) {

	filteredGender = users.filter((user) => user.gender === gender);
	if (filteredGender.length === 0) {
		return 0;
	}

	let result = (filteredGender.reduce((sum, user) => sum + user.age, 0)) / filteredGender.length;
	return result;
}
