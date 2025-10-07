// #region 10. Building Another Directive

// import { Directive, effect, inject, input } from '@angular/core';
// import { Permission } from './auth.model';
// import { AuthService } from './auth.service';

// @Directive({
//   selector: '[appAuth]'
// })
// export class AuthDirective {
//   userType = input.required<Permission>({alias:'appAuth'});
//   private  authService = inject(AuthService);

//   constructor() { 
//     effect(() => {
//       if(this.authService.activePermission() === this.userType()){
//         console.log('Show element');
//       }
//       else{
//         console.log("Remove element");
//       }
//     })
//   }

// }

// #endregion



// #region 11. Building a Custom Structural Directive

import { Directive, effect, inject, input, TemplateRef, ViewContainerRef } from '@angular/core';
import { Permission } from './auth.model';
import { AuthService } from './auth.service';

@Directive({
  selector: '[appAuth]'
})
export class AuthDirective {
  userType = input.required<Permission>({alias:'appAuth'});
  private  authService = inject(AuthService);

  private templateRef = inject(TemplateRef);
  private viewContainerRef = inject(ViewContainerRef);
  constructor() { 
    effect(() => {
      if(this.authService.activePermission() === this.userType()){
        // console.log('Show element');
        this.viewContainerRef.createEmbeddedView(this.templateRef);
      }
      else{
        //console.log("Remove element");
        this.viewContainerRef.clear();
      }
    })
  }
}

// #endregion
