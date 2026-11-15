import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-systemplusaf',
  templateUrl: './systemplusaf.page.html',
  styleUrls: ['./systemplusaf.page.scss'],
  standalone:false,
})
export class SystemplusafPage implements OnInit {

  currentTime: string = '';
  currentDate: string = new Date().toISOString().substring(0, 10);
  today: string = new Date().toISOString().split('T')[0];

  scholarshipForm: FormGroup;
  isSubmitted: boolean = false;
  formSubmitted: boolean = false;

  docs: { [key: string]: boolean } = {
    tryout: false,
    portfolio: false,
    audition: false,
    certificates: false,
    grades: false,
    moral: false,
    photo: false,
    indigency: false,
    income: false,
    recommendation: false,
    form: false,
    proof: false,
  };
  
  uploadedFiles: { [key: string]: File | File[] } = {};
  
  
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private alertController: AlertController
  ) {
    this.scholarshipForm = this.fb.group({
      academicYear: ['', Validators.required],
  
      // I. PERSONAL INFORMATION
      fullName: ['', Validators.required],
      birthDate: ['', Validators.required],
      sex: ['', Validators.required],
      citizenship: ['Filipino', Validators.required],
      mobile: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
  
      // II. EDUCATIONAL INFORMATION
      studentId: ['', Validators.required],
      course: ['', Validators.required],
      college: ['', Validators.required], // corrected from department to match HTML
      yearLevel: ['', Validators.required],
      gwa: ['', Validators.required],
      prevScholar: ['', Validators.required],
      prevScholarDetails: [''],
  
      // III. TYPE OF SCHOLARSHIP (single selection)
      type: ['', Validators.required],
      externalSpecify: [''],
  
      // IV. FAMILY AND FINANCIAL INFORMATION
      fatherName: [''],
      fatherOccupation: [''],
      motherName: [''],
      motherOccupation: [''],
      guardian: [''],
      income: [''],
      householdSize: [''],
  
      // V. ACHIEVEMENTS & BACKGROUND
      athleticDiscipline: [''],
      culturalTalent: [''],
      awards: [''],
      leadership: [''],
  
      // VII. DECLARATION
      signature: [null, Validators.required],
      declarationDate: [this.currentDate, Validators.required],
    });
  }

  
  ngOnInit() {
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
    const files = input.files;

    if (files && files.length > 0) {
      this.docs[field] = true;
      this.uploadedFiles[field] = files.length === 1 ? files[0] : Array.from(files);

      if (field === 'signature') {
        this.scholarshipForm.get('signature')?.setValue(files[0]);
      }
    } else {
      this.docs[field] = false;
      this.uploadedFiles[field] = [];
    }
  }

  async onSubmit() {
    this.isSubmitted = true;
    this.formSubmitted = true;

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
      let errorMessage =
        'Please fill in all required fields and upload all necessary documents.';

      if (invalidControls.length > 0) {
        errorMessage += `<br><strong>Invalid or blank fields:</strong> ${invalidControls.join(', ')}.`;
      }

      if (missingDocuments.length > 0) {
        errorMessage += `<br><strong>Missing documents:</strong> ${missingDocuments.join(', ')}.`;
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
    console.log('Form Values:', this.scholarshipForm.value);
    console.log('Uploaded Files:', this.uploadedFiles);

    this.router.navigateByUrl('/submitted');
  }
}
