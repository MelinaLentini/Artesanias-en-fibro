// Suma todo lo que se va agregando en el subtotal.
const calcTotalCompra = (subTotal) => parseFloat(subTotal.reduce((a, b) => a + b, 0).toFixed(2));


// Genera la fila con el producto para insertar en la tabla.
function insertarTabla(name, cantidad, precio) {
  return `
            <tr>
                <td>
                  ${name}
                </td>
                <td>
                    ${cantidad}
                </td>
                <td>
                  $${precio}
                </td>
            </tr>`;
}

//Carga la tabla dentro del html con los productos seleccionados en el carrito.
function actualizarTabla(armadoTabla) {

  $(".titulosTabla").show()
  $(".ProductosElegidos").empty();
  $(".ProductosElegidos").append(armadoTabla);
  $("#totalCompra").empty();
  $("#totalCompra").append(totalAPagar);

}

//Permite agrupar los productos que son iguales.
function agruparProductos(arr, groupKeys, sumKeys) {
  return Object.values(
    arr.reduce((acc, curr) => {
      const group = groupKeys.map(k => curr[k]).join('-');
      acc[group] = acc[group] || Object.fromEntries(groupKeys.map(k => [k, curr[k]]).concat(sumKeys.map(k => [k, 0])));
      sumKeys.forEach(k => acc[group][k] += curr[k]);
      return acc;
    }, {})
  );
}

//Avisa cuando alguno de los datos del registro estan incompletos o el correo es inválido.
function datosIncorrectos() {

  $(".modal-body-aviso").text("Debes completar todos los campos o verificar su correcto formato.");
  $(".btnRevisar").show();
  $("#modalAviso").modal("show");

}

//Avisa que el carrito se encuentra vacio.
function carritoVacio() {

  $(".modal-body-aviso").text("Debes tener al menos un producto en el carrito para poder registrarte y confirmar la compra.");
  $(".btnRevisar").hide();
  $("#modalAviso").modal("show");

}

