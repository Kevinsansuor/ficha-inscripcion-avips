  // Asociamos la función de validación al evento change del campo select
$tipo_ciclo = document.querySelector("#tipo-ciclo").addEventListener("change", validarSelect);

$tipo_curso = document.querySelector("#tipo-curso").addEventListener("change", validarSelect);

$tipo_documento = document.querySelector("#tipo-documento").addEventListener("change", validarSelect);

$input_documento = document.querySelector("#documento-input").addEventListener("change", validarCampos);

$input_nombre = document.querySelector("#nombre-input").addEventListener("change", validarCampos);

var fecha_Ingreso = new Date();

function validarFormulario() {



// Guardamos la fecha de ingreso en el local storage
localStorage.setItem("fecha Ingreso", fecha_Ingreso);

// Imprimimos la fecha de ingreso en la consola
console.log("Fecha de ingreso del usuario:", localStorage.getItem("fecha_Ingreso"));

    // Comprobamos si el campo select tiene un valor seleccionado

    //Validación tipo de ciclo
    if (document.querySelector("#tipo-ciclo").value === "") {
    document.querySelector("#error_ciclo").classList.remove("hidden");
    document.querySelector("#error_ciclo").classList.add("mensaje-error");
    alert("Por favor, selecciona un tipo de ciclo.");
    return false;

    } else {
        document.querySelector("#error_ciclo").classList.add("hidden");
    }

      //Validación tipo de curso
    if (document.querySelector("#tipo-curso").value === "") {
        // Mostramos una alerta
        document.querySelector("#error_curso").classList.remove("hidden");
      document.querySelector("#error_curso").classList.add("mensaje-error");
        alert("Por favor, selecciona un tipo de curso.");
        return false;

    } else {
        document.querySelector("#error_curso").classList.add("hidden");
    }

    //Validar solo números en número de documento
    const num_documento = document.querySelector("#documento-input").value;
    const regex = /^[0-9]{5,15}$/;
    if (!regex.test(num_documento)) {

    alert("Tienes un error en el número de documento")
    document.querySelector("#error_numdocumento").classList.remove("hidden");

    }
    

    //Validación tipo de documento
    if (document.querySelector("#tipodocumento-input").value === "") {
      document.querySelector("#error_tipodocumento").classList.remove("hidden");
      document.querySelector("#error_tipodocumento").classList.add("mensaje-error");
      alert("Por favor, selecciona un tipo de documento.");
      return false;
  
      } else {
          document.querySelector("#error_ciclo").classList.add("hidden");
      }

      //Validación nombre

      const nombre_estudiante = document.querySelector("#nombre-input").value;
      const regex_nombre = /^[a-zA-ZáéíóúñÑ ]+$/;
      if (!regex_nombre.test(nombre_estudiante)) {
        // Mostramos un mensaje de error
        document.querySelector("#error_nombre").classList.remove("hidden");

        alert("Tienes un error en el campo Nombre");

        setTimeout(() => {
          const errorNombre = document.querySelector("#error_nombre");
          errorNombre.scrollIntoView({
            top: errorNombre.getBoundingClientRect().top + 100,
          });
        }, "1000");

        
        return false;
      }

    fecha_hoy = new Date;
    mes_actual = fecha_hoy.getMonth() + 1;
    año_actual = fecha_hoy.getFullYear();
  
    $fecha_input = document.getElementById("fecha-input").value;
    $fecha_input_año = new Date($fecha_input).getFullYear();
  
    // console.log(fecha_hoy);
    // console.log(mes_actual, año_actual);
  
    $diferencia_años = año_actual - $fecha_input_año;

    if($diferencia_años < 1 || $diferencia_años < 18) {
      alert("El registro solo esta disponible para mayores de 18 años");
      document.querySelector("#error_fechanacimiento").classList.remove("hidden");
    }
      


    const fecha_Envio = new Date();

    // Guardamos la fecha en el local storage
    localStorage.setItem("fecha Envio", fecha_Envio);

    const duracion_form = (fecha_Envio - fecha_Ingreso)/ (1000*60) + " minutos" ;

    localStorage.setItem("Duración formulario: ", duracion_form);

    



    // Si todos los campos están llenos, devolvemos true
    return true;
    } 



  // Asociamos la función de validación al evento click del botón de envío
const boton_formulario = document.getElementById("boton-formulario-final");

boton_formulario.addEventListener("click",()=>{
  validarFormulario;

  // Evitar la recarga de la página
  event.preventDefault();

  // Enviar el formulario
  document.querySelector('form').submit();
})


function validarSelect() {
    // Comprobar si el valor del campo select es diferente de Nulo, entonces añadir clase hidden para ocultar la calse
    if (document.querySelector("#tipo-ciclo").value !== "") {
    document.querySelector("#error_ciclo").classList.add("hidden");
    }

    if (document.querySelector("#tipo-curso").value !== "") {
        document.querySelector("#error_curso").classList.add("hidden");
        }

    if (document.querySelector("#tipodocumento-input").value !== "") {
        document.querySelector("#error_tipodocumento").classList.add("hidden");
        }
        
  }

  function validarCampos(){
    if (document.querySelector("#documento-input").value !== "Nulo") {
      document.querySelector("#error_numdocumento").classList.add("hidden");
      }

      if (document.querySelector("#nombre-input").value !== "Nulo") {
        document.querySelector("#error_nombre").classList.add("hidden");
        }
  }

  function validarFecha() {
    
  
    //console.log("diferencia_años: " + diferencia_años);
  }
  
  // Asociamos la función de validación al evento change del campo input
  document.querySelector("#fecha-input").addEventListener("change", validarFecha);
  
  
  
  
  
  