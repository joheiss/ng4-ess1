import { Injectable } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import 'rxjs/add/operator/do';

@Injectable()
export class DataService {

  constructor(private db: AngularFireDatabase) { }

  findAll() {

    return this.db.list('users')
      .do(console.log);
  }

  findById(id) {
    return this.db.object(id)
      .do(console.log);
  }

}
