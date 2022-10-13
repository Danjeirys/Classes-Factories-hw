

class Hamster {
    constructor (name){
        owner = ''
        name = name 
        price = 15
    }

    wheelRun () {
        console.log ('squak squak')
    }

    eatFood () {
        console.log ('nibble nibble')
    }

    getPrice () {
        return this.price
    }
}


class Person {
    constructor (name, age, height, weight, mood) {
        name = name
        age = age
        height = height 
        weight = weight 
        mood = mood 
        hamster = []
        bankAccount = bankAccount
    }

    getName () {
        return this.name
    }

    getAge () {
        return this.age
    }

    getWeight () {
        return this.weight
    }

    greet () {
        console.log (`Hello I am ${this.name} nice to meet you.`)
    }

    eat () {
        weight++
        mood++
    }

    excercise () {
        weight--
    }

    ageUp () {
        age++
        height++
        weight++
        mood--
        bankAccount+10
    }

    buyHamster (hamster) {
        this.hamster.push (hamster)
        mood+=10
        bankAccount-= hamster.getPrice()
    }
} 


// Person Class Story

// 1.
const timmy = new Person("Timmy")
// 2.
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
// 3.
timmy.eat()
timmy.eat()
timmy.eat()
timmy.eat()
timmy.eat()
// 4.
timmy.excerise()
timmy.excerise()
timmy.excerise()
timmy.excerise()
timmy.excerise()
// 5. 
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
// 6.
const gus = new Hamster("Gus")
// 7.
gus.Owner+="Timmy"
// 8.
timmy.buyHamster(gus)
// 9.
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
// 10.
timmy.eat()
timmy.eat()
// 11.
timmy.excerise()
timmy.excerise()

// console.log(timmy)

