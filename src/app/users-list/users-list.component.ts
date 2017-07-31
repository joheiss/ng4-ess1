import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'jo-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  @Input('users') users$;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSelected(user) {
    this.router.navigate(['users', user.$key]);
  }

}
