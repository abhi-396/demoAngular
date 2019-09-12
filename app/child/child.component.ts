import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import {FormBuilder, Validators} from '@angular/forms'

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  myFormGroup: any;
  table_json = [];
  show_table = false; 
  constructor(private fb: FormBuilder) {
    this.myFormGroup = this.fb.group({
      Name: ['', Validators.required],
      Age: [null, [Validators.required, Validators.pattern('^[0-9]*')]],
      Phone: [null, [Validators.required, Validators.minLength(10), Validators.pattern('^[0-9]*')]]
    })
   }

  ngOnInit() {}

  onSubmit(form_group: any) {
      this.show_table = true;
      this.table_json.push(form_group.value)
  }
}
