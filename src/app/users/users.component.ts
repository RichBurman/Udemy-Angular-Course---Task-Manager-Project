import { Component, computed, EventEmitter, Input, input, Output, output } from '@angular/core';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  @Input({ required: true }) user!: {
    id: string;
    avatar: string;
    name: string;
  }
  // @Input({ required: true }) id!: string
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;
  @Output() select = new EventEmitter<string>();
  // select = output<string>();
  // avatar = input.required<string>();
  // name = input.required<string>(); 

  // imagePath = computed(() => {
  //   return 'assets/users/' + this.avatar();
  // });

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}

