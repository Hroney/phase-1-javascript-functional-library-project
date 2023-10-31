function objectToArray(arrayOrObject) {
    // if (typeof arrayOrObject === "object") {
    //     return Object.values(arrayOrObject)
    // } else {
    //     return arrayOrObject
    // }
    return (typeof arrayOrObject === "object") ? Object.values(arrayOrObject) : arrayOrObject
}

function myEach(collection, callback) {
    let collectionCopy = objectToArray(collection)
    Array.prototype.forEach.call(collectionCopy, (x) => {
        callback(x)
    })
    return collection
}

function myMap(collection, callback) {
    let arrayToReturn = objectToArray(collection)
    arrayToReturn = arrayToReturn.map((x) => {
        return callback(x)
    })
    return arrayToReturn
}

function myReduce(collection, callback, acc) {
    let collectionCopy = objectToArray(collection);

    if (typeof acc === 'undefined' && collectionCopy.length > 0) {
        acc = collectionCopy[0];
        collectionCopy = collectionCopy.slice(1);
    }

    return collectionCopy.reduce((accumulator, current) => callback(accumulator, current, collectionCopy), acc)
}

function myFind(collection, predicate) {
    let collectionCopy = objectToArray(collection);

    return collectionCopy.find((x) => {
        return predicate(x)
    })
}

function myFilter(collection, predicate) {
    let collectionCopy = objectToArray(collection);

    return collectionCopy.filter((x) => {
        return predicate(x)
    })
}

function mySize(collection) {
    let collectionCopy = objectToArray(collection);
    return collectionCopy.length
}

function myFirst(array, num) {
    // if (typeof num === 'undefined') {
    //     return array.slice(0, 1)[0]
    // } else {
    //     return array.slice(0, num)
    // }

    return (typeof num === 'undefined') ? array.slice(0, 1)[0] : array.slice(0, num)
}

function myLast(array, num) {
    // if (typeof num === 'undefined') {
    //     return array.slice(-1)[0]
    // } else {
    //     return array.slice(-num)
    // }

    return (typeof num === 'undefined') ? array.slice(-1)[0] : array.slice(-num)
}

function myKeys(object) {
    return Object.keys(object)
}

function myValues(object) {
    return Object.values(object)
}

// Bonuses

function mySortBy(array, callback) {
    // const sortedArray = [...array];

    // function compareFunction(a, b) {
    //   const valueA = callback(a);
    //   const valueB = callback(b);

    //   if (valueA < valueB) return -1;
    //   if (valueA > valueB) return 1;
    //   return 0;
    // }

    // sortedArray.sort(compareFunction);

    // return sortedArray;
    return [...array].sort((a, b) => (callback(a) < callback(b) ? -1 : callback(a) > callback(b) ? 1 : 0))
}

function myFlatten(array, shallow = false, newArr = []) {
    array.forEach((x) => {
        if (!shallow && Array.isArray(x)) {
            myFlatten(x, false, newArr);
        }
        else if (shallow && Array.isArray(x)) {
            x.forEach((x) => {
                newArr.push(x)
            })
        } else {
            newArr.push(x);
        }
    })
    return newArr;
}