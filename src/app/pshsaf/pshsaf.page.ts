import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-pshsaf',
  templateUrl: './pshsaf.page.html',
  styleUrls: ['./pshsaf.page.scss'],
  standalone: false,
})
export class PshsafPage implements OnInit {
  currentTime: string = '';
  currentDate: string = new Date().toISOString().substring(0, 10);
  today: string = new Date().toISOString().substring(0, 10);

  scholarshipForm!: FormGroup;
  formSubmitted: boolean = false;
  isSubmitted: boolean = false;

  docs: { [key: string]: boolean } = {
    applicationForm: false,
    grade5ReportCard: false,
    birthCertificate: false,
    idPhotos: false,
    proofOfIncome: false,
    schoolId: false,
    applicantSignature: false,
    guardianSignature: false
  };

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private alertController: AlertController
  ) {}

  ngOnInit(): void {
    const currentDate = new Date().toISOString().split('T')[0];

    this.scholarshipForm = this.fb.group({
      // I. APPLICANT INFORMATION
      fullName: ['', Validators.required],
      dob: ['', Validators.required],
      placeOfBirth: ['', Validators.required],
      gender: ['', Validators.required],
      citizenship: ['', Validators.required],
      homeAddress: ['', Validators.required],
      contactNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],

      elementarySchoolName: ['', Validators.required],
      schoolAddress: ['', Validators.required],
      gradeLevel: ['Grade 6', Validators.required],
      schoolType: ['', Validators.required],
      finalScienceGrade: ['', Validators.required],
      finalMathGrade: ['', Validators.required],
      overallAverage: ['', Validators.required],
      topTenPercent: ['', Validators.required],
      principalCertification: ['', Validators.required],

      fatherName: ['', Validators.required],
      fatherOccupation: ['', Validators.required],
      motherName: ['', Validators.required],
      motherOccupation: ['', Validators.required],
      familyIncome: ['', Validators.required],
      siblingsCount: ['', Validators.required],

      hasMedicalCondition: ['', Validators.required],
      medicalConditionDetails: [''],
      physicallyFit: ['', Validators.required],

      applicantDate: [{ value: currentDate, disabled: true }, Validators.required],
      guardianDate: [{ value: currentDate, disabled: true }, Validators.required]
    });

    // Optional: show/hide medical condition details dynamically
    this.scholarshipForm.get('hasMedicalCondition')?.valueChanges.subscribe(value => {
      const medicalDetails = this.scholarshipForm.get('medicalConditionDetails');
      if (value === 'Yes') {
        medicalDetails?.setValidators([Validators.required]);
      } else {
        medicalDetails?.clearValidators();
        medicalDetails?.setValue('');
      }
      medicalDetails?.updateValueAndValidity();
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
