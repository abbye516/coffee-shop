// const coffeeShop = {
//   beans: 40,

//   drinkRequirements: {
//     latte: 10,
//     americano: 5,
//     doubleShot: 15,
//     frenchPress: 12
//   },

//   makeDrink: function (drinkType) {

//   }
// }

// coffeeShop.makeDrink("latte"); 
// coffeeShop.makeDrink("americano");
// coffeeShop.makeDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
// coffeeShop.makeDrink("doubleShot");
// coffeeShop.makeDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"


const coffeeShop = {
  beans: 40,
  drinkRequirements: {
    latte: 10,
    americano: 5,
    doubleShot: 15,
    frenchPress: 12
  },
  makeDrink: function (drinkType) {
    const drinkBeanAmount =this.drinkRequirements[drinkType]
    if (this.drinkRequirements[drinkType] && this.beans >= drinkBeanAmount) {
          console.log(`Here's your ${drinkType}, enjoy!`);
          this.beans -= drinkBeanAmount;
      console.log(this.beans)
    }
    else if (this.beans <= drinkBeanAmount) {
      console.log(`Sorry but we ran out of beans`)
    }
    else {
      console.log(`Sorry we don't make that drink`)
    }
  }
  }


  coffeeShop.makeDrink("latte");
  coffeeShop.makeDrink("americano");
  coffeeShop.makeDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
  coffeeShop.makeDrink("doubleShot");
  coffeeShop.makeDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"
