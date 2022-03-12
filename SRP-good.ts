
// Right way is to have two separate classes
class Category2 {

    private readonly title;
    private readonly description;
    private readonly vendors:string[];
    private readonly productList:string[];

}
class SavData{
    public saveToDatabase(data:any){
        // some code related to database;
    }
}