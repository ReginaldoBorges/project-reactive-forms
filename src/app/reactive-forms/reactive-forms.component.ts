import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { observeNotification } from 'rxjs/internal/Notification';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
})
export class ReactiveFormsComponent implements OnInit {
  public cadastroForm: FormGroup = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: [''],
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  public submitForm(): void {
    if(this.cadastroForm.valid) {
      console.log(this.cadastroForm.value);
      console.log(this.cadastroForm.value.firstName);
      console.log(this.cadastroForm.value.lastName);
    } else {
      alert("Exitem campos obrigatórios não informados!");
    }
  }
}
