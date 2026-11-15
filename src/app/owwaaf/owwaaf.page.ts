import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-owwaaf',
  templateUrl: './owwaaf.page.html',
  styleUrls: ['./owwaaf.page.scss'],
  standalone:false,
})
export class OwwaafPage implements OnInit {

  
  currentTime: string = '';
  currentDate: string = new Date().toISOString().substring(0, 10);
  today: string = new Date().toISOString().substring(0, 10);

  scholarshipForm!: FormGroup;
  docs: any = {
    applicationForm: false,
    birthCertificate: false,
    cenomar: false,
    idPhoto: false,
    relationshipProof: false,
    itr: false,
    academicRecords: false,
    ofwPassport: false,
    familyIncomeProof: false,
    dostExamResult: false,
    enrollmentProof: false,
    signature: false
  };
  
  formSubmitted: boolean = false;
  isSubmitted: boolean = false;
  
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private alertController: AlertController
  ) {}
  
  ngOnInit() {
    // Initialize the form group with default values and validation
    this.scholarshipForm = this.fb.group({
      fullName: ['', Validators.required],
      dob: ['', Validators.required],
      gender: ['', Validators.required],
      civilStatus: ['', Validators.required],
      contactNumber: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]], // 10-digit phone number
      email: ['', [Validators.email]],
      currentAddress: ['', Validators.required],
      permanentAddress: ['', Validators.required],
      edsp: [false],
      cmwsp: [false],
      odsp: [false],
      elap: [false],
      nationality: ['Filipino', Validators.required],
      relationshipToOFW: ['', Validators.required],
      ofwName: ['', Validators.required],
      ofwOwwaId: ['', Validators.required],
      ofwPassportNumber: ['', Validators.required],
      collegeName: ['', Validators.required],
      degreeProgram: ['', Validators.required],
      courseClassification: ['', Validators.required],
      gwa: ['', Validators.required],
      proofOfEnrollment: ['', Validators.required],
      applicationForm: [false],
      birthCertificate: [false],
      cenomar: [false],
      idPhoto: [false],
      relationshipProof: [false],
      itr: [false],
      academicRecords: [false],
      ofwPassport: [false],
      familyIncomeProof: [false],
      dostExamResult: [false],
      enrollmentProof: [false],
      signature: [false],
      declarationDate: [this.today, Validators.required]
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

    const invalidControls = Object.keys(this.scholarshipForm.controls).filter(key => {
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
