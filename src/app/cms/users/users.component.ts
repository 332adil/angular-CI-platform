import { Component } from '@angular/core';
import { Users } from './users.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  displayedColumns: string[] = ['demo-firstname', 'demo-lastname', 'demo-email', 'demo-empid','demo-dept','demo-status','demo-action'];
  userList : Users[] = [];
  color = 'rgb(223, 223, 222)';

  constructor(){
    for(let i of [1,2,3,4,5,6,7]){
      let user = new Users();
      user.FirstName ='Adil';
      user.LastName = 'Mathakiya';
      user.Email = 'mathakiyaadil332@gmail.com';
      user.employee_id = '1364978455';
      user.department = 'HR';
      user.Status = 1;
      this.userList.push(user);
    }
  }
}
