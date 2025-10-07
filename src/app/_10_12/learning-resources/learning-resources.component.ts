import { Component } from '@angular/core';
import {SafeLinkDirective } from '../safe-link.directive'
@Component({
  imports:[SafeLinkDirective],
  selector: 'app-learning-resources',
  templateUrl: './learning-resources.component.html',
  styleUrl: './learning-resources.component.css',
  standalone: true,
})
export class LearningResourcesComponent {}
