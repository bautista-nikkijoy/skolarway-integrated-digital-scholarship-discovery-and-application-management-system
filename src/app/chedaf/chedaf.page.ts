import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-chedaf',
  templateUrl: './chedaf.page.html',
  styleUrls: ['./chedaf.page.scss'],
  standalone: false,
})
export class ChedafPage implements OnInit {
  currentTime: string = '';
  currentDate: string = new Date().toISOString().substring(0, 10);  
  today: string = new Date().toISOString().substring(0, 10);  

  scholarshipForm: FormGroup;
  checklist = {
    grades: false,
    moral: false,
    income: false,
    birth: false,
    photo: false,
    form: false,
    signature: false,
  };
  isSubmitted: boolean = false;
  formSubmitted: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private alertController: AlertController
  ) {
    this.scholarshipForm = this.fb.group({
      fullName: ['', Validators.required],
      sex: ['', Validators.required],
      birthDate: ['', Validators.required],
      placeOfBirth: ['', Validators.required],
      civilStatus: ['', Validators.required],
      contactNumber: ['', Validators.required],
      emailAddress: ['', [Validators.required, Validators.email]],
      homeAddress: ['', Validators.required],
      fatherName: ['', Validators.required],
      fatherOccupation: ['', Validators.required],
      motherName: ['', Validators.required],
      motherOccupation: ['', Validators.required],
      combinedIncome: ['', Validators.required],
      seniorHighSchool: ['', Validators.required],
      schoolAddress: ['', Validators.required],
      gwa: ['', [Validators.required, Validators.min(60), Validators.max(100)]],
      fullMerit: [false],
      halfMerit: [false],
      yearGraduated: ['', Validators.required],
      awardsReceived: [''],
      heiName: ['', Validators.required],
      course: ['', Validators.required],
      heiType: ['', Validators.required],
      isChedRecognized: ['', Validators.required],
      applicantSignature: [null, Validators.required],
      declarationDate: [this.today],
    });
  }

  ngOnInit() {
    this.updateTime();
    setInterval(() => this.updateTime(), 1000);
    this.watchGradeChange();
  }

  updateTime() {
    const now = new Date();
    this.currentTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  onFileChange(field: keyof typeof this.checklist, event: Event) {
    const input = event.target as HTMLInputElement;
    const fileSelected = !!input.files?.length;
    this.checklist[field] = fileSelected;

    if (field === 'signature') {
      const control = this.scholarshipForm.get('applicantSignature');
      if (fileSelected) {
        control?.setValue(input.files?.[0]);  // Set the file as the form value
        control?.markAsTouched(); // Mark the control as touched
      } else {
        control?.setValue(null);  // Clear the value if no file is selected
      }
    }
  }

  async onSubmit() {
    this.formSubmitted = true;
    this.isSubmitted = true;
  
    // Gather all the invalid fields
    const invalidControls = Object.keys(this.scholarshipForm.controls).filter(key => {
      const control = this.scholarshipForm.get(key);
      return control && control.invalid && control.enabled;
    });
  
    const missingDocuments = [];
    // Check for missing documents based on the checklist
    for (const [key, value] of Object.entries(this.checklist)) {
      if (!value) {
        missingDocuments.push(key);
      }
    }
  
    // Combine the invalid fields and missing documents into one array
    const allErrors = [...invalidControls, ...missingDocuments];
  
    console.log('Invalid form fields:', invalidControls);
    console.log('Missing documents:', missingDocuments);
  
    if (allErrors.length > 0) {
      // Generate a custom error message
      let errorMessage = 'Please fill in all required fields and upload all necessary documents before submitting.   ';
      if (invalidControls.length > 0) {
        errorMessage += `  The following fields are invalid or blank:  `;
        invalidControls.forEach(field => {
          errorMessage += ` ${field},`;
        });
        errorMessage += ` `;
      }
  
      if (missingDocuments.length > 0) {
        errorMessage += `  Missing documents:  `;
        missingDocuments.forEach(doc => {
          errorMessage += ` ${doc},`;
        });
        errorMessage += ` `;
      }
  
      // Create an alert with the customized message and apply the custom CSS class for styling
      const alert = await this.alertController.create({
        header: 'Form Submission Error',
        message: errorMessage,
        buttons: ['OK'],
        cssClass: 'custom-error-alert',  // Apply custom CSS class
      });
  
      await alert.present();
      return;
    }
  
    console.log('Form is valid and ready for submission.');
    this.router.navigate(['/submitted']);
  }
  
  
  watchGradeChange() {
    this.scholarshipForm.get('gwa')?.valueChanges.subscribe((gwa: number) => {
      const fullMeritCtrl = this.scholarshipForm.get('fullMerit');
      const halfMeritCtrl = this.scholarshipForm.get('halfMerit');

      // Set merit types based on GWA values
      if (gwa >= 96) {
        fullMeritCtrl?.setValue(true, { emitEvent: false });
        halfMeritCtrl?.setValue(false, { emitEvent: false });
        console.log('GWA qualifies for FULL MERIT');
      } else if (gwa >= 93) {
        fullMeritCtrl?.setValue(false, { emitEvent: false });
        halfMeritCtrl?.setValue(true, { emitEvent: false });
        console.log('GWA qualifies for HALF MERIT');
      } else {
        fullMeritCtrl?.setValue(false, { emitEvent: false });
        halfMeritCtrl?.setValue(false, { emitEvent: false });
        console.log('GWA does not qualify for merit');
      }
    });
  }
}
