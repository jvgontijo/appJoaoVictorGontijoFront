import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  users: any[] = [];
  displayedColumns: string[] = ['id', 'name', 'age', 'email'];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.apiService.getList('users').subscribe(data => {
      this.users = data;
    });
  }
}
