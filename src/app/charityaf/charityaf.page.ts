import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-charityaf',
  templateUrl: './charityaf.page.html',
  styleUrls: ['./charityaf.page.scss'],
  standalone: false,
})
export class CharityafPage implements OnInit {
  currentTime: string = '';
  currentDate: string = new Date().toISOString().substring(0, 10);
  today: string = new Date().toISOString().substring(0, 10);

  scholarshipForm!: FormGroup;
  formSubmitted: boolean = false;
  isSubmitted: boolean = false;

  docs: any = {
    applicationForm: false,
    birthCertificate: false,
    goodMoralCertificate: false,
    reportCard: false,
    itrOrIndigency: false,
    barangayClearance: false,
    recommendationLetter: false,
    idPictures: false,
  };

  constructor(private fb: FormBuilder, private router: Router, private alertController: AlertController) {}

  ngOnInit(): void {
    this.scholarshipForm = this.fb.group({
      // I. APPLICANT INFORMATION
      fullName: ['', Validators.required],
      dob: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(0)]],
      gender: ['', Validators.required],
      civilStatus: ['', Validators.required],
      contactNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      currentAddress: ['', Validators.required],
      permanentAddress: [''],

      // II. SCHOLARSHIP PROGRAM APPLIED FOR
      charityFirstFoundationScholarship: [false],

      // III. ACADEMIC INFORMATION
      highSchoolName: ['', Validators.required],
      graduationYear: ['', Validators.required],
      highSchoolGpa: ['', Validators.required],
      incomingFreshman: ['', Validators.required],
      coursePlanToEnroll: ['', Validators.required],
      collegeUniversityName: ['', Validators.required],

      // IV. FAMILY INFORMATION
      fatherName: ['', Validators.required],
      motherName: ['', Validators.required],
      guardianName: [''],
      familyIncome: ['', Validators.required],

      // V. DOCUMENTARY REQUIREMENTS CHECKLIST
      applicationFormDoc: [false],
      idPicturesDoc: [false],
      birthCertificateDoc: [false],
      goodMoralCertificate: [false],
      reportCardDoc: [false],
      itrOrIndigency: [false],
      barangayClearanceDoc: [false],
      recommendationLetterDoc: [false],

      // VI. DECLARATION
      signature: [false],
      declarationDate: [this.today, Validators.required],
    });

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
