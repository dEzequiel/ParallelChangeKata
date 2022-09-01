interface Item {
	price: number
}

class ShoppingCart {
	price: number[] = []
	totalPrice: number

	// add = (itemPrice: number) => (this.price.push(itemPrice));
	add(itemPrice: number): void {
		this.price.push(itemPrice)
	}

	calculateTotalPrice(): number {
		for(let price of this.price) {
			this.totalPrice += price
		}
		return this.totalPrice
	}

	numberOfProducts = () => this.price.length;

	hasDiscount = () => this.calculateTotalPrice() > 100;
}

export default ShoppingCart;