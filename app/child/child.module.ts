import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent } from './child.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ChildComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  bootstrap: [ChildComponent]
})
export class ChildModule {}
