var carts = document.querySelectorAll('.add-cart');

var products = [
	{
		name: "grey ",
		tag: "grey",
		price: 135, 
		inCart: 0
	}, 
	{
		name: "yellow ",
		tag: "yellow",
		price: 135, 
		inCart: 0
	}, 
	{
		name: "red",
		tag: "red",
		price: 135, 
		inCart: 0
	}, 
	{
		name: "blue ",
		tag: "blue",
		price: 135, 
		inCart: 0
	}, 
	{
		name: "white ",
		tag: "white",
		price: 135, 
		inCart: 0
	}
];


for (var i = 0; i < carts.length; i++) {
	carts[i].addEventListener('click', () => {
		cartNumbers(products[i]);
		totalCost(products[i]);
	})
}

function onLoadCartNumbers() {
	var productNumbers = localStorage.getItem('cartNumbers');

	if (productNumbers){
		document.querySelector('.cart span').textContent = productNumbers;
	}
}

function cartNumbers(product) {

	var productNumbers = localStorage.getItem('cartNumbers');

	productNumbers = parseInt(productNumbers);

	if(productNumbers){
		localStorage.setItem('cartNumbers', productNumbers + 1);
		document.querySelector('.cart span').textContent = productNumbers + 1;
	} else{
		localStorage.setItem('cartNumbers', 1);
		document.querySelector('.cart span').textContent = 1;
	}

	setItems(product);	
}


function setItems(product){
	var cartItems = localStorage.getItem('productsInCart');
	cartItems = JSON.parse(cartItems);
    
	if(cartItems != null){

		if(cartItems[product.tag] != undefined){
			cartItems = {
				...cartItems,
				[product.tag]: product
			}
		}
		cartItems[product.tag].inCart += 1;
	} 
	else{
		product.inCart = 1;
		cartItems = {
			[product.tag]: product
		}
	}	

	localStorage.setItem('productsInCart', JSON.stringify(cartItems));
}
function totalCost(product) {
	var cartCost = localStorage.getItem('totalCost');
	
	console.log('my cartCost is', cartCost);
	console.log(typeof cartCost);
	

	if(cartCost != null){
		cartCost = parseInt(cartCost);
		localStorage.setItem("totalCost", cartCost + product.price);
	}
	else{
		localStorage.setItem("totalCost", product.price);
	}
}

onLoadCartNumbers();