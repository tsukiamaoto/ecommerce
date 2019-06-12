module.exports = function Cart(oldCart) {
    this.products = oldCart.products || {};
    this.totalQty = oldCart.totalQty || 0;
    this.totalPrice = oldCart.totalPrice || 0;

    this.add = function(product , id){
        var storedproduct = this.products[id];
        if(!storedproduct){
            storedproduct = this.products[id] = {product : product , quantity : 0, price:0};

        }
        storedproduct.qty++;
        storedproduct.price = storedproduct.product.price * storedproduct.qty;
        this. totalQty++;
        this.totalPrice += storedproduct.product.price;
    };

    this.products = function () {
        var arr = [];
        for(var id in this.products){
            arr.push(this.products[id]);
        }
        return arr;
    };
};