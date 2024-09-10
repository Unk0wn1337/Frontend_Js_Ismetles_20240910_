export default class Kartya {
    #szuloELEM
    #obj = {};
    #gombElem;

    constructor(obj,szuloELEM){
        this.#obj = obj;
        this.#szuloELEM = szuloELEM;
        this.kutyakiir();
        //gombelem a kartya saját adattagja lesz
        this.gombElem = $(".kivalaszt:last");
        console.log(this.gombElem);
        this.esemenyKezelo();
        

    }

    kutyakiir(){
        //const TARTALOM_DIV = $(".tartalom");
        this.#szuloELEM.append(
    
                `<div class="card col-lg-4 col-md-6">
                    <h3 class="card-title">${this.#obj.nev}</h3>
                    <h3>${this.#obj.kor}</h3>
                    <h3>${this.#obj.nem}</h3>
                    <button class="btn-success kivalaszt">kivalaszt</button>
                </div>`
        );
    }

    esemenyKezelo(){
        this.gombElem.on("click", () => {
            console.log(this);
            //létrehozunk sajat esemeny
            const e  = new CustomEvent("kivalaszt",{detail:this.#obj}); 
            window.dispatchEvent(e);
        });
    }
}