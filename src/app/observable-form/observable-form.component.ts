import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
  FormArray,
} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-observable-form',
  templateUrl: './observable-form.component.html',
  styleUrls: ['./observable-form.component.scss'],
})
export class ObservableFormComponent implements OnInit {



  title = 'angular-observable-form';
  registerForm={} as FormGroup;
  submitted = false;



  constructor(public fb: FormBuilder) { }

  // pinForm:fb.array(
  //   [this.registerForm()],
  //   [Validators.required,Validators.maxLength(1)]
  // )

  // cpc(){
  //   return this.fb.group
  //   (
  //     {

  //       password: ['', [Validators.required, Validators.maxLength(1)]],
  //       confirmPassword: ['', [Validators.required, Validators.maxLength(1)]],

  //       password2: ['', [Validators.required, Validators.maxLength(1)]],
  //       confirmPassword2: ['', [Validators.required, Validators.maxLength(1)]],

  //       password3: ['', [Validators.required, Validators.maxLength(1)]],
  //       confirmPassword3: ['', [Validators.required, Validators.maxLength(1)]],

  //       password4: ['', [Validators.required, Validators.maxLength(1)]],
  //       confirmPassword4: ['', [Validators.required, Validators.maxLength(1)] ],

  //      },
  //    );
  // }

  pword(){
    return this.fb.group
    ({
        password: ['', [Validators.required, Validators.maxLength(1)]],
        password2: ['', [Validators.required, Validators.maxLength(1)]],
        password3: ['', [Validators.required, Validators.maxLength(1)]],
        password4: ['', [Validators.required, Validators.maxLength(1)]],
       });
  }


  confirmedpword(){
    return this.fb.group
    ({
        confirmPassword: ['', [Validators.required, Validators.maxLength(1)]],
        confirmPassword2: ['', [Validators.required, Validators.maxLength(1)]],
        confirmPassword3: ['', [Validators.required, Validators.maxLength(1)]],
        confirmPassword4: ['', [Validators.required, Validators.maxLength(1)] ],
      });
  }

  ngOnInit() {

    this.registerForm=this.fb.group({
      pins: this.fb.array(
        [this.pword(),this.confirmedpword()],
      )
    })
  }

  get rf() {
    return this.registerForm.controls;
  }

  get pins() {
    return this.registerForm.get('pins') as FormArray;
  }

  matchPin(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.matchPin) {

        return;
      }


      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ matchPin: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }

  onSubmit() {
      this.submitted = true;
      if (this.registerForm.invalid)  {
        return;
      }
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value));
  }


  }



