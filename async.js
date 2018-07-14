console.log('Started');

setTimeout(() => {
	console.log('first: in the middle of the thick.');
}, 2000);

setTimeout(() => {
	console.log('second: in the middle of the thick.');
}, 0);
console.log('End');


