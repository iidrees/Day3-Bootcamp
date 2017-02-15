module.exports = {
	findMissing: function(arr1,arr2) {
		var lenArr1 = arr1.length-1
		var lenArr2 = arr2.length-1

		if (lenArr1 == [] && lenArr2 == []) {
			return 0;
		}
		else if (lenArr1[i] === lenArr2[i]) {
			return 0;
		}
		else {
			for (var j =0; j <lenArr2; j++) {
				if (lenArr1.indexOf(lenArr2[j]) == -1)
					return lenArr2[j];

			}
			return null
		}
	}
}