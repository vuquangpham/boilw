import {uid} from "./utils";

class Listeners{
    constructor(){
        this.instances = [];
    }

    add(target, name, handler, id = uid()){
        if(!target || !name || !handler){
            console.error(`The input parameters don't exist. Please check it again!`);
            return null;
        }

        // create the new instance
        const instance = {
            target, name, handler, id
        };

        // register event listener
        instance.target.addEventListener(instance.name, instance.handler);

        // push to the instances
        this.instances.push(instance);
    }

    destroy(id){
        const index = this.instances.findIndex(i => i.id === id);
        if(index === -1) return null;

        // get the instance
        const instance = this.instances[index];

        // remove event listener
        instance.target.removeEventListener(instance.name, instance.handler);

        // remove from the instances
        this.instances.splice(index, 1);

        return instance;
    }

    destroyAll(){
        // kill the event listener
        this.instances.forEach(instance => {
            instance.target.removeEventListener(instance.name, instance.handler);
        });

        // remove the instances
        this.instances = [];
    }
}

export default Listeners;