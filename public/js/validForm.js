const validNombre =/^[a-zA-ZÀ-ÿ\s]+$/;              
const validMail =/^[^ ]+@[^ ]+\.[a-z]{2,3}$/; 
const validMusica =/^[a-zA-ZÀ-ÿ\s]+$/; 
const validDocumento=/^[0-9]{7,8}$/;  

const nombre = document.getElementById('nombre');   
const confPresente = document.getElementById('presente');
const confAusente = document.getElementById('ausente'); 
const mail = document.getElementById('mail');
const documento = document.getElementById('dni'); 


const error1 = document.getElementById('error1');    
const error2 = document.getElementById('error2');     
const error3 = document.getElementById('error3');
const error4 = document.getElementById('error4');


//FUNCION PARA LA VALIDACION DEL FORMULARIO

    function validacionFormulario(evt) {

        let mensajesError1 = [];      
        let mensajesError2 = [];
        let mensajesError3 = [];
        let mensajesError4 = [];

        if(!validNombre.test(nombre.value)){          
            evt.preventDefault()                             
            mensajesError1.push("El nombre no es válido");    
        }
        if(!(confPresente.checked || confAusente.checked)){
            evt.preventDefault()
            mensajesError2.push("ingrese una opción");      
        } 
        if(!validMail.test(mail.value)){
            evt.preventDefault()
            mensajesError3.push("El mail no es válido");      
        }
        if(!validDocumento.test(dni.value)){
            evt.preventDefault()
            mensajesError4.push("El dni no es válido");      
        }
       
        error1.innerHTML= mensajesError1.join("");   
        error2.innerHTML= mensajesError2.join("");   
        error3.innerHTML= mensajesError3.join(""); 
        error4.innerHTML= mensajesError4.join(""); 
    }

    const BTNENVIAR = document.getElementById('formulario');
    BTNENVIAR.addEventListener('submit', validacionFormulario);  


    
