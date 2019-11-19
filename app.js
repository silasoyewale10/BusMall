function Product(name, imageSrc){
    this.name = name;
    this.clicks =0;
    this.timesShown =0;
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

console.log(Product.arrOfProducts);

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

var pickThreeProducts = function (leftImage, middleImage, rightImage) {
        var leftImageIndex = Math.floor(Math.random() * 20) ;
        leftProductElem.setAttribute('src',Product.arrOfProducts[leftImageIndex].imageSrc)
        nameOfLeftImage= Product.arrOfProducts[leftImageIndex].name;
        // console.log(this.name)
        var middleImageIndex = Math.floor(Math.random() * 20) ;
        middleProductElem.setAttribute('src',Product.arrOfProducts[middleImageIndex].imageSrc)
        nameOfMiddleImage = Product.arrOfProducts[middleImageIndex].name;
        console.log('nameOfMiddleImage is ' + nameOfMiddleImage);
        console.log(this.name)
        
        
        var rightImageIndex = Math.floor(Math.random() * 20) ;
        rightProductElem.setAttribute('src',Product.arrOfProducts[rightImageIndex].imageSrc)
        nameOfRightImage = Product.arrOfProducts[rightImageIndex].name;
        console.log('nameOfRightImage is ' + nameOfRightImage);
    }
    pickThreeProducts();
    
    // var imageleft = nameOfLeftImage;
    // var imagemiddle = nameOfMiddleImage;
    // var imageright = nameOfRightImage;
    // console.log('nameOfLeftImage is ' + imageleft);

var clickCounter=0;
var clickMaxDefault = 25;  //default max if no click count is inputted. 
var clickMax = 0;   
var choice = window.prompt("Boss, How many clicks do you want the user to make ? If you enter nothing, your default click max is 25")
if (choice.length == '0'){  //input is automatically a string in JS
    clickMax = clickMaxDefault;
    // console.log("click max " , clickMax)

}else {
    clickMax = choice;
    // console.log("click max " , clickMax)
    
 }
// console.log("")

leftProductElem.addEventListener('click', clickHandler)
middleProductElem.addEventListener('click', clickHandler)
rightProductElem.addEventListener('click', clickHandler)

function terminateEvent (){

    leftProductElem.removeEventListener('click', clickHandler)
    middleProductElem.removeEventListener('click', clickHandler)
    rightProductElem.removeEventListener('click', clickHandler)
    console.log("you are done son")
    alert("You have made " +clickCounter + " clicks. No more for you")
}

function clickHandler(event){
    // for (var x =0; x <= 25; x++){
        pickThreeProducts();

        var imageleft = nameOfLeftImage;
    var imagemiddle = nameOfMiddleImage;
    var imageright = nameOfRightImage;
    console.log('nameOfLeft    Image is ' + imageleft);

        clickCounter++;
        // console.log("counter is" ,clickCounter)
        // console.log("Click max is ", clickMax)
        if(clickCounter == clickMax){
            terminateEvent();
        }
        console.log("event.target.name is " + imageleft)
        console.log(Product.arrOfProducts[2].name);
    // for (var x = 0; x <= clickMax; x++){
    //     for (var j =0; j <= arrOfProducts.length; j++){
    //         if (Product.arrOfProducts[j].name = Product.arrOfProducts)
    //     }
    // }    

    var thingIclickedOn = event.target;
    var idOfProduct = event.target.id
    console.log(idOfProduct);
}


