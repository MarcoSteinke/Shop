class RandomItemGenerator {

    constructor(database) {
        this.database = database;
    }

    generateRandomShopItem() {

        // Generate some brands:
        let brands = ['Nike', 'Adidas', 'Calvin Klein', 'Puma', 'Urban', 'StreetStyle',
            'Zara', 'Colloseum', 'Kult', 'DC', 'H&M', 'NewYorker', 'Snipes'
        ];

        // Generate some types:
        let types = ['Hoodie', 'Jeans', 'T-Shirt', 'Top', 'Blazer', 'Shorts', 'Skirt',
            'Poloshirt', 'Sunglasses', 'Earring', 'Socks', 'Underwear', 'Sneakers',
            'Boots', 'Necklace', 'Dress'
        ];

        // Store some gender-individual information
        let shoesizes = [38, 40, 44, 47];

        // Create some colors
        let colors = ['red', 'blue', 'green', 'yellow', 'purple',
            'white', 'black', 'gray'
        ];

        let jeansTypes = ['ripped', 'skinny', 'highwaist', ''];

        return new Item(
            this.chooseRandomFromArray(brands) + " " + this.chooseRandomFromArray(types),
            "",
            (Math.random() * 50 + Math.random()).toFixed(2),
            this.chooseRandomFromArray(colors)
        );
    }

    // Method to return a random element from any given array
    chooseRandomFromArray(array = []) {
        return array[Math.floor(Math.random() * array.length)];
    }
}