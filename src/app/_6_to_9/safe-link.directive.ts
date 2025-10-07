//#region  Class #6   (6. Getting Started with Custom Directives)
// import { Directive, isStandalone } from "@angular/core";

// @Directive({
//     selector:'a[appSafeLink]',
//     standalone:true,
// })
// export class SafeLinkDirective{
//     constructor (){
//         console.log("Safe Link Directive");
//         console.log("Safe Link Directive");
//         console.log("Safe Link Directive");
//         console.log("Safe Link Directive");
//     }
// }
//#endregion

//#region  Class #7   7. Using Attribute Directives To Change Element Behavior
import { Directive, isStandalone } from '@angular/core';

@Directive({
  selector: 'a[appSafeLink]',
  standalone: true,
  host: {
    '(click)': 'onConfirmLeavePage($event)',
  },
})
export class SafeLinkDirective {
  constructor() {
    console.log('Safe Link Directive');
  }

  onConfirmLeavePage(event: MouseEvent) {
    // ----- 1st Way -----
    // const wantsToLeave = window.confirm("Do you want to leave the app")
    // if(wantsToLeave){
    //     return
    // }
    // event?.preventDefault();

    // ----- 2nd way -----
    const wantsToLeave = window.confirm('Do you want to leave the app');
    if (wantsToLeave) {
      const target = event.currentTarget as HTMLAnchorElement;
      if (target && target.href) {
        window.open(target.href, '_blank'); // 👈 Opens in a new tab
      }
    }
    event?.preventDefault();
  }
}
//#endregion
