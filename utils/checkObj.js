const checkObj = (objA, objB) => {

    let testA = objA.global;
    let testB = objB.global;
    if (testA.cases !== testB.cases || testA.deaths !== testB.deaths || testA.recovered !== testB.recovered) return false;
    //console.log('dsg');
    testA = objA.vietnam;
    testB = objB.vietnam;
    if (testA.cases !== testB.cases || testA.deaths !== testB.deaths || testA.recovered !== testB.recovered) return false;
    return true;
}  
module.exports = checkObj;