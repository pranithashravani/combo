import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {MatTableDataSource} from "@angular/material/table";
import {User} from "app/user";
import {DetailsService} from "app/details.service";
import {Router} from "@angular/router";

@Component({
  selector: 'jhi-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit {
  registrationForm = new FormGroup({
    id: new FormControl(' '),
    name: new FormControl(' '),
    age: new FormControl(''),
    emailId: new FormControl(' '),
    address: new FormControl(' ')


  });
  dataSource: MatTableDataSource<User>;

 @Input() Userdata={id:' ',name:' ',age:' ',emailId:' ',address:' '}
  constructor(public router:Router, private service: DetailsService
  ) { }

  ngOnInit() {

  }

  addData(value)
  {
    this.service.add(value).subscribe();
    this.router.navigate(['/user']);
    }


}
