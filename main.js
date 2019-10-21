class tomagotchi{
    constructor(name, hunger, sleepiness, boredom, age){
        this.name = name
        this.hunger = hunger
        this.sleepiness = sleepiness
        this.boredom = boredom
        this.age = age
    }

    feed(){
        this.hunger -= 1
    }

    play(){
        this.boredom -= 1
    }

    name(name){
        this.name = name
    }



}

let Nubo = new tomagotchi ("pet",5,5,5,1)

feed()
