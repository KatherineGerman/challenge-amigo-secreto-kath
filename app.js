// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//empty variable type array to save values 
let nombres = [ ];

//function to add friends name
function agregarAmigo() {
   // let inputName = document.querySelector(".input-name").value;
    
   // get values from input entry 
   let inputName = document.querySelector(".input-name").value;

 // validation for empty value
 if(inputName !== ""){
   
    nombres.push(inputName);
    //console.log(nombres);
    //reset input entry once a name is added
    document.querySelector(".input-name").value = "";
    
   } else  {
    alert('Por favor, inserte un nombre');

   }

   if(nombres.length >= 11) {
      alert('Alcanzo el limite de nombres')
   } 
    
   updateFriends();
}

function updateFriends(){
   let nameList = document.querySelector(".name-list");
   nameList.innerHTML = "";

   for (let i = 0; i < nombres.length; i++) {
      nameList.innerHTML += `<li>${nombres[i]}</li>`;
    }
}

function sortearAmigo() {
 
   let amigoSorteado = nombres[Math.floor(Math.random() * nombres.length)];
   let resultList = document.getElementById('resultado');
   let nameList = document.querySelector(".name-list");
   nameList.innerHTML = "";
   resultList.innerHTML += `<p>El amigo secreto es: ${amigoSorteado}</p>`

 
   

}

