function arrayToObjects(array) {
    let obj = {};
    for (let i = 0; i < array.length; i += 2) {
        let product = array[i]
        let caliries = Number(array[i + 1]);
        obj[product] = caliries;
    }
    console.log(obj);
}
arrayToObjects(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);