// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 

<<<<<<< Updated upstream
// Part 5: Import statement.
import { SpaceLocation } from './SpaceLocation';

// Part 1: Remaining variables.
let kilometersToMars: number = 225000000;
let kilometersToTheMoon: number = 384400;

// Part 2: Content moved into class. Output statements updated.
=======
import { SpaceLocation } from './SpaceLocation';
// Part 1: Declare (5) Variables With Type

// let spacecraftName: string = 'Determination';
// let speedMph: number = 17500;
let kilometersToMars: number = 225000000;
let kilometersToTheMoon: number = 384400;
// let milesPerKilometer: number = 0.621;
>>>>>>> Stashed changes


// Part 3: Content moved into class. Output statements updated.

// let milesToMars:number = kilometersToMars * milesPerKilometer;
// let hoursToMars: number = milesToMars / speedMph;
// let daysToMars: number = hoursToMars / 24;

// Part 4: Define your Spacecraft class:

<<<<<<< Updated upstream
class Spacecraft {
    milesPerKilometer: number = 0.621;
    name: string;
    speedMph: number;
=======
// Code an output statement here (use a template literal):

// console.log(`${spacecraftName} would take ${daysToMars} days to get to Mars.`);


// Part 3: Create a Function ("getDaysToLocation")



// Move your output statement from part 2 here. Update the template literal to call
// the function and print the outputs for a Mars trip and a moon trip.

// console.log(`${spacecraftName} would take ${getDaysToLocation(kilometersToMars)} days to get to Mars.`);
// console.log(`${spacecraftName} would take ${getDaysToLocation(kilometersToTheMoon)} days to get to the Moon.`);



// Part 4: Create a Spacecraft Class
>>>>>>> Stashed changes

    constructor (name: string, speedMph: number) {
        this.name = name;
        this.speedMph = speedMph;
    }

<<<<<<< Updated upstream
    getDaysToLocation(kilometersAway: number): number {
        let milesAway: number = kilometersAway * this.milesPerKilometer;
        let hours: number = milesAway / this.speedMph;
        return hours / 24;
    }

    printDaysToLocation(location: SpaceLocation) {
        console.log(`${this.name} would take ${this.getDaysToLocation(location.kilometersAway)} days to get to ${location.name}.`);
    }
}

// Create an instance of the class here:
let spaceShuttle = new Spacecraft('Determination', 17500);
=======
class Spacecraft {
    milesPerKilometer: number = 0.621;
    name: string;
    speedMph: number;

    constructor(name: string, speedMph: number){
        this.name = name;
        this.speedMph = speedMph;
    }

    getDaysToLocation(kilometersAway: number): number {
        let milesAway:number = kilometersAway * this.milesPerKilometer;
        let hoursToLocation: number = milesAway / this.speedMph;
        let daysToLocation: number = hoursToLocation / 24;
        return daysToLocation;
    }

>>>>>>> Stashed changes

    printDaysToLocation(location: SpaceLocation) {
        console.log(`${this.name} would take ${this.getDaysToLocation(location.kilometersAway)} days to get to ${location.name}.`);
     }
     

}

// Create an instance of the class here:

<<<<<<< Updated upstream
// Part 5: Paste in the code from step 6 here:
spaceShuttle.printDaysToLocation(new SpaceLocation('Mars', kilometersToMars));
spaceShuttle.printDaysToLocation(new SpaceLocation('the Moon', kilometersToTheMoon));
=======
let spaceShuttle = new Spacecraft('Determination', 17500);

// Move your output statements from part 3 here. Update the template literals use the
// instance of the class.

// console.log(`${spaceShuttle.name} would take ${spaceShuttle.getDaysToLocation(kilometersToMars)} days to get to Mars.`);
// console.log(`${spaceShuttle.name} would take ${spaceShuttle.getDaysToLocation(kilometersToTheMoon)} days to get to the Moon.`);


// Part 5: Export and Import the SpaceLocation Class
// Add the required import statement BEFORE the part 1 concent.
console.log(spaceShuttle.printDaysToLocation(new SpaceLocation('Mars', kilometersToMars)));
console.log(spaceShuttle.printDaysToLocation(new SpaceLocation('the Moon', kilometersToTheMoon)));


// Add the printDaysToLocation function to the Spacecraft class.

// Paste in the code from step 6 here:
>>>>>>> Stashed changes
