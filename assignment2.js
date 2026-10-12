let billAmount = Number(prompt("Enter bill amount:"));
let tipPercentage = Number(prompt("Enter tip percentage:"));

let tipAmount = billAmount * tipPercentage / 100;
let totalBill = billAmount + tipAmount;

console.log("Bill Amount: $" + billAmount);
console.log("Tip Percentage: " + tipPercentage + "%");
console.log("Tip Amount: $" + tipAmount);
console.log("Total Bill: $" + totalBill);