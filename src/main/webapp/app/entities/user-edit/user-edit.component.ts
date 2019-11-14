import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DetailsService} from "app/details.service";
// import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'jhi-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {
  id = this.actRoute.snapshot.params['id'];
  userData: any = {};

  constructor(public router:Router, private service: DetailsService,public actRoute: ActivatedRoute,
              ) {

  }

  ngOnInit() {
    this.service.getDataById(this.id).subscribe(data => {
      this.userData = data;
    })
  }
  editData()
  {
    this.service.edit(this.id,this.userData).subscribe();
    this.router.navigate(['/user']);
  }
}
