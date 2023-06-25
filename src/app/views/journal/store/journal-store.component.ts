import { Component, Input } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from "@angular/forms";
import { ValidationFormsService } from '../../../shared/service/validation-form.service'


interface IProject {
  name: string;
  balance: number;
}

/** passwords must match - custom validator */
export class PasswordValidators {
  static confirmPassword(control: AbstractControl): ValidationErrors | null {
    const password = control.get("password");
    const confirm = control.get("confirmPassword");
    if (password?.valid && password?.value === confirm?.value) {
      confirm?.setErrors(null);
      return null;
    }
    confirm?.setErrors({ passwordMismatch: true });
    return { passwordMismatch: true };
  }
}

@Component({
  selector: 'app-journal-store',
  templateUrl: './journal-store.component.html',
  styleUrls: ['./journal-store.component.scss'],
  providers: [ValidationFormsService]
})
export class JournalStoreComponent {
  @Input() formGroup: any;
  simpleForm!: FormGroup;
  submitted = false;
  formErrors: any;
  formControls!: string[];

  constructor(
    private formBuilder: FormBuilder,
    public validationFormsService: ValidationFormsService
  ) {
    this.formErrors = this.validationFormsService.errorMessages;
    this.createForm();
  }

  
  visible = false;
  public colors = ['primary', 'secondary', 'success', 'info', 'warning', 'danger'];
  public wallets: IProject[] = [
    {
      name: 'Yiorgos Avraamu',
      balance: 200000
    },
    {
      name: 'Yiorgos Avraamu',
      balance: 200000
    },
    {
      name: 'Yiorgos asd',
      balance: 200000
    },
    {
      name: 'Yiorgos ',
      balance: 200000
    },
  ]


  createForm() {
    this.simpleForm = this.formBuilder.group(
      {
        firstName: ["", [Validators.required]],
        lastName: ["", [Validators.required]],
        username: [
          "",
          [
            Validators.required,
            Validators.minLength(this.validationFormsService.formRules.usernameMin),
            Validators.pattern(this.validationFormsService.formRules.nonEmpty)
          ]
        ],
        email: ["", [Validators.required, Validators.email]],
        password: [
          "",
          [
            Validators.required,
            Validators.minLength(this.validationFormsService.formRules.passwordMin),
            Validators.pattern(this.validationFormsService.formRules.passwordPattern)
          ]
        ],
        confirmPassword: [
          "",
          [
            Validators.required,
            Validators.minLength(this.validationFormsService.formRules.passwordMin),
            Validators.pattern(this.validationFormsService.formRules.passwordPattern)
          ]
        ],
        accept: [false, [Validators.requiredTrue]]
      },
      { validators: [PasswordValidators.confirmPassword] }
    );
    this.formControls = Object.keys(this.simpleForm.controls);
  }

  onReset() {
    this.submitted = false;
    this.simpleForm.reset();
  }

  onValidate() {
    this.submitted = true;

    // stop here if form is invalid
    return this.simpleForm.status === "VALID";
  }

  onSubmit() {
    console.warn(this.onValidate(), this.simpleForm.value);

    if (this.onValidate()) {
      // TODO: Submit form value
      console.warn(this.simpleForm.value);
      alert("SUCCESS!");
    }
  }
 

  ngOnInit(): void {
    this.initCharts();
  }
  
  toggleCollapse(){
    this.visible = !this.visible;
  }
  initCharts(): void {
    // this.mainChart = this.chartsData.mainChart;
  }

  setTrafficPeriod(value: string): void {
    this.initCharts();
  }
}
