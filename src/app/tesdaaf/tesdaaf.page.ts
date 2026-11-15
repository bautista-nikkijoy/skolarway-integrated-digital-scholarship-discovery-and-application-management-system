import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tesdaaf',
  templateUrl: './tesdaaf.page.html',
  styleUrls: ['./tesdaaf.page.scss'],
  standalone: false,
})
export class TesdaafPage implements OnInit {
  currentTime: string = '';
  currentDate: string = new Date().toISOString().substring(0, 10);
  today: string = new Date().toISOString().substring(0, 10);

  tesdaForm: FormGroup;
  isSubmitted: boolean = false;
  formSubmitted: boolean = false;

  checklist = {
    form: false,
    photo: false,
    birth: false,
    educProof: false,
    brgyCert: false,
    validId: false,
    signature: false,
  };

  eligibilityOptions: string[] = [
    'Out-of-School Youth',
    'Unemployed',
    'Underemployed',
    'OFW Dependent',
    'Others',
  ];

  educationOptions: string[] = [
    'Elementary',
    'High School',
    'Senior High School',
    'College Undergraduate',
    'College Graduate',
  ];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private alertController: AlertController
  ) {
    this.tesdaForm = this.fb.group({
      program: ['', Validators.required],
      trainingTitle: ['', Validators.required],
      institution: ['', Validators.required],
      trainingDuration: ['', Validators.required],

      fullName: ['', Validators.required],
      sex: ['', Validators.required],
      birthDate: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(15)]],
      placeOfBirth: ['', Validators.required],
      citizenship: ['Filipino', Validators.required],
      civilStatus: ['', Validators.required],
      contactNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],

      eligibility: [[], Validators.required],
      employed: ['', Validators.required],
      position: [''],
      lastSchool: ['', Validators.required],
      education: ['', Validators.required],
      skills: [''],

      commitmentDate: [this.today, Validators.required],
      signature: [null, Validators.required],
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

  get docs() {
    return this.checklist;
  }

  onEligibilityChange(event: Event) {
    const input = event.target as HTMLInputElement;
    const selected = this.tesdaForm.get('eligibility')?.value || [];

    if (input.checked) {
      this.tesdaForm.get('eligibility')?.setValue([...selected, input.value]);
    } else {
      this.tesdaForm.get('eligibility')?.setValue(
        selected.filter((val: string) => val !== input.value)
      );
    }
  }

  onFileChange(field: keyof typeof this.checklist, event: Event) {
    const input = event.target as HTMLInputElement;
    const fileSelected = !!input.files?.length;
    this.checklist[field] = fileSelected;

    if (field === 'signature') {
      this.tesdaForm.get('signature')?.setValue(
        fileSelected ? input.files?.[0] : null
      );
    }
  }

  async onSubmit() {
    this.formSubmitted = true;
    this.isSubmitted = true;

    const invalidControls = Object.keys(this.tesdaForm.controls).filter((key) => {
      const control = this.tesdaForm.get(key);
      return control && control.invalid && control.enabled;
    });

    const missingDocuments = Object.entries(this.checklist)
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
