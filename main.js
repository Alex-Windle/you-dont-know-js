/* 
You Don't Know JS Up & Going 
Chapter 1 Exercise 
Write a program to calculate the total price of your phone purchase.
*/

const TAX_RATE = 0.08; 
const PHONE_PRICE = 99.99; 
const ACCESSORY_PRICE = 9.99; 
const SPENDING_THRESHOLD = 200; 

var bank_balance = 303.91; 
var amount = 0; 

function calculateTax (amount) {
	return amount * TAX_RATE; 
}

function formatAmount (amount) {
	return '$' + amount.toFixed( 2 ); 
}

//buy phones while you have money
while (amount < bank_balance) {
	//buy a phone
	amount = amount + PHONE_PRICE; 

	//can you afford an accessory?
	if (amount < SPENDING_THRESHOLD) {
		amount = amount + ACCESSORY_PRICE; 
	}
}

//add tax
amount = amount + calculateTax( amount ); 

console.log(
	"Your purchase: " + formatAmount( amount )
); 

//can you afford the purchase? 
if (amount > bank_balance) {
	console.log(
		"You can't afford this purchase today."
	); 
}