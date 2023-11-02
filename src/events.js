export default class EventEmitter{
    constructor(){
        this.callbacks = {};
    }


    /**
     * Register callback into correspond event (based on event names)
     * @param _names {String}
     * @param callback {Function}
     * @return {Object}
     * */
    on(_names, callback){
        // errors
        if(typeof _names === 'undefined' || _names === ''){
            console.warn('Wrong names');
            return false;
        }

        if(typeof callback !== "function"){
            console.warn('Wrong callback');
            return false;
        }

        // resolve names
        const names = this.resolveNames(_names);

        // loop each name
        names.forEach(name => {

            // create callback if not exist
            if(!(this.callbacks[name] instanceof Array))
                this.callbacks[name] = [];

            // add callback
            this.callbacks[name].push(callback);
        });

        return this;
    }


    /**
     * Destroy the callback with the corresponding event name
     * @param _names {String}
     * @return {Object}
     * */
    off(_names){
        // errors
        if(typeof _names === 'undefined' || _names === ''){
            console.warn('Wrong name');
            return false;
        }

        // resolve names
        const names = this.resolveNames(_names);

        // loop each name
        names.forEach(name => {
            // remove the event
            if(this.callbacks[name] && this.callbacks[name] instanceof Array) delete this.callbacks[name];
        });

        return this;
    }


    /**
     * Trigger the event with the name
     * @param _names {String}
     * @param _args {Array}
     * */
    trigger(_names, _args){
        // Errors
        if(typeof _names === 'undefined' || _names === ''){
            console.warn('Wrong name');
            return false;
        }

        // default args
        const args = !(_args instanceof Array) ? [] : _args;

        // resolve names
        const names = this.resolveNames(_names);

        names.forEach(name => {
            const callbacks = this.callbacks[name];
            if(!callbacks) return;

            callbacks.forEach(cb => {
                cb.apply(this, args);
            });
        });
    }


    /**
     * Separate string with spacing and special characters into array
     * "Jane,,,,, Mary" => [Jane, Mary]
     * @param _names {String}
     * @return {Array}
     * */
    resolveNames(_names){
        let names = _names;
        names = names.replace(/[^a-zA-Z0-9 ,/.]/g, '');
        names = names.replace(/[,/]+/g, ' ');

        return names.split(' ');
    }
}