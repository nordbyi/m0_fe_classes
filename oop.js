// Write a class called Unicorn
// it should have a dynamic name property
// it should have a color property, that is silver by default
// it should have a method called "say" that returns whatever string is passed in, with "*~*" at the beginning and end of the string
class Unicorn {
  constructor(name = 'Stardust', color = 'Silver') {
    this.name = name,
    this.color = color
  }

  say(string) {
    console.log(`*~*${string}*~*`)
  }
}

var destiny = new Unicorn('Destiny')
console.log(destiny)
destiny.say('Word to your monther!')

// Write a class called Vampire
// it should have a dynamic name property
// it should have a pet property, that is a bat, by default BUT it could be dynamic if info is passed in initially
// it should have a thirsty property, that is true by default
// it should have a drink method. When called, the thirsty property changes to false

class Vampire {
  constructor(name = 'Drac', pet = 'bat') {
    this.name = name,
    this.pet = pet,
    this.thirsty = true
  }

  drink(){
    this.thirsty = false
  }

  itsMorbinTime(){
    this.name === 'Morbius' && console.log(`IT'S MORBIN' TIME!`)
  }
}

var morbius = new Vampire('Morbius', 'gargoyle')
console.log(morbius)

morbius.drink()
console.log(morbius)

morbius.itsMorbinTime()


//  Write a Dragon class
// it should have a dynamic name property (string)
//  it should have a dynamic rider property (string)
//  it should have a dynamic color property (string)
//  it should have a isHungry property that is true by default
//  it should have a eat method. If the dragon eats 4 times, it is no longer hungry
  // HINT: This requires you to use your knowledge from the conditionals lesson

class Dragon {
  #fullLevel;

  constructor(name = 'Dargon', rider = 'Beowulf', color = 'red') {
    this.name = name,
    this.rider = rider,
    this.color = color,
    this.isHungry = true
    this.#fullLevel = 0
  }

  eat() {
    this.#fullLevel >= 4 ? console.log(`${this.name} is too full to eat any more`) : this.#fullLevel++
  }
}

var treva = new Dragon('Treva', 'Lancelot', 'silver')

console.log(treva)
treva.eat()
console.log(treva)
treva.eat()
treva.eat()
treva.eat()
treva.eat()
treva.eat()



//  BIG CHALLNEGE: Write a Hobbit class
//  it should have a dynamic name property (string)
//  it should have a dynamic disposition property (string)
//  it should have an age property that defaults to 0
//  it should have a celebrateBirthday method. When called, the age increases by 1
//  it should have an isAdult property (boolean) that is false by default. once a Hobbit is 33, it should be an adult
//  it should have an isOld property that defaults to false. once a Hobbit is 101, it is old.
//  it should have a hasRing property. If the Hobbit's name is "Frodo", true, if not, false.

class Hobbit {
  constructor(name = 'Frodo', disposition = 'gentle', age = 0) {
    this.name = name,
    this.disposition = disposition,
    this.age = age,
    this.isAdult = this.age >= 33 ? true : false
    this.isOld = this.age >= 101 ? true : false
    this.hasRing = this.name === 'Frodo' ? true : false
  }

  celebrateBirthday() {
    this.age++;
    if (this.age >= 33) this.isAdult = true;
    if (this.age >= 101) this.isOld = true;
    console.log(`${this.name} celerates birthday #${this.age}`);
  }
}

var bilbo = new Hobbit('Bilbo', 'gentle', 100)
var frodo = new Hobbit('Frodo', 'adventerous', 32)
console.log(bilbo)
console.log(frodo)

bilbo.celebrateBirthday()
console.log(bilbo)

frodo.celebrateBirthday()
console.log(frodo)
