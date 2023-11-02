import EventEmitter from "./events";

export default class Instance{
    constructor(options){
        this.options = options;

        // events emitter
        this.events = new EventEmitter();
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
        return Library.destroy(this);
    }
}