/* DatabaseController:
 * This Controller administrates the access to the database object
 *
 */

class DatabaseController {

    constructor(db) {
        this.randomItemGenerator = new RandomItemGenerator(db);
        this.database = db;
        this.loadApplication();
    }

    loadApplication() {
        this.mockDatabase(10);
        console.log("DatabaseController.js loaded");
    }

    mockDatabase(amount) {
        for(let i = 0; i < amount; i++) {
            this.database.insert(this.randomItemGenerator.generateRandomShopItem());
        }
    }
}