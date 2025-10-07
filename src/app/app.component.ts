//=================================================
// ====================== _1_to_5 ==================
//=================================================
//#region 

// import { Component, computed, inject } from '@angular/core';
// import { LearningResourcesComponent } from "./_1_to_5/learning-resources/learning-resources.component";
// import { AuthComponent } from "./_1_to_5/auth/auth.component";
// import { AuthService } from './_1_to_5/auth/auth.service';
// import { NgFor, NgIf } from '@angular/common';

// @Component({
//   selector: 'app-root',
//   imports: [ LearningResourcesComponent, AuthComponent, NgIf, NgFor],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })
// export class AppComponent {
//   private authService = inject(AuthService);

//   isAdmin = computed(()=> this.authService.activePermission() === 'admin');

//   employees = [
//     { name: 'Ali', role: 'Developer' },
//     { name: 'Sara', role: 'Designer' },
//     { name: 'Ahmed', role: 'Tester' },
//     { name: 'Zara', role: 'Manager' }
//   ];
// }

//#endregion





//=================================================
// ====================== _6_to_9 ==================
//=================================================
//#region 

// import { Component, computed, inject } from '@angular/core';
// import { LearningResourcesComponent } from "./_6_to_9/learning-resources/learning-resources.component";
// import { AuthComponent } from "./_6_to_9/auth/auth.component";
// import { AuthService } from './_6_to_9/auth/auth.service';
// import { NgFor, NgIf } from '@angular/common';

// @Component({
//   selector: 'app-root',
//   imports: [ LearningResourcesComponent, AuthComponent, NgIf, NgFor],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })
// export class AppComponent {
//   private authService = inject(AuthService);

//   isAdmin = computed(()=> this.authService.activePermission() === 'admin');

//   employees = [
//     { name: 'Ali', role: 'Developer' },
//     { name: 'Sara', role: 'Designer' },
//     { name: 'Ahmed', role: 'Tester' },
//     { name: 'Zara', role: 'Manager' }
//   ];
// }

//#endregion





//=================================================
// ====================== _10_to_12 ==================
//=================================================
//#region 

import { Component, computed, inject } from '@angular/core';
import { LearningResourcesComponent } from "./_10_12/learning-resources/learning-resources.component";
import { AuthComponent } from "./_10_12/auth/auth.component";
import { AuthService } from './_10_12/auth/auth.service';
import { NgFor, NgIf } from '@angular/common';
import { AuthDirective } from './_10_12/auth/auth.directive';

@Component({
  selector: 'app-root',
  imports: [ LearningResourcesComponent, AuthComponent, NgIf, NgFor,AuthDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  private authService = inject(AuthService);

  isAdmin = computed(()=> this.authService.activePermission() === 'admin');

  employees = [
    { name: 'Ali', role: 'Developer' },
    { name: 'Sara', role: 'Designer' },
    { name: 'Ahmed', role: 'Tester' },
    { name: 'Zara', role: 'Manager' }
  ];
}

//#endregion


