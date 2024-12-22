
const data = [
    { 
        name: "Cheese Pizza", 
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/Autosuggest/Top%20200%20queries/Pizza.png", 
        price: 250, 
        variants: [
            { name: "Small", price: 200 },
            { name: "Medium", price: 250 },
            { name: "Large", price: 300 },
            { name: "Extra Large", price: 350 },
            { name: "Family Size", price: 400 }
        ]
    },
    { 
        name: "Veg Pizza", 
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/Autosuggest/Top%20200%20queries/Pizza.png", 
        price: 270, 
        variants: [
            { name: "Small", price: 220 },
            { name: "Medium", price: 270 },
            { name: "Large", price: 320 },
            { name: "Extra Large", price: 370 },
            { name: "Family Size", price: 420 }
        ]
    },
    { 
        name: "Pepperoni Pizza", 
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/Autosuggest/Top%20200%20queries/Pizza.png", 
        price: 300, 
        variants: [
            { name: "Small", price: 250 },
            { name: "Medium", price: 300 },
            { name: "Large", price: 350 },
            { name: "Extra Large", price: 400 },
            { name: "Family Size", price: 450 }
        ]
    },
    { 
        name: "BBQ Chicken Pizza", 
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/Autosuggest/Top%20200%20queries/Pizza.png", 
        price: 350, 
        variants: [
            { name: "Small", price: 300 },
            { name: "Medium", price: 350 },
            { name: "Large", price: 400 },
            { name: "Extra Large", price: 450 },
            { name: "Family Size", price: 500 }
        ]
    },
    { 
        name: "Hawaiian Pizza", 
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/Autosuggest/Top%20200%20queries/Pizza.png", 
        price: 320, 
        variants: [
            { name: "Small", price: 270 },
            { name: "Medium", price: 320 },
            { name: "Large", price: 370 },
            { name: "Extra Large", price: 420 },
            { name: "Family Size", price: 470 }
        ]
    },
    { 
        name: "Chicken Biryani", 
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/Autosuggest/Top%20200%20queries/Biryani.png", 
        price: 300, 
        variants: [
            { name: "Regular", price: 300 },
            { name: "Large", price: 350 },
            { name: "Spicy", price: 320 },
            { name: "Boneless", price: 350 },
            { name: "With Raita", price: 330 }
        ]
    },
    { 
        name: "Mutton Biryani", 
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/Autosuggest/Top%20200%20queries/Biryani.png", 
        price: 350, 
        variants: [
            { name: "Regular", price: 350 },
            { name: "Large", price: 400 },
            { name: "Spicy", price: 370 },
            { name: "Boneless", price: 400 },
            { name: "With Raita", price: 380 }
        ]
    },
    { 
        name: "Prawn Biryani", 
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/Autosuggest/Top%20200%20queries/Biryani.png", 
        price: 400, 
        variants: [
            { name: "Regular", price: 400 },
            { name: "Large", price: 450 },
            { name: "Spicy", price: 420 },
            { name: "Boneless", price: 450 },
            { name: "With Raita", price: 430 }
        ]
    },
    { 
        name: "Vegetable Biryani", 
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/Autosuggest/Top%20200%20queries/Biryani.png", 
        price: 250, 
        variants: [
            { name: "Regular", price: 250 },
            { name: "Large", price: 300 },
            { name: "Spicy", price: 280 },
            { name: "Boneless", price: 300 },
            { name: "With Raita", price: 270 }
        ]
    },
    { 
        name: "Egg Biryani", 
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/Autosuggest/Top%20200%20queries/Biryani.png", 
        price: 280, 
        variants: [
            { name: "Regular", price: 280 },
            { name: "Large", price: 320 },
            { name: "Spicy", price: 300 },
            { name: "Boneless", price: 320 },
            { name: "With Raita", price: 290 }
        ]
    },
    { 
        name: "Paneer Biryani", 
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/Autosuggest/Top%20200%20queries/Biryani.png", 
        price: 270, 
        variants: [
            { name: "Regular", price: 270 },
            { name: "Large", price: 320 },
            { name: "Spicy", price: 300 },
            { name: "Boneless", price: 320 },
            { name: "With Raita", price: 290 }
        ]
    }
];

const cart = [];

const searchBar = document.getElementById('searchBar');
const suggestionsBox = document.getElementById('suggestionsBox');
const cartContainer = document.getElementById('cartContainer');
const cartIcon = document.getElementById('cartIcon');
const cartClose = document.getElementById('cartClose');
const cartItems = document.getElementById('cartItems');
const totalPrice = document.getElementById('totalPrice');

function renderCart() {
    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');

        const img = document.createElement('img');
        img.src = item.image;
        img.alt = item.name;

        const textContainer = document.createElement('div');
        const text = document.createElement('div');
        text.textContent = item.name;

        const price = document.createElement('div');
        price.textContent = `₹${item.price * item.quantity}`;
        price.classList.add('price');

        textContainer.appendChild(text);
        textContainer.appendChild(price);

        cartItem.appendChild(img);
        cartItem.appendChild(textContainer);

        const quantityController = document.createElement('div');
        quantityController.classList.add('quantity-controller');

        const decrementButton = document.createElement('button');
        decrementButton.textContent = '-';
        decrementButton.addEventListener('click', () => {
            const cartItem = cart.find(cartItem => cartItem.name === item.name);
            if (cartItem && cartItem.quantity > 1) {
                cartItem.quantity--;
            } else {
                const index = cart.findIndex(cartItem => cartItem.name === item.name);
                if (index > -1) {
                    cart.splice(index, 1);
                }
            }
            renderCart();
        });

        const quantityDisplay = document.createElement('span');
        quantityDisplay.textContent = item.quantity;

        const incrementButton = document.createElement('button');
        incrementButton.textContent = '+';
        incrementButton.addEventListener('click', () => {
            const cartItem = cart.find(cartItem => cartItem.name === item.name);
            if (cartItem) {
                cartItem.quantity++;
            } else {
                cart.push({ ...item, quantity: 1 });
            }
            renderCart();
        });

        quantityController.appendChild(decrementButton);
        quantityController.appendChild(quantityDisplay);
        quantityController.appendChild(incrementButton);

        cartItem.appendChild(quantityController);

        const buyButton = document.createElement('button');
        buyButton.textContent = 'Buy Now';
        buyButton.classList.add('buy-button');
        buyButton.addEventListener('click', () => {
            alert(`Proceeding to buy ${item.name}`);
        });

        cartItem.appendChild(buyButton);
        cartItems.appendChild(cartItem);

        total += item.price * item.quantity;
    });

    totalPrice.textContent = `Total: ₹${total}`;
}

searchBar.addEventListener('input', function() {
    const searchText = searchBar.value.toLowerCase();
    const filteredData = data.filter(item => item.name.toLowerCase().includes(searchText));

    suggestionsBox.innerHTML = '';
    if (filteredData.length > 0) {
        filteredData.forEach(item => {
            const suggestionElement = document.createElement('div');
            suggestionElement.classList.add('suggestion-item');

            const img = document.createElement('img');
            img.src = item.image;
            img.alt = item.name;

            const text = document.createElement('span');
            text.textContent = item.name;

            const variantSelect = document.createElement('select');
            item.variants.forEach(variant => {
                const option = document.createElement('option');
                option.value = variant.name;
                option.textContent = `${variant.name} - ₹${variant.price}`;
                variantSelect.appendChild(option);
            });

            const quantityController = document.createElement('div');
            quantityController.classList.add('quantity-controller');

            const decrementButton = document.createElement('button');
            decrementButton.textContent = '-';
            decrementButton.addEventListener('click', () => {
                const cartItem = cart.find(cartItem => cartItem.name === item.name);
                if (cartItem && cartItem.quantity > 1) {
                    cartItem.quantity--;
                } else {
                    const index = cart.findIndex(cartItem => cartItem.name === item.name);
                    if (index > -1) {
                        cart.splice(index, 1);
                    }
                }
                renderCart();
            });

            const quantityDisplay = document.createElement('span');
            quantityDisplay.textContent = '0';

            const incrementButton = document.createElement('button');
            incrementButton.textContent = '+';
            incrementButton.addEventListener('click', () => {
                const cartItem = cart.find(cartItem => cartItem.name === item.name);
                if (cartItem) {
                    cartItem.quantity++;
                } else {
                    cart.push({ ...item, quantity: 1 });
                }
                renderCart();
            });

            quantityController.appendChild(decrementButton);
            quantityController.appendChild(quantityDisplay);
            quantityController.appendChild(incrementButton);

            suggestionElement.appendChild(img);
            suggestionElement.appendChild(text);
            suggestionElement.appendChild(variantSelect);
            suggestionElement.appendChild(quantityController);

            suggestionElement.addEventListener('click', () => {
                if (cart.find(cartItem => cartItem.name === item.name)) {
                    return;
                }
                cart.push({ ...item, quantity: 1 });
                renderCart();
            });

            suggestionsBox.appendChild(suggestionElement);
        });
    }
});

cartIcon.addEventListener('click', () => {
    cartContainer.style.display = 'flex';
});

cartClose.addEventListener('click', () => {
    cartContainer.style.display = 'none';
});
