import { Component } from '@angular/core';
import {ForComponent} from "./components/for/for.component";
import {SwitchComponent} from "./components/switch/switch.component";
import {IfComponent} from "./components/if/if.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    ForComponent,
    SwitchComponent,
    IfComponent
  ],
  standalone: true
})
export class AppComponent {
  title = 'angular17';
}
