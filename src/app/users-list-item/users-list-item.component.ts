import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'jo-users-list-item',
  templateUrl: './users-list-item.component.html',
  styleUrls: ['./users-list-item.component.css']
})
export class UsersListItemComponent {

  @Input('user') user: any;
  @Output('selected') selected = new EventEmitter<any>();

  onSelect(user) {
    this.selected.emit(user);
  }
}
