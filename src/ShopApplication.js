/* Application:
 * This class will be the main class for my shop.
 *
 * The Shop will be a simulation for a real online shop. It has no business value
 * and I will not make any money with this project, it is only for learning purpose.
 * You are free to use this project as you want to.
 */

class Application {

    constructor() {
        this.version = "1.1";
        this.name = "Shopily by Marco Steinke";
        this.loadApplication();
        this.databaseController = new DatabaseController(new Database());

    }

    loadApplication() {
        console.log("running version " + this.version + " of " + this.name);
        console.log("Main.js loaded");
    }
}

let shopApplication = new Application();
let database = shopApplication.databaseController.database;
let rnd = new RandomItemGenerator(database);

rnd.generateRandomShopItem();

let url = getRandomImage("Sport Model");

/*let rndImageObject = document.createElement("img");
rndImageObject.setAttribute("url", url);

document.append(rndImageObject);*/

database.insert(new Item("Hoodie", "", 65, ['red', 'green', 'white']));

database.print();