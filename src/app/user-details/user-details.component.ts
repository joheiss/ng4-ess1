import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {DataService} from '../common/data.service';

@Component({
  selector: 'jo-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  @Input('user') user;

  form: FormGroup;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private service: DataService,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.route.paramMap
      .switchMap(params => {
        const key = `users/${params['id']}`;
        return this.service.findById(key);

      })
      .do(console.log)
      .subscribe(user => {
        this.user = user;
        this.form = this.fb.group({
          id: [''],
          firstName: [''],
          lastName: ['']
        });
        this.form.setValue(this.user);
      });
  }

  onBack() {
    this.router.navigate(['/users']);
  }

}
