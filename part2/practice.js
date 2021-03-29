function dummy () {
  return 1;
}
/**
 * Reverse an array
 * 
 * @example
 * 
 * reverse([1,2,3]) returns [3,2,1]
 * 
 * @param {array} array
 * @returns {array}
 */
function reverse (array) {
  return array.reverse();
}

/**
 * Reverse a string
 * 
 * @example
 * 
 * stringReverse('hello') returns 'olleh'
 * 
 * @param {string} text
 * @returns {string}
 * 
 */
function stringReverse (text) {
  return text.reverse();
}


/**
 * return a fixed length fibonacci list
 * 
 * @example
 * 
 * fibonacci(5) returns [1,1,2,3,5]
 * 
 * @param {number} length
 * @returns {array}
 */
function fibonacci (length) {
  var list = []
  list[0]=1;
  list[1]=1;
  for(let i = 2;i<length;i++){
    list[i]=list[i-1]+list[i-2]
  }
  return list
}

/**
 * return the biggest number in the array
 * 
 * @example
 * 
 * biggest([1,3,5,7,9]) returns 9
 * 
 * @param {array} array
 * @returns {number}
 */
function biggest (array) {
  max = 0
  for(let i =0;i<array.length;i++){
    if(array[i]>max)
    {
      max = array[i]
    }
  }
  return max;
}

/**
 * Creates an array of numbers progressing from 
 * start up to, but not including, end
 * 
 * YOU HAVE TO IMPLEMENT YOUR OWN ALGORITHM HERE!!!
 * DON'T USE ANY 3RD PARTY LIBRARIES.
 * 
 * @example
 * 
 * range(0,4) returns [0,1,2,3]
 * 
 * @param {number} start 
 * @param {number} end 
 * @returns {array}
 */
function range (start, end) {
  list = []
  for(let i = start;i<end;i++){
     list.push(i)
  }
  return list;
}

/**
 * Recursively flattens array.
 * 
 * YOU HAVE TO IMPLEMENT YOUR OWN ALGORITHM HERE!!!
 * DON'T USE ANY 3RD PARTY LIBRARIES.
 * 
 * @example
 * 
 * flatten([1,[2,[3,4],[5,[6]]]]) returns [1,2,3,4,5,6]
 * 
 * @param {array} array
 * @returns {array}
 */
function flatten (array) {
  let arr =[]
  for (let i = 0;i<array.length;i++){
    let element = array[i];
    if(Array.isArray(element)){
      flatten(element)
    }else{
      arr.push(element)
    }
  }
  return arr;
}

module.exports = {
  dummy,
  fibonacci,
  reverse,
  flatten,
  biggest,
  flatten,
  stringReverse,
  range
};
