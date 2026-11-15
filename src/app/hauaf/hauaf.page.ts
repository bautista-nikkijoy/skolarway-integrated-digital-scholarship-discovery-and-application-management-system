import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-hauaf',
  templateUrl: './hauaf.page.html',
  styleUrls: ['./hauaf.page.scss'],
  standalone: false,
})
export class HauafPage implements OnInit {
  currentTime: string = '';
  currentDate: string = new Date().toISOString().substring(0, 10);
  today: string = new Date().toISOString().split('T')[0];

  scholarshipForm: FormGroup;
  isSubmitted: boolean = false;
  formSubmitted: boolean = false;

  docs: { [key: string]: boolean } = {
    form: false,
  incomeProof: false,
  grades: false,
  goodMoral: false,
  photo: false,
  signature: false,
  portfolio: false, // added portfolio for consistency
  };

  scholarshipTypes: string[] = [
    'Entrance Scholarship',
    'Academic Scholarship',
    'Athletic Scholarship',
    'Artistic/Cultural Scholarship',
    'Financial Aid Grant',
    'Leadership Scholarship',
    'Service Grant',
    'External-Funded Scholarship',
  ];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private alertController: AlertController
  ) {
    this.scholarshipForm = this.fb.group({

      academicYear: ['', Validators.required],
      fullName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      sex: ['', Validators.required],
      birthDate: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(18)]],
      citizenship: ['', Validators.required],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      email: ['', [Validators.required, Validators.email]],
      permanentAddress: ['', Validators.required],
      studentId: ['', Validators.required],
      programDegree: ['', Validators.required],
      collegeDepartment: ['', Validators.required],
      yearLevel: ['', Validators.required],
      gwa: ['', [Validators.required, Validators.pattern('^[0-9]*\.?[0-9]+$')]],
      honorsAwards: [''],
      scholarshipType: ['', Validators.required],
      fatherName: [''],
      fatherStatus: ['', Validators.required],
      fatherOccupation: [''],
      motherName: [''],
      motherStatus: ['', Validators.required],
      motherOccupation: [''],
      guardian: [''],
      totalMembers: ['', Validators.required],
      annualIncome: ['', [Validators.required, Validators.min(0)]],
      talent: [''],
      leadership: [''],
      volunteering: [''],
      declarationDate: [this.today, Validators.required] 

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
    const fileSelected = !!input.files?.length;
    this.docs[field] = fileSelected;

    if (field === 'signature') {
      this.scholarshipForm.get('signature')?.setValue(
        fileSelected ? input.files?.[0] : null
      );
    }
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

    console.log('Form is valid and ready for submission.');
    this.router.navigateByUrl('/submitted');
  }
}
