// // Forzar el documento al inicio
// const elemeto = document.getElementById('firstcontent');
// const posx = elemeto.offsetLeft;
// const posy = elemeto.offsetTop;

// window.scrollTo(posx, posy);

// Obtener todos los elementos de entrada

// export * as main from './main.js';

const elementosEntrada = document.querySelectorAll('input, select');




// Iterar sobre los elementos de entrada
elementosEntrada.forEach((elementoEntrada) => {
  // Agregar un manejador de eventos al elemento de entrada para guardar su valor en el local storage cuando cambie
  elementoEntrada.addEventListener('change', () => {
    // Obtener el valor del elemento de entrada
    const valor = elementoEntrada.value;

    // Guardar el valor del elemento de entrada en el local storage
    localStorage.setItem(elementoEntrada.id, valor);

    console.log(elementoEntrada.id,  ': ' , valor);

  });

  // Verificar si existe un valor guardado en el local storage para el elemento de entrada
  const valorGuardado = localStorage.getItem(elementoEntrada.id);

  // Si existe un valor guardado, establecerlo como el valor del elemento de entrada
  if (valorGuardado) {
    elementoEntrada.value = valorGuardado;
  }
});




const boton_formulario = document.getElementById('inicio-form');

boton_formulario.addEventListener('click', () => {
  const form_formacion = 'formulario';

  window.scrollTo({ top: document.getElementById(form_formacion).offsetTop + -100});
})

// const boton_datospersonales = document.getElementById('btn-next-datospersonales');

// const boton_datospersonales_back = document.getElementById('back-inicio-form');

// boton_datospersonales.addEventListener('click', () => {
//   const form_datospersonales = 'formulario-datospersonales';

//   window.scrollTo({ top: document.getElementById(form_datospersonales).offsetTop + -100});


// });

// boton_datospersonales_back.addEventListener('click', () => {
//   const form_iniform = 'ini-form';

//   window.scrollTo({ top: document.getElementById(form_iniform).offsetTop + -100});


// });

