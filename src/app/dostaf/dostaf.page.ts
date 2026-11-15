import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-dostaf',
  templateUrl: './dostaf.page.html',
  styleUrls: ['./dostaf.page.scss'],
  standalone: false,
})
export class DostafPage implements OnInit {

  currentTime: string = '';
  currentDate: string = new Date().toISOString().substring(0, 10);  
  today: string = new Date().toISOString().substring(0, 10);  

  scholarshipForm: FormGroup;
  checklist = {
    grades: false,
    income: false,
    birth: false,
    photo: false,
    form: false,
    signature: false,
    health: false,
    principal: false,
    moral: false,
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
      citizenship: ['', Validators.required],
      civilStatus: ['', Validators.required],
      contactNumber: ['', Validators.required],
      emailAddress: ['', [Validators.required, Validators.email]],
      homeAddress: ['', Validators.required],
      region: ['', Validators.required],
      livingArrangement: ['', Validators.required],
      fatherName: ['', Validators.required],
      fatherStatus: ['', Validators.required],
      motherName: ['', Validators.required],
      motherStatus: ['', Validators.required],
      guardian: [''],
      combinedIncome: ['', Validators.required],
      proofOfIncome: ['', Validators.required],
      isRA7687: ['', Validators.required],
      seniorHighSchool: ['', Validators.required],
      schoolAddress: ['', Validators.required],
      schoolType: ['', Validators.required],
      strand: ['', Validators.required],
      ranking: ['', Validators.required],
      yearGraduated: ['', Validators.required],
      gwa: ['', [Validators.required, Validators.min(60), Validators.max(100)]],
      awardsReceived: [''],
      scholarshipType: ['', Validators.required],
      course: ['', Validators.required],
      heiName: ['', Validators.required],
      goodHealth: ['', Validators.required],
      goodMoral: ['', Validators.required],
      applicantSignature: [null, Validators.required],
      declarationDate: [this.today],
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

  onFileChange(field: keyof typeof this.checklist, event: Event) {
    const input = event.target as HTMLInputElement;
    const fileSelected = !!input.files?.length;
    this.checklist[field] = fileSelected; // Update the checklist status

    if (field === 'signature') {
      const control = this.scholarshipForm.get('checklist.signature');
      if (fileSelected) {
        control?.setValue(true); // Mark signature as present
      } else {
        control?.setValue(false); // Mark signature as absent
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
    this.router.navigateByUrl('/submitted');
  }
}
