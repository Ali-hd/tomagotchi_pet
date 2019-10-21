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

    age(){
        this.age += 1
    }

    // setname(newName){
    //     this.name = newName
    // }

    hunger(){
        this.hunger += 1
    }

    boredom(){
        this.boredom +=1
    }

}

let nubo = new tomagotchi ("pet",5,5,5,1)

// setname("nubo");


$("#play").click(function(){

})

$("#feed").click(function(){
    
})

$("#off").click(function(){
    
})
nubo.feed()

console.log(nubo)

nubo.play()

// nubo.hunger()

console.log(nubo)