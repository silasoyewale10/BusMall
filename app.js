function Product(name, imageSrc) {
    this.name = name;
    this.clicks = 0;
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

// console.log(Product.arrOfProducts);

// console.log(Product().this.imageSrc)

// console.log(Product.arrOfProducts.length )
// console.log(Product.arrOfProducts[6].name)

var leftProductElem = document.getElementById("left_product_img");
var middleProductElem = document.getElementById("middle_product_img");
var rightProductElem = document.getElementById("right_product_img");
// console.log('here',leftProductElem)


// var leftImage ;
// var middleImage = '';
// var rightImage ='';
var nameOfLeftImage;
var nameOfMiddleImage;
var nameOfRightImage;

var leftImageIndex;
var middleImageIndex;
var rightImageIndex;

var arrOfTimesShown =[];
var arrOfClicks = [];
var pickThreeProducts = function (leftImage, middleImage, rightImage) {
    // arr[1]=2
    leftImageIndex = Math.floor(Math.random() * 20);
    var leftProductInstance = Product.arrOfProducts[leftImageIndex];
    leftProductElem.setAttribute('src', leftProductInstance.imageSrc)
    nameOfLeftImage = leftProductInstance.name;
    leftProductInstance.timesShown++

    arrOfTimesShown.push(leftProductInstance.timesShown++)



    middleImageIndex = Math.floor(Math.random() * 20);
    var middleProductInstance = Product.arrOfProducts[middleImageIndex];
    middleProductElem.setAttribute('src', middleProductInstance.imageSrc)
    nameOfMiddleImage = middleProductInstance.name;
    middleProductInstance.timesShown++

    arrOfTimesShown.push(middleProductInstance.timesShown++)



    rightImageIndex = Math.floor(Math.random() * 20);
    var rightProductInstance = Product.arrOfProducts[rightImageIndex];
    rightProductElem.setAttribute('src', rightProductInstance.imageSrc)
    nameOfRightImage = rightProductInstance.name;
    rightProductInstance.timesShown++

    arrOfTimesShown.push(rightProductInstance.timesShown++)


}
pickThreeProducts();

// var imageleft = nameOfLeftImage;
// var imagemiddle = nameOfMiddleImage;
// var imageright = nameOfRightImage;
// console.log('nameOfLeftImage is ' + imageleft);

var clickCounter = 0;
var clickMaxDefault =25;  //default max if no click count is inputted. 
// var clickMax = 10;
// var choice = 7;
// var choice = window.prompt("Boss, How many clicks do you want the user to make ? If you enter nothing, your default click max is 25")
// if (choice.length == '0') {  //input is automatically a string in JS
//     clickMax = clickMaxDefault;
//     // console.log("click max " , clickMax)

// } else {
//     clickMax = choice;
//     // console.log("click max " , clickMax)

// }
// console.log("")

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
   console.log('arrtimeshown',arrOfTimesShown)
    
    if (idOfProduct === 'left_product_img') {
        var leftProduct = Product.arrOfProducts[leftImageIndex];
        var leftName = leftProduct.name;
        console.log(leftName);
        console.log(leftProduct.clicks++)

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

    console.log('clickcounter is',clickCounter)
    console.log('clickMaxDefault',clickMaxDefault)
    
    if(clickCounter == clickMaxDefault){
        terminateEvent();
    }
    
}

function myChart () {
    var ctx = document.getElementById('myChart');
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tantaun', 'unicorn', 'usb', 'water-can', 'glass'],
        datasets: [{
            label: 'Number of Votes for Each Product',
            data: [12, 19],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
 
}
myChart ();