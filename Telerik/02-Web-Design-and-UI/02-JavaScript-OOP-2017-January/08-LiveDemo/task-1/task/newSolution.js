function solve() {
	function getProduct(productType, name, price) {
		return {
			productType : productType,
			name : name,
			price : price
		};
	}
    function getShoppingCart() {
		var products = [];

		function add(product) {
			products.push(product);
			return this;
		}
        function remove(product) {
            if (products) {
				var pos = products.findIndex(x => x.name === product.name && x.productType === product.productType && x.price === product.price);
				if (pos >= 0) {
					// for (var i = pos; i < products.length - 1; i += 1) {
					// 	products[i] = products[i+1];
					// }
					// products.pop();
                    products.splice(pos,1);
				}
				else {
					throw 'No such product';
				}
			}
			else {
				throw 'No products to remove from';
			}
			return this;        
        }
        function showCost() {
            var sum = 0;
			if (products) {
				// for (var i = 0; i < products.length; i += 1) { 
				// 	sum += products[i].price;
				// }
                sum = products.reduce((cost, product) => cost + product.price, 0);
			}
			return sum;
        }
        function showProductTypes() {
			var types = [];
			for (var i = 0; i < products.length; i += 1) {
				if (!types.some(x => x === products[i].productType)) {
					types.push(products[i].productType);
				}
			}
			types.sort();
			return types;
		}
        function getInfo() {
            var productGroups = [];
			var names = [];
			for (var i = 0; i < products.length; i += 1) {
				if (!names.some(x => x === products[i].name)) {
					names.push(products[i].name);
				}
			}
			names.sort();
			var productGroup;
			for (var i = 0; i < names.length; i += 1) {
				let repetitions = products.filter(x => x.name === names[i]);
				let groupPrice = repetitions.reduce((sum, x) => sum + x.price, 0);
				productGroup = {
					name : names[i],
					totalPrice : groupPrice,
					quantity : repetitions.length
				}
				productGroups.push(productGroup);
			}

			return {
				products : productGroups,
				totalPrice : this.showCost()
			}
        }

        return {
			products : products,
			add : add,
			remove : remove,
			showCost : showCost,
			showProductTypes : showProductTypes,
			getInfo : getInfo,
		};
	}
    return {
		getProduct: getProduct,
        getShoppingCart: getShoppingCart
    };
}

module.exports = solve();