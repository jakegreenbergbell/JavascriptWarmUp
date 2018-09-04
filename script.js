function isOldEnoughToVote(age) {
    if(age >= 18){
        return true;
    } else{
        return false;
    }
}

function getProperty(obj, key) {
    return obj[key];
}

function addProperty(obj, key) {
    obj[key] = true;
}

function removeProperty(obj, key) {
    delete obj[key];
}

function isEven(num) {
    if(num%2 === 0){
        return true;
    } else{
        return false;
    }
}

function isOdd(num) {
    if(num % 2 == 1){
        return true;
    } else{
        return false;
    }
}

function addToFront(arr, element) {
    var array = [element];
    return array.concat(arr);
}

function addToBack(arr, element) {
    var array = [element];
    return arr.concat(array);
}

function joinArrays(arr1, arr2) {
    return arr1.concat(arr2);
}

function getAllWords(str) {
    if (str.length == 0){
        return [];
    } else {
        return str.split(" ");
    }
}

function extend(obj1, obj2) {
    for(var key in obj2){
        if(!obj1[key]){
            obj1[key] = obj2[key];
        }
    }
    return obj1;
}

function removeStringValues(obj) {
    for(var key in obj){
        var type = typeof obj[key];
        if(type == "string"){
            delete obj[key];
        }
    }
    return obj;
}

function getIndexOf(char, str) {
    for(var i = 0; i < str.length; i ++){
        if(str[i] == char){
            return i;
        }
    }
    return -1;
}

function keep(array, keeper) {
    var newArray = [];
    for(var i =0; i < array.length; i++){
        if (array[i] == keeper)
            newArray.push(array[i]);
    }
    return newArray;
}

function getLargestElementAtProperty(obj, key) {
    if(!Array.isArray(obj[key])){
        return undefined;
    }
    var howLong = obj[key].length;
    if(howLong === 0){
        return undefined;
    }
    var greatest = obj[key][0];
    for(var i = 0; i< howLong; i ++){
        if(obj[key][i] > greatest){
            greatest = obj[key][i];
        }
    }
    return greatest;
}

function calculateBillTotal(preTaxAndTipAmount) {
    total = preTaxAndTipAmount;
    total += (preTaxAndTipAmount * 0.095);
    total += (preTaxAndTipAmount * 0.15);
    return total;
}

function sumDigits(num) {
    var num2 = num.toString();
    var total = 0;
    for(var i = 0; i < num2.length; i++){
        if(num2[i] == "-"){
            total -= parseInt(num2[i + 1])
            i++
        } else {
            total += parseInt(num2[i]);
        }
    }
    console.log(num);
    return total;
}

function listAllValues(obj) {
    var array = [];
    for(var key in obj){
        array.push(obj[key]);
    }
    return array;
}

function detectOutlierValue(string){
    var arrayOnums = string.split(" ");
    var even = [];
    var odd = [];
    for(var i = 0; i < arrayOnums.length; i++){
        if(arrayOnums[i] % 2 == 1){
            odd += (i + 1);
        } else {
            even += (i + 1);
        }
    }
    if(even.length > odd.length){
        return parseInt(odd[0]);
    } else {
        return parseInt(even[0]);
    }
}

function search(array, value) {
    var upperLimit = array.length -1;
    var lowerLimit = 0;
    var middle = Math.floor((lowerLimit + upperLimit)/2);

    while (upperLimit > lowerLimit && middle !== value ){
        if(array[middle] == value){
            return middle;
        }
        if(array[middle] > value){
            middle = Math.floor((middle + lowerLimit)/2);
            upperLimit = middle;
        }else{
            middle = Math.floor((middle + upperLimit)/2);
            lowerLimit = middle;
        }
    }
    return null;
}