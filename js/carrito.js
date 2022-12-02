// Agrega el producto, subtotal, total e inserta la fila con el producto.
function agregarProducto(productoID) {
    let { id, precio, name, cantidad } = productoID;
    let armadoTabla = [];
    carrito.push(productoID);
    subTotal.push(precio);
    totalAPagar = calcTotalCompra(subTotal);
    acumulado = agruparProductos(carrito, ['id', 'name'], ['cantidad', 'precio']);
    $.each(acumulado, function (index, elemento) {
      let { id, name, cantidad, precio } = elemento;
      let items = [insertarTabla(name, cantidad, precio)];
      armadoTabla.push(items);
    });
    actualizarTabla(armadoTabla);
  }

//Vacia el carrito y limpia la tabla en el HTML.
function vaciaCarrito() {
    carrito = [];
    acumulado = [];
    subTotal = [];
    totalAPagar = [];
    pedidoConfirmado = [];
    $(".titulosTabla").hide();
    $(".ProductosElegidos").empty();
    $("#totalCompra").empty();
  }

  
//Confirma la compra brindando el total de la misma y los pasos a seguir. Registra los datos en localStorage y luego vacia el carrito.
function compraConfirmada() {

    $(".modal-body-aviso").html(`
      <p>${usuarioRegistro.nombre}:</p>
      <p>El total de tu compra es $${totalAPagar}. Enviaremos un correo a la casilla ${usuarioRegistro.email} con los pasos a seguir para abonar y coordinar el envío de tus productos.</p>
      <p>Muchas gracias por tu compra!</p>`);
    $(".btnRevisar").hide();
    $("#modalAviso").modal("show");
    pedidoConfirmado = acumulado;
    pedidoConfirmado.push(usuarioRegistro);
    pedidoConfirmado.push({ total: totalAPagar });
  
    if (localStorage.pedidoConfirmado === undefined) {
  
      let pedidoConfirmadoJSON = JSON.stringify([pedidoConfirmado]);
      localStorage.setItem("pedidoConfirmado", pedidoConfirmadoJSON);
  
    } else {
  
      let recuperarJson = JSON.parse(localStorage.pedidoConfirmado);
      let listarFinalizados = [pedidoConfirmado].concat(recuperarJson);
      let acumuladoJson = JSON.stringify(listarFinalizados);
      localStorage.setItem("pedidoConfirmado", acumuladoJson);
    }
  
    vaciaCarrito();
    $("#nombreForm").val("")
    $("#apellidoForm").val("")
    $("#emailForm").val("")
  }