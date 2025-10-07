//=================================================
// ====================== _1_to_5 ==================
//=================================================
//#region 

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LearningResourcesComponent } from "./_1_to_5/learning-resources/learning-resources.component";
import { AuthComponent } from "./_1_to_5/auth/auth.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LearningResourcesComponent, AuthComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}

//#endregion
