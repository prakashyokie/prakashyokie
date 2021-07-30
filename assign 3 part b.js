
const orderData = {
    "Below 500": 20
    "500-1000": 29
    "1000-1500": 30
    "1500-2000": 44
    "Above 2000": 76,
};
var total = 0;
var count = 0;
//************* Calculate the total number of orders placed for the restaurant***********
for (const key in orderData) {
    //console.log(key, orderData[key]);
    total = total + orderData[key];
    count = count + 1;
}
console.log("total number of orders placed for the restaurant = " + total);

//**********Calculate the number of order proportion options***********
console.log("number of order proportion optioins = " + count );

//*************Calculate the percentage of each proportion in below format:*************
var a = [];
count = 1;
for (const key in orderData)  {
    let obj = {
        id: count,
        order: key,
        "order percentage": parseFloat((orderData[key] * 100 /total).toFixed(2),
        restaurant: "Punjabi Tadka",
    };
    }
} */