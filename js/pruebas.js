function probarValidarNombre() {
  console.assert(
      validarNombre('') === 'El nombre no puede estar vacio.',
      'Validar nombre no validó que el nombre no sea vacío',
  );

  console.assert(
      validarNombre(
          '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') ===
      'No puede tener mas de 50 caracteres',
      'Validar nombre no validó que el nombre sea menor a 50 caracteres',
  );

  console.assert(validarNombre('nombre apellido') === '', 'Fallo validar nombre con un nombre valido');


  console.assert(validarNombre('1231231232') === 'El campo nombre solo acepta letras. Formato: Nombre y Apellido.', 'Fallo validacion nombre con numeros.');
}



function probarValidarDescripcionRegalo(){
    console.assert(validarDescripcionRegalo('') === 'La descripcion no puede tener menos de 20 caracteres.', 'Fallo validar regalo');
    console.assert(validarDescripcionRegalo('111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') === 'No puede tener mas de 100 caracteres.', 'Fallo validacion de regalo por max caracteres.');
    console.assert(validarDescripcionRegalo('1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') === '', 'Fallo validaciondescripcion con una valida.');
    console.assert(validarDescripcionRegalo('/////////////////////////////////////') === 'No se pueden usar caracteres especiales en la descripcion.', 'Funcion validar descripcion, fallo validacion caracteres');
}

function probarValidarCiudad(){
    console.assert(validarCiudad('') === 'Debes elegir una provincia.', 'No funciono la validacion de provincia.');
    console.assert(validarCiudad('Ciudad') === '', 'Fallo validarCiudad con una ciudad valida');
}

probarValidarCiudad();
probarValidarDescripcionRegalo();
probarValidarNombre();
