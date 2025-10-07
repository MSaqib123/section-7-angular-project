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
// import { Directive, isStandalone } from '@angular/core';

// @Directive({
//   selector: 'a[appSafeLink]',
//   standalone: true,
//   host: {
//     '(click)': 'onConfirmLeavePage($event)',
//   },
// })
// export class SafeLinkDirective {
//   constructor() {
//     console.log('Safe Link Directive');
//   }

//   onConfirmLeavePage(event: MouseEvent) {
//     // ----- 1st Way -----
//     // const wantsToLeave = window.confirm("Do you want to leave the app")
//     // if(wantsToLeave){
//     //     return
//     // }
//     // event?.preventDefault();

//     // ----- 2nd way -----
//     const wantsToLeave = window.confirm('Do you want to leave the app');
//     if (wantsToLeave) {
//       const target = event.currentTarget as HTMLAnchorElement;
//       if (target && target.href) {
//         window.open(target.href, '_blank'); // 👈 Opens in a new tab
//       }
//     }
//     event?.preventDefault();
//   }
// }
//#endregion

//#region  Class #8   8. Working with Inputs in Custom Directives
// import { Directive, input, isStandalone } from '@angular/core';

// @Directive({
//   selector: 'a[appSafeLink]',
//   standalone: true,
//   host: {
//     '(click)': 'onConfirmLeavePage($event)',
//   },
// })
// export class SafeLinkDirective {
//     // queryParam = input('myapp');
//     queryParam = input('myapp',{alias:'appSafeLink'});

//   constructor() {
//     console.log('Safe Link Directive');
//   }

//   onConfirmLeavePage(event: MouseEvent) {
//     const wantsToLeave = window.confirm('Do you want to leave the app');
//     if (wantsToLeave) {
//       //======= 1st way ========
//       //   const address = (event.target as HTMLAnchorElement).href;
//       //   (event.target as HTMLAnchorElement).href = address + "?from=myapp";

//       //======= 1st way ========
//         const address = (event.target as HTMLAnchorElement).href;
//         (event.target as HTMLAnchorElement).href = address + "?from=" + this.queryParam();

//       return;
//     }
//     event?.preventDefault();
//   }
// }
//#endregion

//#region  Class #9   9. Directives & Dependency Injection
import {
  Directive,
  ElementRef,
  inject,
  input,
  isStandalone,
} from '@angular/core';

@Directive({
  selector: 'a[appSafeLink]',
  standalone: true,
  host: {
    '(click)': 'onConfirmLeavePage($event)',
  },
})
export class SafeLinkDirective {
  queryParam = input('myapp', { alias: 'appSafeLink' });
  private hostElementRef = inject<ElementRef<HTMLAnchorElement>>(ElementRef);

  constructor() {
    console.log('Safe Link Directive');
  }

  onConfirmLeavePage(event: MouseEvent) {
    const wantsToLeave = window.confirm('Do you want to leave the app');
    if (wantsToLeave) {
      const address = this.hostElementRef.nativeElement.href;
      this.hostElementRef.nativeElement.href =
        address + '?from=' + this.queryParam();
      if (address && this.hostElementRef.nativeElement.href) {
        window.open(this.hostElementRef.nativeElement.href, '_blank'); // 👈 Opens in a new tab
      }
    }
    event?.preventDefault();
  }
}
//#endregion
