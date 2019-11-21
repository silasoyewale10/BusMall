function Product(name, imageSrc) {
    this.name = name;
    this.clicks = 0; //danger ensure change back to 0 !!!!
    this.timesShown = 0;
    this.imageSrc = imageSrc;
    Product.arrOfProducts.push(this);
}
Product.arrOfProducts = [];
new Product('bag', './assets/bag.jpg');
new Product('banana', './assets/banana.jpg');
new Product('bathroom', './assets/bathroom.jpg');
new Product('boots', './assets/boots.jpg');
new Product('breakfast', './assets/breakfast.jpg');
new Product('bubblegum', './assets/bubblegum.jpg');
new Product('chair', './assets/chair.jpg');
new Product('cthulhu', './assets/cthulhu.jpg');
new Product('duck', './assets/dog-duck.jpg');
new Product('dragon', './assets/dragon.jpg');
new Product('pen', './assets/pen.jpg');
new Product('pet-sweep', './assets/pet-sweep.jpg');
new Product('scissors', './assets/scissors.jpg');
new Product('shark', './assets/shark.jpg');
new Product('sweep', './assets/sweep.png');
new Product('tantaun', './assets/tauntaun.jpg');
new Product('unicorn', './assets/unicorn.jpg');
new Product('usb', './assets/usb.gif');
new Product('water-can', './assets/water-can.jpg');
new Product('glass', './assets/wine-glass.jpg');

var leftProductElem = document.getElementById("left_product_img");
var middleProductElem = document.getElementById("middle_product_img");
var rightProductElem = document.getElementById("right_product_img");

var nameOfLeftImage;
var nameOfMiddleImage;
var nameOfRightImage;

var leftImageIndex;
var middleImageIndex;
var rightImageIndex;
var pickThreeProducts = function (leftImage, middleImage, rightImage) {
    leftImageIndex = Math.floor(Math.random() * 20);
    var leftProductInstance = Product.arrOfProducts[leftImageIndex];
    leftProductElem.setAttribute('src', leftProductInstance.imageSrc)
    nameOfLeftImage = leftProductInstance.name;
    leftProductInstance.timesShown++
    // console.log(this.name)
    middleImageIndex = Math.floor(Math.random() * 20);
    var middleProductInstance = Product.arrOfProducts[middleImageIndex];
    middleProductElem.setAttribute('src', middleProductInstance.imageSrc)
    nameOfMiddleImage = middleProductInstance.name;
    middleProductInstance.timesShown++

    // console.log('nameOfMiddleImage is ' + nameOfMiddleImage);
    //console.log(this.name)

    rightImageIndex = Math.floor(Math.random() * 20);
    var rightProductInstance = Product.arrOfProducts[rightImageIndex];
    rightProductElem.setAttribute('src', rightProductInstance.imageSrc)
    nameOfRightImage = rightProductInstance.name;
    rightProductInstance.timesShown++
    // console.log('nameOfRightImage is ' + nameOfRightImage);

}
pickThreeProducts();

var arrOfName = [];
var arrOfClicks = [];
var arrOfTimesShown = [];


var clickCounter = 0;
var clickMaxDefault = 25;  //default max if no click count is inputted. 



leftProductElem.addEventListener('click', clickHandler)
middleProductElem.addEventListener('click', clickHandler)
rightProductElem.addEventListener('click', clickHandler)

function terminateEvent() {

    leftProductElem.removeEventListener('click', clickHandler)
    middleProductElem.removeEventListener('click', clickHandler)
    rightProductElem.removeEventListener('click', clickHandler)
    // console.log("you are done son")
    // alert("You have made " +clickCounter + " clicks. No more for you")
}

function clickHandler(event) {
    // console.log('Product.arrOfProducts[leftImageIndex is',leftProduct);
    pickThreeProducts();
    // // for (var x =0; x <= 25; x++){
    //     var thingIclickedOn = event.target;
    var idOfProduct = event.target.id;


    if (idOfProduct === 'left_product_img') {
        var leftProduct = Product.arrOfProducts[leftImageIndex];
        var leftName = leftProduct.name;
        console.log("leftName, ", leftName);
        console.log(leftProduct.clicks++)
        //testing this


    } else if (idOfProduct === 'middle_product_img') {
        var middleProduct = Product.arrOfProducts[middleImageIndex];
        var middleName = middleProduct.name;
        console.log(middleName);
        console.log(middleProduct.clicks++)

    } else if (idOfProduct === 'right_product_img') {
        var rightProduct = Product.arrOfProducts[rightImageIndex];
        var rightName = rightProduct.name;
        console.log(rightName);
        console.log(rightProduct.clicks++)

    } else {
        console.log("unnrecgonized click")
    }
    pickThreeProducts();
    clickCounter++;

    console.log('clickcounter is', clickCounter)
    console.log('clickMaxDefault', clickMaxDefault)

    if (clickCounter == clickMaxDefault) {
        terminateEvent();
        myChart();
        //alert("Voting is over")
    }

}

function jsonPractise() {
    var objectProducts = JSON.stringify(Product.arrOfProducts) // stringifies products.ar...
    localStorage.setItem('gametime', objectProducts)
    var productInfo = localStorage.getItem('Product.arrOfProducts')
    return productInfo;
    console.log(productInfo)
}
jsonPractise();



function productName() {
    var individualNames = [];
    for (var x = 0; x < Product.arrOfProducts.length; x++) {
        individualNames[x] = Product.arrOfProducts[x].name
    }
    return individualNames;
}
function productClicks() {
    var individualClicks = [];
    for (var x = 0; x < Product.arrOfProducts.length; x++) {
        individualClicks[x] = Product.arrOfProducts[x].clicks
    }
    return individualClicks;
}
function productShown() {
    var individualShown = [];
    for (var x = 0; x < Product.arrOfProducts.length; x++) {
        individualShown[x] = Product.arrOfProducts[x].timesShown
    }
    return individualShown;

}

function myChart() {
    productClicks();
    // Product.arrOfProducts[0].clicks = 5;
    console.log("Product.arrOfProducts[0].clicks", Product.arrOfProducts[0].clicks)
    var ctx = document.getElementById('myChart');
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: productName(),
            datasets: [{
                label: 'Number of Clicks for Each Product',
                data: productClicks(),
                backgroundColor: [
                    '#cc65fe',
                    '#cc65fe',
                    '#cc65fe',
                    '#cc65fe',
                    '#cc65fe',
                    '#cc65fe',
                    '#cc65fe',
                    '#cc65fe',
                    '#cc65fe',
                    '#cc65fe',
                    '#cc65fe',
                    '#cc65fe',
                    '#cc65fe',
                    '#cc65fe',
                    '#cc65fe',
                    '#cc65fe',
                    '#cc65fe',
                    '#cc65fe',
                    '#cc65fe',
                    '#cc65fe'

                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)'
                ],
                borderWidth: 1,
            }, {

                label: 'Number of timeshown for Each Product',
                data: productShown(),
                backgroundColor: [
                    '#00FFFF',
                    '#00FFFF',
                    '#00FFFF',
                    '#00FFFF',
                    '#00FFFF',
                    '#00FFFF',
                    '#00FFFF',
                    '#00FFFF',
                    '#00FFFF',
                    '#00FFFF',
                    '#00FFFF',
                    '#00FFFF',
                    '#00FFFF',
                    '#00FFFF',
                    '#00FFFF',
                    '#00FFFF',
                    '#00FFFF',
                    '#00FFFF',
                    '#00FFFF',
                    '#00FFFF'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)'
                ],
                borderWidth: 1


            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: false
                    }
                }]
            }
        }
    });

}