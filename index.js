var prohibidos = /[A-ZáéíóúÁÉÍÓÚ]/;

function encriptar(){
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco"); 

    let textoCifrado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat")

         const textoPuro = texto;
 if(prohibidos.test(textoPuro)){
    swal("Oops!","Por favor ingrese un texto que contenga solamente letras minúsculas sin acentos","warning");

         }
         else{

    if (texto.length != 0) {

        document.getElementById("texto").value = textoCifrado;      
        tituloMensaje.textContent = "Texto encriptado con éxito";
        parrafo.textContent = "";
        muñeco.src = "img/encriptado.jpg";
        document.getElementById("salida").value = textoCifrado;      
}

else{
    muñeco.src = "img/muñeco.png";
    tituloMensaje.textContent = "Ningún mensaje fue encontrado";
    parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
    swal("Oops!","Debes ingresar un texto","warning");
}
}
}


    function desencriptar() {
        let texto = document.getElementById("texto").value;
        let tituloMensaje = document.getElementById("titulo-mensaje");
        let parrafo = document.getElementById("parrafo");
        let muñeco = document.getElementById("muñeco"); 

        let textoCifrado = texto
            .replace(/enter/gi, "e")
            .replace(/imes/gi, "i")
            .replace(/ai/gi, "a")
            .replace(/ober/gi, "o")
            .replace(/ufat/gi, "u")

            const textoPuro = texto;
            if(prohibidos.test(textoPuro)){
               swal("Oops!","Por favor ingrese un texto que contenga solamente letras minúsculas sin acentos","warning");
           
                    }
                    else{
            
        if (texto.length != 0) {
            document.getElementById("texto").value = textoCifrado;
            tituloMensaje.textContent = "Texto desencriptado con éxito";
            parrafo.textContent = "";
            muñeco.src = "img/desencriptado.jpg";

            document.getElementById("salida").value = textoCifrado;      

    }   else{
            muñeco.src = "img/muñeco.png";
            tituloMensaje.textContent = "Ningún mensaje fue encontrado";
            parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
            swal("Oops!","Debes ingresar un texto","warning");
   
     }
}
    }


   