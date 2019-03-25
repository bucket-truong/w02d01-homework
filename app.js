// For each of the following, write which data types you would use to represent the data, and then give a small example of the data structure:
//
// A light switch that can be either on or off.
  //booleans
// A user's email address.
  //strings
// A spaceship with a hull, laser blasters, tractor beam, and warp drive.
  //objects
// A list of student names from our class.
  //array
// A list of student names from our class, each with a location.
  //array and string
// A list of student names from our class, each with a location and each with a list of favorite tv shows.
  //objects, array, string

/*Make an array that holds all of the colors of the rainbow.
Write code that will access "blue" from the rainbow array.
Make an object that is called your name and holds the information about your favorite food, a hobby, the name of the town that you live in currently, and your favorite datatype.
Write code that will access your hobby from the object that you just created.*/
const rainbow = ['blue', 'purple', 'green', 'red', 'orange', 'yellow']
console.log(rainbow[0]);

const name = {
  name: 'Davis',
  favoriteFood: 'tacos',
  hobby: 'sleeping',
  townName:'Aurora',
  favDataType: 'Objects',
  getHobby(){
    return this.hobby;
  }
}
console.log(name.getHobby());
