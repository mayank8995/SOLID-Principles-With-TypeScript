/**
 * Interface Segregation Principle
“Many client-specific interfaces are better than one general-purpose interface.”
 */

interface Plans{
    monthlyPlans(): void;
    yearlyPlans(): void;
    freePlans(): void;
    premiumPlans(): void;
}

/** 
 *  Suppose hotstar does not give free plan and monthly plan
 then it is not good approach to have these methods here.
 * */
class Hotstar implements Plans {
    monthlyPlans(): void { //no use
        throw new Error("Method not implemented.");
    }
    yearlyPlans(): void {
        throw new Error("Method not implemented.");
    }
    freePlans(): void { // no use
        throw new Error("Method not implemented.");
    }
    premiumPlans(): void {
        throw new Error("Method not implemented.");
    }

}