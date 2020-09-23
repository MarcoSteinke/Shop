class ShopItemRenderer {

    constructor(database) {
        this.database = database;
        this.render({});
    }

    render(itemInformation) {
        if(itemInformation.brand) {

            this.database.table.forEach(item => {

                if(item.name.includes(itemInformation.brand, 0)) {

                    this.renderDOM(item);

                }

            });

        } else if(itemInformation.price) {

            this.database.table.forEach(item => {

                if(item.price < itemInformation.price) {

                    this.renderDOM(item);

                }

            });
        } else if(itemInformation.color) {

            let result = false;

            this.database.table.forEach(item => {

                if(item.colors.forEach(color => {

                    if(color.localCompare(itemInformation.color) == 0) {

                        return true;

                    }

                })) {

                    this.renderDOM(item);
                    
                }

            });
        } else {

            this.database.table.forEach(

                item => this.renderDOM(item)

            );
        }
    }

    renderDOM(item) {
        document.getElementById("items").insertAdjacentHTML(
            "afterbegin", 
            "<li>\
            <div class=\"shop-item\"></div>\
            <div class=\"shop-item-name\">" + item.name + "</div>\
            <div class=\"shop-item-colors\"></div>\
            </li>"
        )
    }
}