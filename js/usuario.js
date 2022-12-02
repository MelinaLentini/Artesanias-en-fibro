//Clase que permite dar de alta el usuario para la compra.
class Username {
    constructor(nombre, apellido, email) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.email = email;
    }
  }

//Genera el alta del usuario y confirma la compra.
function altaUsername() {
    //Verifica que el carrito no este vacio.
    if (carrito.length === 0) {
  
      carritoVacio();
  
      //Verifica que los campos no esten vacios. 
    } else if ($("#nombreForm").val() === "" || $("#apellidoForm").val() === "" || $("#emailForm").val() === "") {
  
      datosIncorrectos();
  
      //Expresion regular que valida si el formato del correo es válido.   
    } else if ((/\S+@\S+\.\S+/).test($("#emailForm").val()) === false) {
  
      datosIncorrectos();
  
      //Si pasa los controles crea el usuario y confirma la compra.
    } else {
  
      usuarioRegistro = new Username($("#nombreForm").val(), $("#apellidoForm").val(), $("#emailForm").val());
      compraConfirmada();
  
    }
  }
  function myFunctionBtn() {
    document.getElementById("demo").innerHTML = "Enviar";
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Tu mensaje ha sido enviado',
    showConfirmButton: false,
    timer: 1500
  })
}
function myFunctionSusc() {
  document.getElementById("demo").innerHTML = "Enviar";
Swal.fire({
  position: 'top-end',
  icon: 'success',
  title: 'Te has suscripto para recibir nuestras ofertas',
  showConfirmButton: false,
  timer: 1500
})
}