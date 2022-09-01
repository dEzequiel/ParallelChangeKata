import ShoppingCart from "./ShoppingCart";

class ImagineThisIsAClientInADifferentRepository {
  FormattedPrice = () => {
    var cart = new ShoppingCart();
    cart.add(10);
    return `Total price is ${cart.calculateTotalPrice()} euro`;
  };
}

export default ImagineThisIsAClientInADifferentRepository;
