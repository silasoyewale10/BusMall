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

// console.log(Product().this.imageSrc)

// console.log(Product.arrOfProducts.length )
// console.log(Product.arrOfProducts[6].name)

var leftProductElem = document.getElementById("left_product_img");
var middleProductElem = document.getElementById("middle_product_img");
var rightProductElem = document.getElementById("right_product_img");
// console.log('here',leftProductElem)

var pickThreeProducts = function (leftImage, middleImage, rightImage) {
        var leftImageIndex = Math.floor(Math.random() * 20) ;
        leftProductElem.setAttribute('src',Product.arrOfProducts[leftImageIndex].imageSrc)
       
        
        var middleImageIndex = Math.floor(Math.random() * 20) ;
        middleProductElem.setAttribute('src',Product.arrOfProducts[middleImageIndex].imageSrc)
       

        var rightImageIndex = Math.floor(Math.random() * 20) ;
        rightProductElem.setAttribute('src',Product.arrOfProducts[rightImageIndex].imageSrc)

}
pickThreeProducts();

var clickCounter=0;
var clickMaxDefault = 25;
var clickMax = window.prompt("Boss, How many clicks do you want the user to make ? If you enter nothing, your default click max is 25")
if (clickMax.valueOf.length == 0){
    clickMax = clickMaxDefault;
}
// }else {
    
// }
console.log("click max " , clickMax)

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
        clickCounter++;
        console.log("counter is" ,clickCounter)
        console.log("Click max is ", clickMax)
        if(clickCounter == clickMax){
            terminateEvent();
        }

    //     console.log(x)
    // }
    // console.log('clickCounter is ', clickCounter)
    // var thingIclickedon = event.target;
    // console.log(thingIclickedon.Product().this.name)
    // console.log(event.target.id)
    // console.log(Product.arrOfProducts[1].name)
    // var id = Product.arrOfProducts[2].name;
    // Product.this.clicks++;
    // console.log(id)
    // console.log(Product().this.clicks)

    // for (var x =0; x < Product.arrOfProducts.length; x++){
    //     if(id === )
    // }
    
}


