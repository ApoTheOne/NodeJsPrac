// console.log(arguments);

// exports.id = 1; //this is ok

// exports = {id:1}; //this is not ok

// module.exports={id: 1}; //this is ok

// var g= 42; //local to this file

// require = function (){
//     return {mocked : true};
// }

// const fs = require('fs');
// console.log(fs);
/*=================================================*/

// const printStars = require('./printStars');
// printStars(10, 'Hi!');

/*=================================================*/

// require('./ascii-art');
// //console.log(require.cache);
// delete require.cache['C:\\NodeJs Practice\\ascii-art.js'];
// require('./ascii-art');

/*=================================================*/

// require('./ascii-art')();
// require('./ascii-art')();

/*=================================================*/
require('./util');

console.log(ans);
//console.log(global);
console.log(module);