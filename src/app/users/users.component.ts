import { Component, computed, Input, input } from '@angular/core';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;
// avatar = input.required<string>();
// name = input.required<string>(); 

// imagePath = computed(() => {
//   return 'assets/users/' + this.avatar();
// });

  get imagePath() {
    return 'assets/users/' + this.avatar;
  }

  onSelectUser() {
    
  }
}

