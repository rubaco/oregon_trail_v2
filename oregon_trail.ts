(function(){
    
        /*
        * Interfaces
        */
    
        //interface describing what attributes and methods a traveler should have
        interface ITraveler {
            food: number;
            name: string;
            isHealthy: boolean;

         
    
            //when implemented, There should be 50% chance to increase the traveler's food by 100.
            //return the travelers new food value
            hunt(): number;
    
            //when implemented, we should check to see if the traveler has a food supply of 20
            //If they do then we should consume 20 of the available food supply
            //If they don't have 20 food then we should change isHealthy to false
            //return the travelers health after attempting to eat
            eat(): boolean;
    
    
        }
    
        //interface describing attributes and methods a wagon should have
        interface IWagon{
            capacity: number;
            passengerArray: Traveler[];
    
            //when implemented, we should add the traveler to the wagon if the capacity permits
            //this function should return the string "added" on success and "sorry" on failure
            addPassenger(traveler: Traveler): string;
    
            //this should return true if there is at least one unhealthy person in the wagon
            //if everyone is healthy false should be returned
            isQuarantined(): boolean;
    
            //Return the total amount of food among all passengers of the wagon.
            getFood(): number;
    
        }
    
      
      

            ////assignment
        class Traveler implements ITraveler {

            food: number;
            name: string;
            isHealthy: boolean;

            constructor (theFood: number, theName: string, theIsHealthy: boolean)  {
              this.food = theFood; 
              this.name = theName;
              this.isHealthy = theIsHealthy;

            }

           hunt() {
            let foodIncrease = Math.random() < 0.5 ? true : false;
        
            if (foodIncrease) {
                //need to add code for 100 food but not the 1.5 this.food += 100
                
                      this.food = this.food + 100;
                    }
                      return this.food;
                
            }

            public eat() {
            let foodStart = this.food

            if(this.food >= 20){
                this.food = this.food - 20;
            }
            else{
                this.isHealthy = false;
            }


            return this.isHealthy = true;
    
            } 
          
        }
    
        //The wagon class that implements the IWagon interface
        //This is currently in violation of its contract with the interface.
        //Create the code required to satisfy the contract with the interface 
        class Wagon implements IWagon {
            capacity: number;
            passengerArray: Traveler[] = [];

            constructor (theCapacity: number)  {
                this.capacity = theCapacity; 
        
          
              }

            //when implemented, we should add the traveler to the wagon if the capacity permits
            //this function should return the string "added" on success and "sorry" on failure
            addPassenger(traveler: Traveler) : string{
       
                if ( this.capacity  > this.passengerArray.length){
                this.passengerArray.push(traveler);
    
                return "added";
                }

                else{
                    return  "sorry";
                }
            }
        
                    //this should return true if there is at least one unhealthy person in the wagon
                    //if everyone is healthy false should be returned
                    isQuarantined(){
                        for (let i = 0; i < this.passengerArray.length; i++){


                            let travelerHealth = this.passengerArray[i].isHealthy;
                              if (travelerHealth == false){
                                  return true;
                            }
                          }

                           return false;

                    }
               
                    getFood(){
                 
                            let foodTotal = 0;
                        
                            for (let i = 0; this.passengerArray[i]; i++){
                    
                              let travelerFood = this.passengerArray[i].food;
                              foodTotal = foodTotal + travelerFood;
                            }
                           
                            return foodTotal
                                 
                          }
                          
                    }


//Play the game ********************
function getRandomInclusive(min, max){
    min = Math.ceil(min);
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min; //the maximun is inclusive
}
//Create 5 healthy travelers object with a random amount of food between 0 and 100 (inclusive)

let cyclops = new Traveler(getRandomInclusive(0,100), "cyclops", true);
let wolverine = new Traveler(getRandomInclusive(0,100), "wolverine", true);
let storm = new Traveler(getRandomInclusive(0,100), "storm", true);
let rogue = new Traveler(getRandomInclusive(0,100), "rogue", true);
let collosus = new Traveler(getRandomInclusive(0,100), "collosus", true);

// Create wagon with an empty passenger list and a capacity of 4.
//let wagonOne = new Wagon(0);
let wagonOne = new Wagon(4);

// Make 3 of 5 the travelers eat by calling their eat methods
console.log("eat() cyclops: " + cyclops.eat());
console.log("eat()  wolverine: " + wolverine.eat());
console.log("eat() storm: " + storm.eat());

// Make the remaining 2 travelers hunt
console.log ("rogue hunt() " + rogue.hunt());
console.log ("rogue hunt() " + collosus.hunt());

// Create an array of your travelers, loop over the array of travelers and give each traveler a 50% chance
// of attempting to be being added to the wagon using the wagons addPassenger method.

let travelerArray: Traveler[] = new Array();
travelerArray = [cyclops, wolverine, storm, rogue, collosus];

//go through each person and give them a 50% to get on the wagon 
    for (let i = 0; i < travelerArray.length; i++ ){
    let randomAmount = Math.random() < 0.5 ? 0 : 1;
        if(randomAmount)
        {
        wagonOne.addPassenger(travelerArray[i]);
        console.log("add passenger() " + travelerArray[i].name + " has been added")
        }
        else {
        console.log("add passenger() " + travelerArray[i].name + " has not been been added")
        }

}



    let Traveler1 = new Traveler(getRandomInclusive(0,100), "bob", true);

    //Run the isQuarantined method for the wagon
    console.log("quarantine() for wagonOne " + wagonOne.isQuarantined());

    //Run the getFood method for the wagon
    console.log("getFood() for wagaonOne " + wagonOne.getFood());
    // the return values of all the methods should be displayed in the console using console.log()
    // the console.log statements should not live inside any methods on the objects 


})();
    
    
    