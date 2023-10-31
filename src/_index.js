// style
import './_index.scss';

// script
import {validateTarget} from "./helpers";
import {uid} from "./utils";

/**
 * Private class
 * */
class Library{
    constructor(){
        // instances
        this.instances = [];
    }

    create(options){
        const validateOptions = {
            id: uid(),
            target: null,
            ...options
        };
        validateOptions.target = validateTarget(validateOptions.target);
        if(!validateOptions.target) return null;
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