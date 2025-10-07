//#region  Class #6   (6. Getting Started with Custom Directives)
import { Directive, isStandalone } from "@angular/core";

@Directive({
    selector:'a[appSafeLink]',
    standalone:true,
})
export class SafeLinkDirective{
    constructor (){
        console.log("Safe Link Directive");
        console.log("Safe Link Directive");
        console.log("Safe Link Directive");
        console.log("Safe Link Directive");
    }
}
//#endregion