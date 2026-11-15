import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-megaworldaf',
  templateUrl: './megaworldaf.page.html',
  styleUrls: ['./megaworldaf.page.scss'],
  standalone: false,
})
export class MegaworldafPage implements OnInit {

  currentTime: string = '';
  currentDate: string = new Date().toISOString().substring(0, 10);
  today: string = new Date().toISOString().split('T')[0];

  megaworldForm: FormGroup;
  isSubmitted: boolean = false;
  formSubmitted: boolean = false;

  // Document checklist tracking
  docs: { [key: string]: boolean } = {
    form: false,
    photo: false,
    birth: false,
    income: false,
    grades: false,
    enrollment: false,
    signature: false,
  };

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private alertController: AlertController
  ) {
    this.megaworldForm = this.fb.group({
      academicYear: ['', Validators.required],
      fullName: ['', Validators.required],
      sex: ['', Validators.required],
      birthDate: ['', Validators.required],
      placeOfBirth: ['', Validators.required],
      citizenship: ['', Validators.required],
      civilStatus: ['', Validators.required],
      contactNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],

      fatherName: ['', Validators.required],
      fatherStatus: ['', Validators.required],
      fatherOccupation: [''],
      motherName: ['', Validators.required],
      motherStatus: ['', Validators.required],
      motherOccupation: [''],
      guardian: [''],
      siblings: ['', Validators.required],
      familyIncome: ['', Validators.required],

      lastSchool: ['', Validators.required],
      level: ['', Validators.required],
      schoolType: ['', Validators.required],
      partnerSchool: ['', Validators.required],
      course: ['', Validators.required],
      engineeringSpec: [''],
      gwa: ['', Validators.required],

      appliedBefore: ['', Validators.required],
      otherScholar: ['', Validators.required],
      otherScholarDetails: [''],
      employmentInterest: ['', Validators.required],

      declarationDate: [this.today, Validators.required],
      signature: [null, Validators.required],
    });
  }

  ngOnInit() {
    // Update the time every second
    this.updateTime();
    setInterval(() => this.updateTime(), 1000);
  }

  // Update time in the component
  updateTime() {
    const now = new Date();
    this.currentTime = now.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });
  }

  // Handle file input change
  onFileChange(field: keyof typeof this.docs, event: Event) {
    const input = event.target as HTMLInputElement;
    const fileSelected = !!input.files?.length;
    this.docs[field] = fileSelected;

    // Set the signature form control value if a file is selected
    if (field === 'signature') {
      this.megaworldForm.get('signature')?.setValue(
        fileSelected ? input.files?.[0] : null
      );
    }
  }

  // Submit form
  async onSubmit() {
    this.formSubmitted = true;
    this.isSubmitted = true;

    // Get all invalid controls
    const invalidControls = Object.keys(this.megaworldForm.controls).filter((key) => {
      const control = this.megaworldForm.get(key);
      return control && control.invalid && control.enabled;
    });

    // Get all missing documents
    const missingDocuments = Object.entries(this.docs)
      .filter(([_, uploaded]) => !uploaded)
      .map(([doc]) => doc);

    // Combine invalid controls and missing documents
    const allErrors = [...invalidControls, ...missingDocuments];

    // Log errors
    console.log('Invalid form fields:', invalidControls);
    console.log('Missing documents:', missingDocuments);

    // Show error message if there are errors
    if (allErrors.length > 0) {
      let errorMessage =
        'Please fill in all required fields and upload all necessary documents. ';

      if (invalidControls.length > 0) {
        errorMessage += '<br><strong>Invalid or blank fields:</strong> ';
        errorMessage += invalidControls.join(', ') + '. ';
      }

      if (missingDocuments.length > 0) {
        errorMessage += '<br><strong>Missing documents:</strong> ';
        errorMessage += missingDocuments.join(', ') + '.';
      }

      const alert = await this.alertController.create({
        header: 'Form Submission Error',
        message: errorMessage,
        buttons: ['OK'],
        cssClass: 'custom-error-alert',
      });

      await alert.present();
      return;
    }

    // If no errors, proceed with form submission
    console.log('Form is valid and ready for submission.');
    this.router.navigateByUrl('/submitted');
  }
}
