import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {DataService} from '../common/data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'jo-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users$: Observable<any>;

  constructor(private router: Router,
              private service: DataService) { }

  ngOnInit() {

    this.users$ = this.service.findAll();
  }

}
