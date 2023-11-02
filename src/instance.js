import EventEmitter from "./events";

export default class Instance{
    constructor(options){
        this.options = options;

        // events emitter
        this.events = new EventEmitter();

        // event listeners for destroy method
        // contains: name, target, handler
        this.eventListeners = [];
    }


    /**
     * Register callback
     * @param name {String}
     * @param callback {Function}
     * @return {void}
     * */
    on(name, callback){
        this.events.on(name, callback);
    }


    /**
     * Destroy the instance
     * */
    destroy(){

        // kill the event listener
        this.eventListeners.forEach(event => {
            event.target.removeEventListener(event.name, event.handler);
        });

        return Library.destroy(this);
    }
}