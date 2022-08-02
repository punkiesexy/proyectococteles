//creado por: punkiesexy 
// 02/08/2022

let resultados = [];

fetch("cocktails.json",{
    //para resolver el error de cors
    mode:"no-cors"
})
.then((response)=>response.json())
.then((data)=>{
    //pinta los datos del arreglo de cockteles
   // console.log(data);
    resultados = data.drinks;
    dibujar(resultados);
})
//Pregunta





// funcion busquedas manda error en el return, pero esta bien la estructura
// Sensei ¿Porque falla? 
const busquedas = (evt) => {
    let nombre = evt.currentTarget.value;
    let filtrado = resultados.filter(function(resultado){      
      console.log("está en la función!!");
      return resultado.this.name.toUpperCase().includes(name.toUpperCase());
     
  });
     dibujar(filtrado);
  }

// funciones para menu

    const general = () =>{

    let cocteles_general = resultados.filter((coctel) =>{
    return coctel.strDrinkThumb =="https://www.thecocktaildb.com/images/media/drink/i9suxb1582474926.jpg";
    
    });
    
        dibujar(cocteles_general);
    
    
    }

    const especiales = () =>{

        let cocteles_especiales = resultados.filter((coctel) =>{
        return coctel.idDrink =="14029";

});

    dibujar(cocteles_especiales);


}

const mexicanos = () =>{

    let cocteles_mexicanos = resultados.filter((coctel) =>{
    return coctel.strDrink =="Bahama Mama";
    
    });
    
        dibujar(cocteles_mexicanos);
    
    
    }

    

  function cocteles(){
    let cocteles_coquetos = resultados.filter(function(cocteles){

        //Regresa los 155 belmont
        if(cocteles.strDrink == "155 Belmont"){
            return true;
        }else{
            return false;

        }

  });
  dibujar(cocteles_coquetos);
}

        

// funcion que dibuja datos
const dibujar = (cocteles) => {

    document.querySelector("#resultado").innerHTML="";

cocteles.forEach((coctel) => {

/*Cartas de los cocteles*/
let div = document.createElement("div");
div.classList.add("column","is-3");

div.innerHTML += `<div class="card">
                <div class="card-image">
                    <figure class="image is-3by5">
                        <img src="${coctel.strDrinkThumb}" alt="Coctel coqueto">
                    </figure>
                    </div>
                        <div class="card-content">
                        <p><b>${coctel.strDrink}</b></p>
                        <p><b>${coctel.idDrink}</b></p>
                    </div>
                </div>`;
                document.querySelector("#resultado").append(div);

});
 
}

document.querySelector("#busqueda").addEventListener("keyup", busquedas);
document.querySelector("#general").addEventListener("click",general);
document.querySelector("#especiales").addEventListener("click",especiales);
document.querySelector("#mexicanos").addEventListener("click",mexicanos);