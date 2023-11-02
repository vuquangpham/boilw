export default class Instance{
    constructor(options){
        this.options = options;
    }


    /**
     * Destroy the instance
     * */
    destroy(){
        return Library.destroy(this);
    }
}