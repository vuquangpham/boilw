// style
import './_index.scss';

// script
import {validateTarget} from "./helpers";
import {uid} from "./utils";
import Instance from "./instance";

/**
 * Private class
 * */
class Library{
    constructor(){
        // instances
        this.instances = [];
    }

    create(options){
        const validatedOptions = {
            id: uid(),
            target: null,
            ...options
        };
        validatedOptions.target = validateTarget(validatedOptions.target);
        if(!validatedOptions.target) return null;

        // init new instance
        const instance = new Instance(validatedOptions);
        if(!instance) return null;

        // add new instance
        this.instances.push(instance);
        return instance;
    }

    get(id){
        // matched condition
        const isMatched = (i) => i.id === id;
        return this.instances.find(isMatched);
    }

    destroy(instance){
        // matched condition
        const isMatched = (i) => i.id === instance.id;

        const result = this.instances.find(isMatched);

        // instance doesn't exist
        if(!result) return false;

        // remove the instance
        const index = this.instances.findIndex(isMatched);

        // remove from instances
        this.instances.splice(index, 1);

        return true;
    }
}


/**
 * Public library
 * */
window.Library = new Library();