
interface Payload {
    createPayload();
}

class Entertainment2 implements Payload {

    public entObj:any;
    constructor(obj:any){
        this.entObj = obj;
    }

    createPayload(){
        const newObj = {...this.entObj}
        return newObj;
    }

}

class LifeStyle2 {

    public lifeObj:any;
    constructor(obj:any){
        this.lifeObj = obj;
    }
    createPayload(){
        const newObj = {...this.lifeObj}
        return newObj;
    }

}

class PayloadCreator2 {
        create(payload: Payload){
           return payload.createPayload();
        }
}