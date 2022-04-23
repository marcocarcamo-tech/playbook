const explorers = [
 {
   name: "Explorer 1",
   exercises_completed: 10,
   rate: 99,
   city: "CDMX",
   stack: [
     "js",
     "c#"
   ],
   missions: {
     onboarding: {
       isFinished: true,
       exercisesFinished: true
     },
     frontend: {
       isFinished: true,
       exercisesFinished: true
     }
   }
 },
 {
   name: "Explorer 2",
   exercises_completed: 9,
   city: "Veracruz",
   rate: 50,
   stack: [
     "js"
   ],
   missions: {
     onboarding: {
       isFinished: false,
       exercisesFinished: false
     },
     frontend: {
       isFinished: false,
       exercisesFinished: false
     }
   }
 },
 {
   name: "Explorer 3",
   exercises_completed: 3,
   city: "Sonora",
   rate: 100,
   stack: [
     "elixir"
   ],
   missions: {
     onboarding: {
       isFinished: true,
       exercisesFinished: true
     },
     frontend: {
       isFinished: false,
       exercisesFinished: false
     }
   }
 }
]

explorers.forEach((explorer)=>console.log(`${explorer.name} uses the ${explorer.stack} stack`));
const stackList = explorers.map((list) => list.stack);
console.log(stackList);

const jsExplorers = explorers.filter((explorer) => {
	return explorer.stack.includes("js")
});

console.log("List of explorers who use JS: " + JSON.stringify(jsExplorers));

const cdmxExplorer = explorers.find(explorer => explorer.city === "CDMX");
console.log("Explorer from CDMX: ")
console.log(cdmxExplorer)

const totalCompletedExercises =  explorers.map((explorer) => explorer.exercises_completed).reduce(function(previousValue, currentValue){
	return previousValue + currentValue
}, 0);

console.log("The total number of exercises completed by the explorers: " + totalCompletedExercises);

const someHasFinished = (explorer) => explorer.missions.frontend.isFinished === true;

console.log("At least one explorer has finished all exercises of the frontend mission: " + explorers.some(someHasFinished));

const everyHasFinished = (explorer) => explorer.missions.onboarding.isFinished === true;

console.log("Every explorer has finished the onboarding mission: " + explorers.every(everyHasFinished));
