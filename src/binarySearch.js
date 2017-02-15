module.exports = {
	Array.prototype.toTwenty = function() {
		var start = 1;
		var end = 20
		for (var i = start; i <= end; i +=1) {
			oneToTwenty.push(i); 
		}
		return oneToTwenty;

		
	},
	var oneToTwenty = [].toTwenty();
	console.log(oneToTwenty);

    Array.prototype.toForty = function() {
    	var start = 2;
    	var end = 40;
    	for (var i = start; i <= end; i +=2) {
    		this.push(i);
    	}
    	return this;
    },
    var twoToForty = [].toForty();
    console.log(twoToForty);


    Array.prototype.toOneThousand = function() {
    	var start = 10;
    	var end = 1000;
    	for (var i = start; i <= end; i += 10) {
    		this.push(i);
    	}
    	return this;
    },
    var tenToOneThousand = [].toOneThousand();
    console.log(tenToOneThousand)

    Array.prototype.search = function(arr,item) {
    	var countLoop = 0;
    	var countIndex = {count: , index: };
    	var firstIndex = 0;
    	var lastIndex = arr.length-1;

    	while ( lastIndex >= firstIndex) {
    		countLoop++;
    		var midpoint = math.floor((lastIndex + firstIndex)/2);
    		if(arr[midpoint] === item) {
    			return countLoop;
    			return midpoint
    		}
    		else {
    			if (item < arr[midpoint]) {
    			lastIndex = midpoint -1;
    			
    		    } else {
    		    	firstIndex = midpoint + 1
    		    }
    		}
    	}
    	return -1

    }

}