$(document).ready(function() {
//Recupera el archivo JSON que contiene los productos, arma la clase card para enviar al HTML.
    $.getJSON("./json/productos.json", function (data) {

        productos = data;
        let items = [];
        $.each(productos, function (index, elemento) {
            let {id, name , precio} = elemento;

            items = `
            <div class="card prod" style="width: 15rem;"> 
                <img src="img/producto${ id }.jpg" class="card-img-top" style="height: 200px;" alt="${ name }">
                <div class="card-body prod__card">
                    <p>${name}</p>
                    <p>$<span class="price_prod">${ precio }</span></p>
                    <p>Espesor: 3mm</p>
                    <p>Se entregan lijados, listas para pintar!!</p>
                    <a class="btn btn-success btn-producto" id="${ id }" onclick="agregarProducto(productos[${ id - 1 }])">Agregar al carrito</a>
                </div>
            </div>
            `
            productosIniciales.push(items);
        });
        //Carga el HTML con todos los productos.
        $("#ProductosJson").append(productosIniciales);
    })
});
