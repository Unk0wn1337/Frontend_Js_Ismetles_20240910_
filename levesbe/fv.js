export function kutyakiir(kutya){
    const TARTALOM_DIV = $(".tartalom");
    TARTALOM_DIV.append(

            `<div class="card col-lg-4 col-md-6">
                <h3 class="card-title">${kutya.nev}</h3>
                <h3>${kutya.kor}</h3>
                <h3>${kutya.nem}</h3>
                <button class="btn-success">kivalaszt</button>
            </div>`
    );
   
    // let segedValtozo = ``;
    // for (let index = 0; index < kutyaLISTA[0].length; index++) {
    //     segedValtozo += "<div>"
    //     segedValtozo += `<p>${kutyaLISTA[0].nev}</p>`
    //     segedValtozo += `<p>${kutyaLISTA[0].nem}</p>`
    //     segedValtozo += `<p>${kutyaLISTA[0].kor}</p>`
    //     segedValtozo += "</div>"
    // }
    // TARTALOM_DIV.append(segedValtozo);    
}