// Add your functions here
function map(arr, func) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr.push(func(arr[i]))
    }
    return newArr
}

function reduce(arr, func, start = null) {
    if (start) {
      arr.forEach((el) => {
        start = func(el, start)
      })
    } else {
      start = arr[0];
      for (let i = 1; i < arr.length; i++) {
        start = func(arr[i], start)
      }
    }
    return start
}