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
    }

    // Method to return a random element from any given array
    chooseRandomFromArray(array = []) {
        return array[Math.round(Math.random() * array.length)];
    }
}