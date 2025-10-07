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
  dummyTrafficData = [
    {
      id: 'd1',
      value: 433,
    },
    {
      id: 'd2',
      value: 260,
    },
    {
      id: 'd3',
      value: 290,
    },
    {
      id: 'd4',
      value: 410,
    },
    {
      id: 'd5',
      value: 397,
    },
    {
      id: 'd6',
      value: 488,
    },
    {
      id: 'd47',
      value: 589,
    },
  ];
  maxTraffic = Math.max(...this.dummyTrafficData.map((data) => data.value));
  currentStatus = 'online';
}
