module.exports = function longestConsecutiveLength(array){
if(array.length === 1){
	return 1;
}
let maxNumber = array[0];
let minNumber = array[0];
for(let i = 1; i < array.length; i++){
	if(array[i] > maxNumber){
		maxNumber = array[i];
	}else if(array[i] < minNumber){
		minNumber = array[i];
	}else{
		continue;
	}
}
let res = countingSort(array, minNumber, maxNumber);
let maxSequence = searchSequence(res);
 return maxSequence.length;
}

function searchSequence(sortArr){
     let temp = sortArr[0];
     let tempArr = [];
     let n = 0;
     debugger;
     for(let i = 1; i < sortArr.length; i++){
     	if(sortArr[i] === temp){
     		continue;
       	}else if(sortArr[i] - temp === 1){
             tempArr[n] = temp;
             tempArr[n+1] = sortArr[i];
             temp = sortArr[i];
             n++;
       	}else{
       		n = 0;
       		temp = sortArr[i];
       	}
     }
     return tempArr;
}
  function countingSort(arr, min, max){
    var i, z = 0, count = [];
     for (i = min; i <= max; i++) {
        count[i] = 0;
    }
     for (i=0; i < arr.length; i++) {
        count[arr[i]]++;
    }
     for (i = min; i <= max; i++) {
        while (count[i]-- > 0) {
            arr[z++] = i;
        }
    }
 return arr;
}

