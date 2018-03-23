const print = (stars, header) => {
    console.log('*'.repeat(stars));
    console.log(header);
    console.log('*'.repeat(stars));
}

if(require.main == module) {
    //Running as a script
    //console.log(process.argv[0]);
    //console.log(process.argv[1]);
    print(process.argv[2], process.argv[3]);
} else{
    //Being required
    module.exports = print;
}