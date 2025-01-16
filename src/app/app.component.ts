import { Component } from '@angular/core';
import { SurveyComponent } from './survey/survey.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SurveyComponent],
  templateUrl: 'app.component.html',
})
export class AppComponent {
  message: string = 'Messages';
}
