/* const precio = 120;
const descuento = 15; */

/* console.log({
  precio,
  descuento,
  porcentajeConDescuento,
  precioConDescuento
}) */

function calcularDescuentoPrecio(precio,descuento){
  const porcentajeConDescuento = 100 - descuento;
  const precioConDescuento = precio * porcentajeConDescuento / 100;
  return precioConDescuento;
}

function calcularDescuento(price,discount){
  const message = document.getElementById('mensajeDescuento');
  const inputPrice = document.getElementById('inputPrice').value;
  const inputDiscount = document.getElementById('inputDiscount').value;
  const priceDiscount = calcularDescuentoPrecio(inputPrice, inputDiscount);
  message.innerText = `El producto tiene un valor de ${inputPrice}, y con el descuento de %${inputDiscount} el producto le queda en $${priceDiscount}`
}