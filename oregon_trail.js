(function () {
    /*
    * Interfaces
    */
    ////assignment
    var Traveler = /** @class */ (function () {
        function Traveler(theFood, theName, theIsHealthy) {
            this.food = theFood;
            this.name = theName;
            this.isHealthy = theIsHealthy;
        }
        Traveler.prototype.hunt = function () {
            var foodIncrease = Math.random() < 0.5 ? true : false;
            if (foodIncrease) {
                //need to add code for 100 food but not the 1.5 this.food += 100
                this.food = this.food + 100;
            }
            return this.food;
        };
        Traveler.prototype.eat = function () {
            var foodStart = this.food;
            if (this.food >= 20) {
                this.food = this.food - 20;
            }
            else {
                this.isHealthy = false;
            }
            return this.isHealthy = true;
        };
        return Traveler;
    }());
    //The wagon class that implements the IWagon interface
    //This is currently in violation of its contract with the interface.
    //Create the code required to satisfy the contract with the interface 
    var Wagon = /** @class */ (function () {
        function Wagon(theCapacity) {
            this.passengerArray = [];
            this.capacity = theCapacity;
        }
        //when implemented, we should add the traveler to the wagon if the capacity permits
        //this function should return the string "added" on success and "sorry" on failure
        Wagon.prototype.addPassenger = function (traveler) {
            if (this.capacity > this.passengerArray.length) {
                this.passengerArray.push(traveler);
                return "added";
            }
            else {
                return "sorry";
            }
        };
        //this should return true if there is at least one unhealthy person in the wagon
        //if everyone is healthy false should be returned
        Wagon.prototype.isQuarantined = function () {
            for (var i = 0; i < this.passengerArray.length; i++) {
                var travelerHealth = this.passengerArray[i].isHealthy;
                if (travelerHealth == false) {
                    return true;
                }
            }
            return false;
        };
        Wagon.prototype.getFood = function () {
            var foodTotal = 0;
            for (var i = 0; this.passengerArray[i]; i++) {
                var travelerFood = this.passengerArray[i].food;
                foodTotal = foodTotal + travelerFood;
            }
            return foodTotal;
        };
        return Wagon;
    }());
    //Play the game
    //Create 5 healthy travelers object with a random amount of food between 0 and 100 (inclusive)
    var cyclops = new Traveler(getRandomInclusive(0, 100), "cyclops", true);
    var wolverine = new Traveler(getRandomInclusive(0, 100), "wolverine", true);
    var storm = new Traveler(getRandomInclusive(0, 100), "storm", true);
    var rogue = new Traveler(getRandomInclusive(0, 100), "rogue", true);
    var collosus = new Traveler(getRandomInclusive(0, 100), "collosus", true);
    // Create wagon with an empty passenger list and a capacity of 4.
    //let wagonOne = new Wagon(0);
    var wagonOne = new Wagon(4);
    // Make 3 of 5 the travelers eat by calling their eat methods
    console.log("eat() cyclops: " + cyclops.eat());
    console.log("eat()  wolverine: " + wolverine.eat());
    console.log("eat() storm: " + storm.eat());
    // Make the remaining 2 travelers hunt
    console.log("rogue hunt() " + rogue.hunt());
    console.log("rogue hunt() " + collosus.hunt());
    console.log("add passenger to wagon() " + wagonOne.addPassenger(cyclops));
    // Create an array of your travelers, loop over the array of travelers and give each traveler a 50% chance
    // of attempting to be being added to the wagon using the wagons addPassenger method.
    var travelerArray = new Array();
    travelerArray = [cyclops, wolverine, storm, rogue, collosus];
    for (var i = 0; i < travelerArray.length; i++) {
        var randomAmount = Math.random() < 0.5 ? 0 : 1;
        if (randomAmount) {
            wagonOne.addPassenger(travelerArray[i]);
            console.log("add passenger() " + travelerArray[i].name + " has been added");
        }
        else {
            console.log("add passenger() " + travelerArray[i].name + " has not been been added");
        }
    }
    function getRandomInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; //the maximun is inclusive
    }
    var Traveler1 = new Traveler(getRandomInclusive(0, 100), "bob", true);
    //Run the isQuarantined method for the wagon
    console.log("quarantine() for wagonOne " + wagonOne.isQuarantined());
    //Run the getFood method for the wagon
    console.log("getFood() for wagaonOne " + wagonOne.getFood());
    // the return values of all the methods should be displayed in the console using console.log()
    // the console.log statements should not live inside any methods on the objects 
})();
