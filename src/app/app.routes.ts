import {HomeComponent} from './home/home.component';
import {MoreComponent} from './more/more.component';
import {OthersComponent} from './others/others.component';
import {UsersComponent} from './users/users.component';
import {UserDetailsComponent} from './user-details/user-details.component';

export const appRoutes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'more',
    component: MoreComponent
  },
  {
    path: 'others',
    component: OthersComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'users/:id',
    component: UserDetailsComponent
  },
  {
    path: '**',
    component: HomeComponent
  }
];
