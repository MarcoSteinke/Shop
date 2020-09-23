/* Database:
 * This class is used as a wrapper for imaginary tables. It has methods to manipulate them.
 *
 */

class Database {

    constructor() {
        this.table = [];
    }

    insert(item) {
        this.table.push(item);
    }

    remove(item) {
        for(databaseIterator = 0; databaseIterator < this.table.length; databaseIterator++)
            if(this.table[databaseIterator].UUID == item.UUID)
                this.table.pop(this.table[databaseIterator]);
    }

    print() {
        this.table.forEach(
            (item) => console.log(item.name)   +
                      console.log(item.price)  +
                      console.log(item.image)  +
                      console.log(item.colors) +
                      console.log(item.UUID)
        );
    }
}