function Customer (name,balance){
  this.name = name;
  this.balance = balance;
}

Customer.prototype.name = function(){
  return this.name;
}

// Customer.prototype.balance = function(){
//   return this.balance;
// }

Customer.prototype.addToBalance = function(amount) {
  this.balance += amount;
}

Customer.prototype.buyCoffee = function(amount) {
  this.balance -= amount;
}

function Coffee (size, coffeeType){
  //this.price = price,
  this.size = size;
  this.coffeeType = coffeeType;
}
Coffee.prototype.calculate = function(){
 if (this.size === 3 && this.coffeeType === 1) {
  return this.price = 5
 } else if (this.size === 2 && this.coffeeType === 1) {
  return this.price = 10
} else {
  return this.price = 50
}
}

Coffee.prototype.getPrice = function(){
  return 13;
}
Coffee.prototype.getSize = function() {
  return this.getSize;
}
Coffee.prototype.getCoffeeType = function() {
  return this.getCoffeeType;
}

$(document).ready(function() {
  $("form#formID").submit(function(event) {
    event.preventDefault();
      var inputName = $("#box1").val();
      var depositAmount = parseInt($("#box2").val());
      var beverage = parseInt($("#beverage").val());
      var size = parseInt($("#size").val());
      console.log(inputName,depositAmount,beverage,size );
      var customer = new Customer (inputName, depositAmount);
      var coffee = new Coffee (size, beverage)
     console.log(coffee.getPrice());
     customer.buyCoffee(coffee.getPrice());
      $(".output").text(customer.balance);
      console.log(customer.balance);


  });

});
