const formEl = document.querySelector(".form");
const date= document.querySelector(".date");
let response = document.querySelector(".response");


function getDate() {
    console.log(date.value);
    return date.value
}


function isXmas() {

    const userDate = getDate();

    if (userDate[5] === "1" && userDate[6] === "2" || userDate[5] === "0" && userDate[6] === "1") {
         
         if (userDate[6] === "1" && (parseInt(userDate[8]) > 0 ||  parseInt(userDate[9]) > 6 ))  {
     
            response.innerHTML = "No es Navidad";
         
         } else {
     
            response.innerHTML = "Es Navidad";
         }
 
     }
        
   else { 
 
         response.innerHTML = "No es Navidad";
          
     }


}

date.addEventListener("change", isXmas);