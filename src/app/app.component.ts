import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UsersComponent } from "./users/users.component";
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UsersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
}
