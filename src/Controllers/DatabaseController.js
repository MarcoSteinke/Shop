/* DatabaseController:
 * This Controller administrates the access to the database object
 *
 */

class DatabaseController {

    constructor(db) {
        this.loadApplication();
        this.database = db;
    }

    loadApplication() {
        console.log("DatabaseController.js loaded");
    }
}