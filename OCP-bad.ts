/**
 * Open-Close Principle (OCP)
 * “Software entities … should be open for extension, but closed for modification.”
 */

class Entertainment {

    public entObj:any;
    constructor(obj:any){
        this.entObj = obj;
    }

}

class LifeStyle {

    public lifeObj:any;
    constructor(obj:any){
        this.lifeObj = obj;
    }

}

class PayloadCreator {

    public createEntertainmentPayload(obj:Entertainment){
        //do some modification or formatting
            const newObj = {...obj.entObj}
        return newObj;
    }
    public createLifeStylePayload(obj:LifeStyle){
        const newObj = {...obj.lifeObj}
        return newObj;
    }

}