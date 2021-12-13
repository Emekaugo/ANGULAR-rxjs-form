import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogService } from './dialog/dialog.service';
import { ExampleComponent } from './example/example.component';
import { Person } from './person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // title = 'angular-observable-form';
  // pinForm!: FormGroup;
  // submitted = false;
  // numberOfInputs = 4;
  // usersCreateForm!: FormGroup;
  // approval = false;
  // regTypeSelectedOption: string = '';
  // selectedNav: any;
  // navs = ['option 1', 'option 2', 'option 3'];
  // ngOnInit() {
  // this.selectedNav = 'select value';
  // }
  // setNav(nav: any) {
  //   this.selectedNav = nav;
  //   if (this.selectedNav == 'option 1') {
  //     this.regTypeSelectedOption = 'option 1';
  //   } else if (this.selectedNav == 'option 2') {
  //     this.regTypeSelectedOption = 'option 2';
  //   } else if (this.selectedNav == 'option 3') {
  //     this.regTypeSelectedOption = 'option 3';
  //   }
  // }
  // constructor(private fb: FormBuilder) {}
  // get pinsInputs() {
  //   return this.pinForm?.get('pins') as FormArray;
  // }
  // get confirmpinsInputs() {
  //   return this.pinForm?.get('confirmpins') as FormArray;
  // }
  // ngOnInit() {
  // this.pinForm = this.fb.group({
  //   password: ['', [Validators.required, Validators.minLength(1)]],
  //   confirmPassword: ['', Validators.required],
  //   password2: ['', [Validators.required, Validators.minLength(1)]],
  //   confirmPassword2: ['', Validators.required],
  // },
  // {
  //   Validator: this.MustMatch('password', 'confirmPassword'),
  //   Validator: this.MustMatch('password2', 'confirmPassword2'),
  // }
  // );
  // this.pinForm = this.fb.group(
  //   {
  //     pins: this.fb.array([...this.buildFormGroup()]),
  //     confirmpins: this.fb.array(this.buildFormGroup()),
  //   },
  //   { validator: this.MustMatch }
  // );
  // this.createForm();
  // }
  // buildFormGroup() {
  // const formGroup= this.fb.group({
  //     input: ['', [Validators.required, Validators.maxLength(1)]],
  // });
  // return Array(this.numberOfInputs)
  //   .fill(0)
  //   .map((_, i) => {
  //     const formGroup = this.fb.group({});
  //     formGroup.addControl(
  //       i.toString(),
  //       new FormControl('', [Validators.required, Validators.maxLength(1)])
  //     );
  //     return formGroup;
  //   });
  // }
  // MustMatch(formGroup: FormGroup) {
  //   const pins: any[] = (formGroup.get('pins') as FormArray).value;
  //   const confirmpins: any[] = (formGroup.get('confirmpins') as FormArray)
  //     .value;
  //   //  const passwordValue = password?.reduce(((previous,current)=>`${Object.values(previous)}${Object.values(current)}`), '')
  //   let pinsValue = '';
  //   pins?.forEach((element, i) => {
  //     pinsValue += element[i].toString();
  //   });
  //   let confirmpinsValue = '';
  //   confirmpins?.forEach((element, i) => {
  //     confirmpinsValue += element[i].toString();
  //   });
  //   console.log('pinsValue', pinsValue);
  //   console.log('confirmpinsValue', confirmpinsValue);
  //   return pinsValue == confirmpinsValue ? null : { notMatch: true };
  // }
  // get rf() {
  //   return this.pinForm.controls;
  // }
  // onSubmit() {
  //   this.submitted = true;
  //   // stop here if form is invalid
  //   if (this.pinForm.invalid) {
  //     return;
  //   }
  //   alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.pinForm.value));
  // }
  // createForm() {
  //   return (this.usersCreateForm = this.fb.group({
  //     fullName: ['', Validators.required],
  //     email: ['', Validators.required, Validators.email],
  //     phoneNumber: ['', Validators.required],
  //     nin: ['', Validators.required],
  //     role: ['', Validators.required],
  //   }));
  // }
  // tslint:disable-next-line:typedef
  // sendRequest() {
  //   this.approval = true;
  //   if (this.usersCreateForm.invalid) {
  //     return;
  //   }
  // }
  /////////////////////////////////////////////////////////////////////////////////////////
  // constructor(public dialog: DialogService) {
  //   this.dialog.open(ExampleComponent);
  // }
}
