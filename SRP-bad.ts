/*
   Single Responsibility Principle (SRP)
    There should never be more than one reason for a class to change.
*/ 

/* bad example of Single Responsiblity Principle
   as this class has two responsibiity one to have category (which is it's main responsibilty)
   and other is to save the data to database. 
*/

class Category1 {

    private readonly title;
    private readonly description;
    private readonly vendors:string[];
    private readonly productList:string[];

    public saveToDatabase(data:any){
        // some code related to database;
    }
}
