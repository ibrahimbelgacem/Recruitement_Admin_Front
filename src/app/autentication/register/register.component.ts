import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/models/user';
import { AuthService } from './../../shared/services/auth/auth.service';

@Component({
  selector: 'ngx-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user:User;
  constructor(private authService: AuthService) {
    this.user = new User()
  }

  ngOnInit() {
  }

  register(){
    this.authService.register(this.user).subscribe(data => {
      console.log(data);
    })
  }
}
