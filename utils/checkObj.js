const checkObj = (objA, objB) => {
    // Tạo các mảng chứa tên các property
    //console.log(objA);
    //console.log(objB);

    //let global = 'global';
    // let vietnam = 'vietnam';
    // let cases = 'cases';
    // let deaths = 'deaths';
    // let recovered = 'recovered';

    let testA = objA.data.global;
    let testB = objB.data.global;
    if (testA.cases !== testB.cases || testA.deaths !== testB.deaths || testA.recovered !== testB.recovered) return false;
    //console.log('dsg');
    testA = objA.data.vietnam;
    testB = objB.data.vietnam;
    if (testA.cases !== testB.cases || testA.deaths !== testB.deaths || testA.recovered !== testB.recovered) return false;
    return true;
}  
module.exports = checkObj;