function myEach(collection, callback) {
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            alert(callback(collection[i]));
        }
    } else if (typeof collection === "object") {
        const array = Object.values(collection);
        for (let i = 0; i < array.length; i++) {
            alert(callback(array[i]));
        }
    }
    return collection;
}

function myMap(collection, callback) {
    let newArray = [];
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            newArray.push(callback(collection[i]));
        }
    } else if (typeof collection === "object") {
        const array = Object.values(collection);
        for (let i = 0; i < array.length; i++) {
            newArray.push(callback(array[i]));
        }
    }
    return newArray;
}

function myReduce(collection, callback, acc) {
    if (acc !== undefined && Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            acc = callback(acc, collection[i], collection);
        }
    }

    if (acc === undefined && Array.isArray(collection)) {
        acc = collection[0];
        for (let i = 1; i < collection.length; i++) {
            acc = callback(acc, collection[i], collection);
        }
    }

    if (
        acc !== undefined &&
        typeof collection === "object" &&
        Array.isArray(collection) === false
    ) {
        const arr = Object.values(collection);
        for (let i = 0; i < arr.length; i++) {
            acc = callback(acc, arr[i], collection);
        }
    }

    if (
        acc === undefined &&
        typeof collection === "object" &&
        Array.isArray(collection) === false
    ) {
        const arr = Object.values(collection);
        acc = arr[0];
        for (let i = 1; i < arr.length; i++) {
            acc = callback(acc, arr[i], collection);
        }
    }
    return acc;
}

function myFind(collection, callback) {
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            if (callback(collection[i])) {
                return collection[i];
            }
        }
    }
}

function myFilter(collection, callback) {
    const array = [];
    if (Array.isArray(collection)) {
        collection.forEach((el) => {
            if (callback(el)) {
                array.push(el);
            }
        });
    }
    return array;
}

function mySize(collection) {
    let answer;
    if (Array.isArray(collection)) {
        answer = collection.length;
    }
    if (typeof collection === "object") {
        const array = Object.values(collection);
        answer = array.length;
    }
    return answer;
}

function myFirst(array, n) {
    if (n) {
        let answer = [];
        for (let i = 0; i < n; i++) {
            answer.push(array[i]);
        }
        return answer;
    } else {
        return array[0];
    }
}

function myLast(array, n) {
    let integer = array.length - n;
    if (n) {
        let answer = [];
        for (let i = integer; i < array.length; i++) {
            answer.push(array[i]);
        }
        return answer;
    } else {
        return array[array.length - 1];
    }
}

function myKeys(object) {
    let answer = [];
    for (const prop in object) {
        answer.push(prop);
    }
    return answer;
}

function myValues(object) {
    let answer = [];
    for (const prop in object) {
        answer.push(object[prop]);
    }
    return answer;
}
