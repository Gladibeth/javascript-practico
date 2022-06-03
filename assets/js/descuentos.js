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

function calcularDescuento(){
  const message = document.getElementById('mensajeDescuento');
  const inputPrice = document.getElementById('inputPrice').value;
  const inputDiscount = document.getElementById('inputDiscount').value;
  const priceDiscount = calcularDescuentoPrecio(inputPrice, inputDiscount);
  message.innerText = `El producto tiene un valor de ${inputPrice}, y con el descuento de %${inputDiscount} el producto le queda en $${priceDiscount}`
}

const coupons = [
  {
      name: "bajo",
      discount: 15,
  },
  {
      name: "alto",
      discount: 30,
  },
  {
      name: "medio",
      discount: 25,
  },
];

function calcularDescuentoCupon(){
  const message = document.getElementById('mensajeDescuentoCupon');
  const inputPrice = document.getElementById('inputPriceCoupon').value;
  const inputDiscountCoupon = document.getElementById('inputDiscountCoupon').value;

  const couponValueValid = function(coupon){
    return coupon.name == inputDiscountCoupon;
  }

  const userCoupon = coupons.find(couponValueValid);

  if(!userCoupon){
    message.innerText = `El cupon ${inputDiscountCoupon} no es valido, por favor vuelva  a intentarlo`;
  }else{
    const discount = userCoupon.discount;
    const priceDiscount = calcularDescuentoPrecio(inputPrice, discount);
    message.innerText = `El producto tiene un valor de ${inputPrice}, y con el descuento de %${discount} el producto le queda en $${priceDiscount}`
  }

}