// const library = {
//     print: function () {
//       console.log(`${this.name} is printing a page`);
//     },
//     scan: function () {
//       console.log(`${this.name} is scanning a document`);
//     },
//     play: function (artist, track) {
//       console.log(`${this.name} is playing '${track}' by ${artist}`);
//     },
//   };
//   const orders = [
//     {
//       template: { name: 'ACME Printer'},
//       parts: ['print']      
//     },
//     {
//       template: { name: 'Initech Scanner'},
//       parts: ['scan']      
//     },
//     {
//       template: { name: 'ComTron Copier'},
//       parts: ['scan', 'print']      
//     },
//     {
//       template: { name: 'BoomBox Stereo'},
//       parts: ['play']      
//     }
//   ];
  
function objectFactory(libraryArr, ordersArr){
    let resultArr = [];
    for (const currentObject of ordersArr) {
        let newObject = {};
        newObject['name'] = currentObject.template.name;
        let functions = currentObject.parts;
        for (const currentFunction of functions) {
            newObject[currentFunction] = libraryArr[currentFunction]
        }
        resultArr.push(newObject);
    }
    return resultArr;
}
// const products = objectFactory(library, orders);
// console.log(products);
