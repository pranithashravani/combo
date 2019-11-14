import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { UserlistComponent } from './userlist/userlist.component';
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from '@angular/material';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import { UserAddComponent } from './user-add/user-add.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { UserEditComponent } from './user-edit/user-edit.component';


@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'user',
        component: UserlistComponent
      },
      {
        path:'newuser',
        component:UserAddComponent
      },
      {
        path:'edituser/:{id}',
        component:UserEditComponent
      }

      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
    FormsModule,
    MatTableModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    BrowserModule
  ],
  declarations: [UserlistComponent, UserAddComponent, UserEditComponent]
})
export class ComboEntityModule {}
