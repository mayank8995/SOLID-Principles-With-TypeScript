/**
 * Dependency Inversion Principle (DIP)
“Depend upon abstractions, [not] 
concretions(Concretion is when in order to use something we need a concrete knowledge about the thing.)”
 */
class FrontendDeveloper {
    public writeHtmlCode(): void {
      // some method
    }
  }
  
  class BackendDeveloper {
    public writeTypeScriptCode(): void {
      // some method
    }
  }
  
  class SoftwareProject {
    public frontendDeveloper: FrontendDeveloper;
    public backendDeveloper: BackendDeveloper;
  
    constructor() {
      this.frontendDeveloper = new FrontendDeveloper();
      this.backendDeveloper = new BackendDeveloper();
    }
  
    public createProject(): void {
      this.frontendDeveloper.writeHtmlCode();
      this.backendDeveloper.writeTypeScriptCode();
    }
  }