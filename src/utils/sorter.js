const sortData = (arr,compareData) => {
	if (arr.length <= 1) { 
		return arr;
	} else {

		var left = [];
		var right = [];
		var newArray = [];
		var pivot = arr.pop();
		var length = arr.length;

		for (var i = 0; i < length; i++) {
			if (compareData(arr[i],pivot)) {
				left.push(arr[i]);
			} else {
				right.push(arr[i]);
			}
		}

		return newArray.concat(sortData(left, compareData), pivot, sortData(right, compareData));
	}
}

module.exports = { sortData };