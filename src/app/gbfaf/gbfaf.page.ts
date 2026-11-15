import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-gbfaf',
  templateUrl: './gbfaf.page.html',
  styleUrls: ['./gbfaf.page.scss'],
  standalone:false,
})
export class GbfafPage implements OnInit {
  currentTime: string = '';
  currentDate: string = new Date().toISOString().substring(0, 10);
  today: string = new Date().toISOString().substring(0, 10);

  scholarshipForm!: FormGroup;
  formSubmitted: boolean = false;
  isSubmitted: boolean = false;

  docs: { [key: string]: boolean } = {
    applicationForm: false,
    transcript: false,
    enrollmentCert: false,
    recommendation: false,
    incomeProof: false,
    essayOrVideo: false,
    validID: false,
    idPhoto: false,
    applicantSignature:false,

  };

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private alertController: AlertController
  ) {}

  ngOnInit(): void {
    const currentDate = new Date().toISOString().split('T')[0];

    this.scholarshipForm = this.fb.group({
      // I. PERSONAL INFORMATION
      fullName: ['', Validators.required],
      dob: ['', Validators.required],
      gender: ['', Validators.required],
      citizenship: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      completeAddress: ['', Validators.required],

      // II. EDUCATIONAL BACKGROUND
      currentSchool: ['', Validators.required],
      degreeProgram: ['', Validators.required],
      yearLevel: ['', Validators.required],
      gwa: ['', Validators.required],
      partnerSchool: ['', Validators.required],
      graduationYear: ['', Validators.required],

      // III. COMMITMENT TO TEACHING
      commitToTeach: ['', Validators.required],
      hasExperience: ['', Validators.required],
      experienceDescription: [''],

      // IV. FAMILY & FINANCIAL BACKGROUND
      householdIncome: ['', Validators.required],
      proofOfIncome: ['', Validators.required],
      otherIncomeProof: [''],
      dependentsCount: ['', Validators.required],

      // VI. DECLARATION

      applicantDate: [{ value: currentDate, disabled: true }, Validators.required],

    });


    this.updateTime();
    setInterval(() => this.updateTime(), 1000);
  }

  updateTime() {
    const now = new Date();
    this.currentTime = now.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });
  }

  onFileChange(field: keyof typeof this.docs, event: Event) {
    const input = event.target as HTMLInputElement;
    const fileSelected = !!input.files?.length;
    this.docs[field] = fileSelected;
  }

  async onSubmit() {
    this.formSubmitted = true;
    this.isSubmitted = true;

    const invalidControls = Object.keys(this.scholarshipForm.controls).filter((key) => {
      const control = this.scholarshipForm.get(key);
      return control && control.invalid && control.enabled;
    });

    const missingDocuments = Object.entries(this.docs)
      .filter(([_, uploaded]) => !uploaded)
      .map(([doc]) => doc);

    const allErrors = [...invalidControls, ...missingDocuments];

    console.log('Invalid form fields:', invalidControls);
    console.log('Missing documents:', missingDocuments);

    if (allErrors.length > 0) {
      let errorMessage = 'Please fill in all required fields and upload all necessary documents before submitting.';

      if (invalidControls.length > 0) {
        errorMessage += `<br><strong>Invalid/Blank fields:</strong> ${invalidControls.join(', ')}`;
      }

      if (missingDocuments.length > 0) {
        errorMessage += `<br><strong>Missing documents:</strong> ${missingDocuments.join(', ')}`;
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

    console.log('Form is valid and ready for submission.');
    this.router.navigateByUrl('/submitted');
  }
}
