import { Component, computed, EventEmitter, Input, input, Output, output } from '@angular/core';

// type User = {
//     id: string;
//     avatar: string;
//     name: string;
//   }

interface User {
  id: string;
  avatar: string;
  name: string;
}

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  @Input({ required: true }) user!: User; 
  @Output() select = new EventEmitter<string>();


  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}

