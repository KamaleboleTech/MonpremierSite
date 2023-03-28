let age = 17

if(age == 17) {
    console.log("Vous êtes mineur")
}else{
    console.log("A savoir si t'as plus ou mois de 18ans")
}

let  single = false;
if (!single) {
    console.log("Cher Collegue celibataire")
}

switch(age) {
    case 18:
        console.log("Vous avez 18ans et vous êtes majeur")
        break
    case 30:
        console.log("Vous êtes un petit trentegenaire")
        break
    case 60:
        console.log("vous êtes un petit sextogenère")
        break

    default:
        console.log("Va te faire voir")

}

let genre = "femme"

if (age == 18 && genre == "femme"){
    console.log("Vous êtes une dame majeure")
} else{
    console.log("on ne vous comprends pas du tout")
}

let day = new Date ();
console.log(day.getMonth())

let fruits = ["banane", "pomme", "avocats", "mango"]
console.log(fruits[2])