import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { UtilsService } from './shared/services/utils.service';

@Component({
  selector: 'app-root',
  standalone: true,
  providers: [UtilsService],
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'angular-testing-course';
}
