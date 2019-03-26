// For each of the following, write which data types you would use to represent the data, and then give a small example of the data structure:
//
// A light switch that can be either on or off.
  //booleans lightSwitchOn = true
// A user's email address.
  //strings let email = "address@"
// A spaceship with a hull, laser blasters, tractor beam, and warp drive.
  //array const spaceship = ['hull', 'laser blasters', 'warp drive', 'tractor beam']
// A list of student names from our class.
  //array const students = ['names']
// A list of student names from our class, each with a location.
  //objects with keys that wil have a value of a array
    /* const class = [
            {name:"tim",
            location: "denver"},
            {name:"tim",
            location: "denver"}
  ]
    */
// A list of student names from our class, each with a location and each with a list of favorite tv shows.
  //objects, array
  /* const class = [
          {name:"tim",
          location: "denver",
          tvShow: "family Guy"},
          {name:"tim",
          location: "denver",
          tvShow: "the office"},
]
  */

/*Make an array that holds all of the colors of the rainbow.
Write code that will access "blue" from the rainbow array.
Make an object that is called your name and holds the information about your favorite food, a hobby, the name of the town that you live in currently, and your favorite datatype.
Write code that will access your hobby from the object that you just created.*/
const rainbow = ['blue', 'purple', 'green', 'red', 'orange', 'yellow']
console.log(rainbow[0]);

const davis = {
  favoriteFood: 'tacos',
  hobby: 'sleeping',
  townName:'Aurora',
  favDataType: 'Objects'
  }
console.log(davis.hobby);

const crazyObject = {
  taco: [
    {
      meat: 'steak',
      cheese: ['panela', 'queso', 'chihuahua']
    },
    {
      meat: 'chicken',
      salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]
    },
  ],
  larry: {
    nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
    quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
    characters: [
      {
        name: "Jeff",
        occupation: "manager"
      },
      {
        name: "funkhauser",
        occupation: "tv dude"
      },
      {
        name: "susie",
        occupation: "jeffs wife",
        favourtieHobby: "Swearing at Larry and Jeff"
      },
    ]
  }
}
// Use crazyObject to log the following.
// "omg my mouth is burning"
console.log(crazyObject.taco[1].salsa[5]);
// "Pretty pretty prettayyyyy good"
console.log(crazyObject.larry.quotes[0]);
// "Swearing at Larry and Jeff"
console.log(crazyObject.larry.characters[2].favourtieHobby);
// "Chicken Teriyaki Boyyyyyy"
console.log(crazyObject.larry.nicknames[1]);
// The object the contains the name funkhauser
console.log(crazyObject.larry.characters[1].name);

const inception = {
   reality: {
       dreamLayer1: {
           dreamLayer2: {
               dreamLayer3: {
                   dreamLayer4: {
                       dreamLayer5: {
                           dreamLayer6: {
                               limbo: "Joseph Gordon Levitt"
                          }
                       }
                   }
               }
           }
       }
   }
}
//Change the value of limbo to null.
inception
  .reality
  .dreamLayer1
  .dreamLayer2
  .dreamLayer3
  .dreamLayer4
  .dreamLayer5
  .dreamLayer6
  .limbo = null
console.log(inception
  .reality
  .dreamLayer1
  .dreamLayer2
  .dreamLayer3
  .dreamLayer4
  .dreamLayer5
  .dreamLayer6
  .limbo);
