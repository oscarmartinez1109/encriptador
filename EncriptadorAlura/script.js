const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const copiarBoton = document.querySelector(".copiar");

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(textArea.value)
    mensaje.value = textoDesencriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function btnCopiar(){
    let textoCopiado = mensaje.value;
    textArea.value = textoCopiado;
}

function encriptar(encriptada){
    let matriz = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    encriptada = encriptada.toLowerCase()
    
    for (let i = 0; i < matriz.length; i++) {
        if (encriptada.includes(matriz[i][0])) {
            encriptada = encriptada.replaceAll(matriz[i][0],matriz[i][1])
        }        
    }
    return encriptada;
}

function desencriptar(desencriptada){
    let matriz = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    desencriptada = desencriptada.toLowerCase()
    
    for (let i = 0; i < matriz.length; i++) {
        if (desencriptada.includes(matriz[i][0])) {
            desencriptada = desencriptada.replaceAll(matriz[i][1],matriz[i][0])
        }        
    }
    return desencriptada;
}