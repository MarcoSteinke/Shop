class Item {
    constructor(name, image, price, colors = []) {
        this.name   = name;
        this.image  = image;
        this.price  = price;
        this.colors = colors;
        this.UUID   = this.generateUUID();
    }

    // Public Domain/MIT
    generateUUID() { 
        //Timestamp
        var d = new Date().getTime();
        //Time in microseconds since page-load or 0 if unsupported
        var d2 = (performance && performance.now && (performance.now()*1000)) || 0;
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            //random number between 0 and 16
            var r = Math.random() * 16;
            //Use timestamp until deleted
            if(d > 0){
                r = (d + r)%16 | 0;
                d = Math.floor(d/16);
                //Use microseconds since page-load if supported
            } else {
                r = (d2 + r)%16 | 0;
                d2 = Math.floor(d2/16);
            }
            return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
    }
}