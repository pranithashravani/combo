import { Component, OnInit } from '@angular/core';
import {User} from "app/user";
import {DetailsService} from "app/details.service";
import {MatTableDataSource} from "@angular/material/table";
import {Router} from "@angular/router";

@Component({
  selector: 'jhi-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'age','emailId','address','edit','delete'];
  dataSource: MatTableDataSource<User>;

  constructor(private service: DetailsService,
              private router:Router) { }

  ngOnInit() {
    this.getData();

  }
  getData()
  {
    this.service.getData()
      .subscribe(displayUser => {
        this.dataSource = new MatTableDataSource<User>(displayUser);
      });
  }

  delete(id)
  {
    this.service.delete(id).subscribe(deletUser=>{
      this.dataSource=new MatTableDataSource<User>(deletUser);
    });
  }
  // create()
  // {
  //
  // }



}
