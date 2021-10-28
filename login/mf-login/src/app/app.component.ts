import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'mf-login',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private router: Router) { }

    ngOnInit = (): void => { this.initializeValues() }

    initializeValues() {}

    onLogin(){
      this.router.navigate([`mf-main`]);
    }

}
