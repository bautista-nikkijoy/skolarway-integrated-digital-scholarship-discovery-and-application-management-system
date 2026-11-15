import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-laverdadaf',
  templateUrl: './laverdadaf.page.html',
  styleUrls: ['./laverdadaf.page.scss'],
  standalone: false,
})
export class LaverdadafPage implements OnInit {

  currentTime: string = '';
  currentDate: string = new Date().toISOString().substring(0, 10);  
  today: string = new Date().toISOString().substring(0, 10);  

  scholarshipForm: FormGroup;
  docs = {
    applicationForm: false,
    schoolRecords: false,
    identityProof: false,
    idPhoto: false,
    signature: false,  // Add this line
  };
  isSubmitted: boolean = false;
  formSubmitted: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private alertController: AlertController
  ) {
    this.scholarshipForm = this.fb.group({
      academicYear: ['', Validators.required],
      fullName: ['', Validators.required],
      birthDate: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(18)]],
      sex: ['', Validators.required],
      citizenship: ['', Validators.required],
      contactNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      educationLevel: ['', Validators.required],
      gradeLevel: ['', Validators.required],
      lastSchoolAttended: ['', Validators.required],
      schoolYearAttended: ['', Validators.required],
      gwa: ['', [Validators.required, Validators.min(0)]],
      previouslyApplied: ['', Validators.required],
      previousApplicationDate: [''],
      sourceOfInfo: ['', Validators.required],
      otherSource: [''],
      checklist: this.fb.group({
        applicationForm: [false, Validators.requiredTrue],
        schoolRecords: [false, Validators.requiredTrue],
        identityProof: [false, Validators.requiredTrue],
        idPhoto: [false, Validators.requiredTrue],
        signature: [false, Validators.requiredTrue],
      }),
      commitmentDate: [new Date().toISOString().substring(0, 10)],
    });
  }

  ngOnInit() {
    this.updateTime();
    setInterval(() => this.updateTime(), 1000);
  }

  updateTime() {
    const now = new Date();
    this.currentTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  onFileChange(field: keyof typeof this.docs, event: Event) {
    const input = event.target as HTMLInputElement;
    const fileSelected = !!input.files?.length;
    this.docs[field] = fileSelected; // Update the checklist status

    // Mark each file field as present or absent based on whether the file is selected
    if (fileSelected) {
      this.scholarshipForm.get('checklist.' + field)?.setValue(true);
    } else {
      this.scholarshipForm.get('checklist.' + field)?.setValue(false);
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
    for (const [key, value] of Object.entries(this.docs)) {
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
    this.router.navigateByUrl('/submitted');
  }
}
