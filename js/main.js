const $botonenviar = document.querySelector('#enviar-carta');
const $rutaformulario = document.querySelector('#carta-a-santa');
const auxiliar ="";

function validarCiudad(ciudad){
    if(ciudad.length === 0){
        return 'Debes elegir una provincia.';
    }else{
        return ``;
    }
}

function validarDescripcionRegalo(descripcion){
    if(descripcion.length < 20){
        return 'La descripcion no puede tener menos de 20 caracteres.';
    }else if(descripcion.length > 100){
        return 'No puede tener mas de 100 caracteres.'
    }

    if(!/[A-Za-z0-9,\. ]+$/i.test(descripcion)){ //Con el "\." escapamos para aceptar los puntos (.) en el input.
        return 'No se pueden usar caracteres especiales en la descripcion.';
    }
///^[A-Za-z]+$/
        return ``;
}

// los caracteres ^ indica en el inicio y el $ indica en el final.

function validarNombre(nombre){
    if(nombre.length === 0){
        return 'El nombre no puede estar vacio.';
    }else if(nombre.length > 50){
        return 'No puede tener mas de 50 caracteres';
    }

    if(!/^[a-z]+ [a-z]+$/i.test(nombre)){
        return 'El campo nombre solo acepta letras. Formato: Nombre y Apellido.'
    } //regular expressions. Validamos que tenga nombre y apellido.

        return '';
}

function comprobarExisteTextoError(llave, error){
    const $rutaerrores = document.querySelector('#errores');
    const $valorllave = document.querySelector(`li[name=${llave}]`);

    if(!$valorllave){   
        $rutaformulario[llave].className = 'error';
        let texto = document.createElement('li');
        texto.setAttribute('name',`${llave}`);
        texto.innerText = error;
        //texto.innerText = error;
        $rutaerrores.appendChild(texto);
    }
    if($valorllave){
        let texto = document.querySelector(`li[name='${llave}']`);
        texto.innerText = error;
    }
    return false;
}

function controlarErrores(errores){

    const keys = Object.keys(errores);  // Guardo las keys del objeto "errores" en la variable keys.
    let contadorError = 0;
    keys.forEach(function(llave){
        const error = errores[llave];
        //console.log(errores[llave]);
        console.log(error);
        if(error){
            comprobarExisteTextoError(llave, error);
            contadorError++;  
        }else{
            $rutaformulario[llave].className = '';
           const prueba = document.querySelectorAll(`#errores li[name=${llave}]`);
           for(let i=0;i<prueba.length;i++){
               prueba[i].remove();
           }
        }
    })

    return contadorError;
    /*
    errorNombre = errores.nombre;
    errorCiudad = errores.ciudad;
    errorDescripcion = errores.descripcion;

    if(errorNombre){ // Si hay un error devuelve texto entonces da Truthy y entra en el if.
        document.formulario.nombre.className = 'error';
    }else { // Si da mas o menos false, pasa a esta parte.
        document.formulario.nombre.className = '';
    }

    if(errorCiudad){
        document.formulario.ciudad.className = 'error';
    }else {
        document.formulario.ciudad.className = '';
    }

    if(errorDescripcion){
        document.formulario['descripcion-regalo'].className = 'error';
    }else {
        document.formulario['descripcion-regalo'].className = '';
    }
    */
}

function validarFormulario(event){
    const ciudad = document.formulario.ciudad.value;
    const descripcionRegalo = document.formulario['descripcion-regalo'].value;
    const nombre = document.formulario.nombre.value;
    const errorNombre = validarNombre(nombre);
    const errorCiudad = validarCiudad(ciudad);
    const errorDescripcion = validarDescripcionRegalo(descripcionRegalo);
    //document.querySelector("#nombre").className = 'error';
    const errores = {
        nombre: errorNombre,
        ciudad: errorCiudad,
        'descripcion-regalo': errorDescripcion
    }
    
    const exitoso = controlarErrores(errores) === 0;
    //console.log(errores);
    

    if(exitoso){
        $rutaformulario.className = "oculto";
        document.querySelector('#exito').className = '';
        setTimeout(function(){
            window.location.assign("./wishlist.html");
        }, 5000)
    }else{
        document.querySelector('#exito').className = 'oculto';
    }

    event.preventDefault();
}



$botonenviar.onclick = validarFormulario;


