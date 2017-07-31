import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';
import {AngularFireModule} from 'angularfire2';

import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {MoreComponent} from './more/more.component';
import {OthersComponent} from './others/others.component';

import {appRoutes} from './app.routes';
import {DataService} from './common/data.service';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {UsersComponent} from './users/users.component';
import {UsersListComponent} from './users-list/users-list.component';
import {UsersListItemComponent} from './users-list-item/users-list-item.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import {ReactiveFormsModule} from '@angular/forms';

export const firebaseConfig = {
  apiKey: 'AIzaSyDx4K_UYl4byHAfqqEHvb1EoL3e3FnM0b0',
  authDomain: 'ng4-ess.firebaseapp.com',
  databaseURL: 'https://ng4-ess.firebaseio.com',
  storageBucket: 'ng4-ess.appspot.com',
  messagingSenderId: '821962530838'
};

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    MoreComponent,
    OthersComponent,
    UsersComponent,
    UsersListComponent,
    UsersListItemComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    // AngularFireModule.initializeApp(firebaseConfig)
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyDx4K_UYl4byHAfqqEHvb1EoL3e3FnM0b0',
      authDomain: 'ng4-ess.firebaseapp.com',
      databaseURL: 'https://ng4-ess.firebaseio.com',
      storageBucket: 'ng4-ess.appspot.com',
      messagingSenderId: '821962530838'
    }),
    AngularFireDatabaseModule
  ],
  providers: [
    { provide: LOCALE_ID,
      useValue: 'de-DE'
    },
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
