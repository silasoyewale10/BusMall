// function Product(name, imageSrc){
//     this.name = name;
//     this.clicks =0;
//     this.timesShown =0;
//     this.imageSrc = imageSrc;
//     Product.arrOfProducts.push(this);
// }
// Product.arrOfProducts = [];
// new Product('bag', './assets/bag.jpg');
// new Product('banana', './assets/banana.jpg');
// new Product('bathroom', './assets/bathroom.jpg');
// new Product('boots', './assets/boots.jpg');
// new Product('breakfast', './assets/breakfast.jpg');
// new Product('bubblegum', './assets/bubblegum.jpg');
// new Product('chair', './assets/chair.jpg');
// new Product('cthulhu', './assets/cthulhu.jpg');
// new Product('duck', './assets/dog-duck.jpg');
// new Product('dragon', './assets/dragon.jpg');
// new Product('pen', './assets/pen.jpg');
// new Product('pet-sweep', './assets/pet-sweep.jpg');
// new Product('scissors', './assets/scissors.jpg');
// new Product('shark', './assets/shark.jpg');
// new Product('sweep', './assets/sweep.png');
// new Product('tantaun', './assets/tauntaun.jpg');
// new Product('unicorn', './assets/unicorn.jpg');
// new Product('usb', './assets/usb.gif');
// new Product('water-can', './assets/water-can.jpg');
// new Product('glass', './assets/wine-glass.jpg');


// // console.log(Product().this.imageSrc)

// // console.log(Product.arrOfProducts.length )
// // console.log(Product.arrOfProducts[6].name)

// var leftProductElem = document.getElementById("left_product_img");
// var middleProductElem = document.getElementById("middle_product_img");
// var rightProductElem = document.getElementById("right_product_img");

// var left = document.createElement('left');
// var middle = document.createElement('middle');
// var right = document.createElement('right');

// // leftProductElem.appendChild(left);
// // middleProductElem.appendChild(middle);
// // rightProductElem.appendChild(right);



// // console.log('here',leftProductElem)


// // var leftImage ;
// // var middleImage = '';
// // var rightImage ='';
// var nameOfLeftImage;
// var nameOfMiddleImage;
// var nameOfRightImage;

// // var arrImageStorer = [];

// var arrImageStorer = [1,2,3];
// var pickThreeProducts = function (leftImage, middleImage, rightImage) {
//         var leftImageIndex = Math.floor(Math.random() * 20) ;
//         leftProductElem.setAttribute('src',Product.arrOfProducts[leftImageIndex].imageSrc)
//         nameOfLeftImage= Product.arrOfProducts[leftImageIndex].name;
//         arrImageStorer.push(nameOfLeftImage);
//         console.log(arrImageStorer);
//         // left.textContent = arrImageStorer[0]



//         var middleImageIndex = Math.floor(Math.random() * 20) ;
//         middleProductElem.setAttribute('src',Product.arrOfProducts[middleImageIndex].imageSrc)
//         nameOfMiddleImage = Product.arrOfProducts[middleImageIndex].name;
//         arrImageStorer.push(nameOfMiddleImage);
//         console.log(arrImageStorer);

//         // middle.textContent =arrImageStorer[1]



//         var rightImageIndex = Math.floor(Math.random() * 20) ;
//         rightProductElem.setAttribute('src',Product.arrOfProducts[rightImageIndex].imageSrc)
//         nameOfRightImage = Product.arrOfProducts[rightImageIndex].name;
//         arrImageStorer.push(nameOfRightImage)
//         console.log(arrImageStorer);

//         // right.textContent =arrImageStorer[2]

//         // console.log(arrImageStorer)
//         arrImageStorer.pop()
//         arrImageStorer.pop()
//         arrImageStorer.pop()
//     }


//     pickThreeProducts();



// var clickCounter=0;
// var clickMaxDefault = 25;  //default max if no click count is inputted. 
// var clickMax = 0;   
// var choice = window.prompt("Boss, How many clicks do you want the user to make ? If you enter nothing, your default click max is 25")
// if (choice.length == '0'){  //input is automatically a string in JS
//     clickMax = clickMaxDefault;
//     // console.log("click max " , clickMax)

// }else {
//     clickMax = choice;
//     // console.log("click max " , clickMax)

//  }
// // console.log("")
// leftProductElem.addEventListener('click', clickHandler)
// middleProductElem.addEventListener('click', clickHandler)
// rightProductElem.addEventListener('click', clickHandler)

// function terminateEvent (){

//     leftProductElem.removeEventListener('click', clickHandler)
//     middleProductElem.removeEventListener('click', clickHandler)
//     rightProductElem.removeEventListener('click', clickHandler)
//     // console.log("you are done son")
//     alert("You have made " +clickCounter + " clicks. No more for you")
// }

// function clickHandler(event){
//     // for (var x =0; x <= 25; x++){
//         pickThreeProducts();

//         var imageleft = nameOfLeftImage;
//     var imagemiddle = nameOfMiddleImage;
//     var imageright = nameOfRightImage;


// console.log(arrImageStorer)
//     if(event.target.id == 'left_product_img'){
//         nameOfLeftImage = arrImageStorer[0];
//         // console.log("nameOfSelectedImage is " + arrImageStorer[0])
//     }
//         clickCounter++;
//         if(clickCounter == clickMax){
//             terminateEvent();
//         }

// }



















































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

// var imageleft = nameOfLeftImage;
// var imagemiddle = nameOfMiddleImage;
// var imageright = nameOfRightImage;
// console.log('nameOfLeftImage is ' + imageleft);

var clickCounter = 0;
var clickMaxDefault = 25;  //default max if no click count is inputted. 
var clickMax = 0;
var choice = 7;
// var choice = window.prompt("Boss, How many clicks do you want the user to make ? If you enter nothing, your default click max is 25")
if (choice.length == '0') {  //input is automatically a string in JS
    clickMax = clickMaxDefault;
    // console.log("click max " , clickMax)

} else {
    clickMax = choice;
    // console.log("click max " , clickMax)

}
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
    // pickThreeProducts();
    // // for (var x =0; x <= 25; x++){
    //     var thingIclickedOn = event.target;
    var idOfProduct = event.target.id;
   // console.log(idOfProduct)
    //     var imageleft = nameOfLeftImage;
    // var imagemiddle = nameOfMiddleImage;
    // var imageright = nameOfRightImage;

    // var img1 = document.getElementById(idOfProduct);
   // console.log(img1)

   // console.log("this is ", this);

    // if(clickCounter == clickMax){
    //     terminateEvent();
    // }

    // if(idOfProduct == 'left_product_img'){
    

    // }
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

    
}

function renderPage(){
    var tableHead = document.getElementById('th');
    var tr = document.createElement('tr');
    tableHead.appendChild(tr);
    
}