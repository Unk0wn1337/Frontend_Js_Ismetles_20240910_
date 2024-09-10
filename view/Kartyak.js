import { kutyakiir } from "./fv.js";
import Kartya from "./Kartya.js";

export default class Kartyak {
    #lista = [];
    #taroloELEM;
    constructor(lista, taroloELEM){
        this.#lista = lista;
        this.#taroloELEM = taroloELEM;
        this.#taroloELEM.empty();
        this.kutyaKiir();
    } 

    kutyaKiir(){
        this.#lista.forEach((elem)=> {
            kutyakiir(elem);
            new Kartya(elem,this.#taroloELEM)
        })

    }
}