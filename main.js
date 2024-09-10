import { kutyaLISTA } from "./adatok.js ";
import Kartyak from "./view/Kartyak.js";


const taroloELEM = $(".tartalom");
const kivalasztottKutyaLista = [];

new Kartyak(kutyaLISTA,taroloELEM);


//tegyük bele az adatait a kiválaszottKutyaListaba

//feliratkozunk a Kartya osztályban létrehozott saját eseményükré

$(window).on("kivalaszt", ()=> {
    console.log(event.detail);
    kivalasztottKutyaLista.push(event.detail);
    console.log(kivalasztottKutyaLista);
    new Kartyak(kivalasztottKutyaLista, kivELEM)
    
    
})