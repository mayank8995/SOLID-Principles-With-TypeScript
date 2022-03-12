interface Developer {
    develop(): void;
  }
  
  class FrontendDeveloper2 implements Developer {
    public develop(): void {
      this.writeHtmlCode();
    }
  
    private writeHtmlCode(): void {
      // some method
    }
  }
  
  class BackendDeveloper2 implements Developer {
    public develop(): void {
      this.writeTypeScriptCode();
    }
  
    private writeTypeScriptCode(): void {
      // some method
    }
  }
  
  class SoftwareProject2 {
    public developers: Developer[];
  
    public createProject(): void {
      this.developers.forEach((developer: Developer) => {
        developer.develop();
      });
    }
  }