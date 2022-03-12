

interface MonthlyPlans {
    monthlyPlans(): void;
}

interface YearlyPlans {
    yearlyPlans(): void;
    
}
interface FreePlans {
    freePlans(): void;
    
}
interface PremiumPlans {
    premiumPlans(): void;
}
/** 
 *  Suppose hotstar do not give free and monthly plan
 then it is not good approach to use others
 * */
class Hotstar2 implements YearlyPlans,PremiumPlans {
    yearlyPlans(): void {
        throw new Error("Method not implemented.");
    }
    premiumPlans(): void {
        throw new Error("Method not implemented.");
    }

}