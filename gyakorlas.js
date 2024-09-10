import { kutyaLISTA} from "./adatok.js";
import { kutyakiir } from "./fv.js";
import Kartya from "./view/Kartya.js";


/*Kutyák adatait megjelenitenek a tartalom divben külön divekben, egymás mellett 
 divekben, egymás melllett az egyes kutyák adatai


 Hozzunk létre változtatok

*/

const CIM = "Minden amit a kutyáról tudni kell";

let nev = "Jenő";
nev = "Árpád";
console.log("név: ",nev);


// cimet irjuk ki headerbe a meglevo cim ala

// megfogjuk az adott html elemet

const CIM_ELEM = $("header");
// HTML DOM ELEM 

console.log(CIM_ELEM);

CIM_ELEM.append(`<p>${CIM}</p>`);



// kutya1.nev = "Morzsa";
//console.log(kutya1.nev);

const taroloELEM = $(".tartalom")


kutyaLISTA.forEach((elem)=> {
    kutyakiir(elem);
    new Kartya(elem,taroloELEM)
})

//kutyakiir(kutyaLISTA[0]);