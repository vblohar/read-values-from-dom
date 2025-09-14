import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: 'app-reactive-forms-form-control-form-group',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './reactive-forms-form-control-form-group.html',
  styleUrl: './reactive-forms-form-control-form-group.css'
})
export class ReactiveFormsFormControlFormGroup implements OnInit {

myForm = new FormGroup({
  city: new FormControl('')
});

cityName: string = '';

ngOnInit() {
  console.log(this.myForm.value);
}

onSubmit(){
  console.log(this.myForm.value.city);
  this.cityName = this.myForm.get('city')?.value ?? '';
}

}
