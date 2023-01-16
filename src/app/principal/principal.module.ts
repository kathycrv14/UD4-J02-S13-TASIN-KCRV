import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatabFormRegistroComponent } from './datab-form-registro/datab-form-registro.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DatabFormRegistroComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    DatabFormRegistroComponent
  ],
})
export class PrincipalModule { }
