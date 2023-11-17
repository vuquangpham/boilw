import EventEmitter from "./events";
import {INSTANCE_CLASSES} from "./configs";
import {init} from "./helpers";
import Listeners from "./listeners";

export default class Instance{
    constructor(options){
        this.options = options;
        this.target = options.target;

        // already initialized
        if(this.target.classList.contains(INSTANCE_CLASSES.enabled)){
            console.error('The target has already initialized!');
            return null;
        }

        // init
        this.hasInitialized = init(this);
        if(!this.hasInitialized) return null;

        // events emitter
        this.events = new EventEmitter();

        // event listeners for destroy method
        // contains: name, target, handler
        this.listeners = new Listeners();

        // add enabled class
        this.target.classList.add(INSTANCE_CLASSES.enabled);
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
        this.listeners.destroyAll();

        // remove enabled class
        this.target.classList.remove(INSTANCE_CLASSES.enabled);

        return Library.destroy(this);
    }
}