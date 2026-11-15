import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {
  activeTab: string = 'home';
  searchQuery: string = '';

  scholarships = [
    {
      routerLink: '/ched',  // Corrected property and value
      name: 'CHED Merit Scholarship Program (CMSP)',
      description: 'Provides financial assistance to academically deserving students.',
      logo: 'assets/images/CHED.PNG',
      category: ['merit', 'gov', 'college', 'full', 'partial'],
    },
    {
      routerLink: '/dost', 
      id:'dost',
      name: 'DOST-SEI Undergraduate Scholarship',
      description: 'Supports students pursuing degrees in science, technology, engineering, and mathematics (STEM).',
      logo: 'assets/images/DOST-SEI Undergraduate Scholarship .PNG',
      category: ['gov', 'merit', 'course', 'college', 'full'],
    },
    {
      routerLink: '/tesda', 
      id:'tesda',
      name: 'TESDA Scholarship Program',
      description: 'Offers technical-vocational education and training (TVET) programs.',
      logo: 'assets/images/TESDA scholarship program .PNG',
      category: ['gov', 'merit', 'course', 'shs', 'college', 'full', 'partial'],
    },
    {
      routerLink: '/sm', 
      id:'sm',
      name: 'SM Foundation Scholarship',
      description: 'Aims to support financially challenged students in their pursuit of higher education.',
      logo: 'assets/images/SM Foundation College Scholarship.PNG',
      category: ['private', 'merit', 'financial', 'course', 'college', 'full'],
    },
    {
      routerLink: '/megaworld', 
      id:'megaworld',
      name: 'Megaworld Foundation Scholarship',
      description: 'Supports deserving students pursuing specific courses aligned with the company business units.',
      logo: 'assets/images/Megaworld Foundation Scholarship .PNG',
      category: ['private', 'merit', 'financial', 'course', 'college', 'full'],
    },
    {
      routerLink: '/sanfernando', 
      id:'sanfernando',
      name: 'City College Of San Fernando Scholarship and Grants',
      description: 'Offers various scholarships to students enrolled in the college.',
      logo: 'assets/images/City College Of San Fernando Scholarship and Grants.PNG',
      category: ['gov', 'school', 'college', 'full'],
    },
    {
      routerLink: '/hau', 
      id:'hau',
      name: 'HOLY ANGEL UNIVERSITY',
      description: 'Provides scholarships based on academic performance, leadership, and financial need.',
      logo: 'assets/images/HOLY ANGEL UNIVERSITY .PNG',
      category: ['school', 'financial', 'college', 'partial'],
    },
    {
      routerLink: '/ua', 
      id:'ua',
      name: 'University of the Assumption',
      description: 'Offers various scholarship programs to assist students in need.',
      logo: 'assets/images/University of the Assumption .PNG',
      category: ['school', 'financial', 'college', 'partial'],
    },
    {
      routerLink: '/systemplus', 
      id:'systemplus',
      name: 'System Plus College Foundation',
      description: 'Awarded to college students with outstanding academic performance.',
      logo: 'assets/images/System Plus College Foundation .PNG',
      category: ['school', 'financial', 'college', 'partial'],
    },
    {
      routerLink: '/auf', 
      id:'auf',
      name: 'Angeles University Foundation',
      description: 'Provides financial assistance to students enrolled in programs aligned with the university’s industry partners.',
      logo: 'assets/images/Angeles University Foundation.PNG',
      category: ['financial', 'college', 'full', 'partial'],
    },
    {
      routerLink: '/laverdad', 
      id:'laverdad',
      name: 'La Verdad Christian College (LVCC)',
      description: 'A school-based scholarship in Apalit, Pampanga that offers full financial support.',
      logo: 'assets/images/La Verdad Christian College (LVCC).PNG',
      category: ['private', 'school', 'financial', 'college'],
    },
    {
      routerLink: '/efap', 
      id:'efap',
      name: 'Educational Financial Assistance Program (EFAP)',
      description: 'Offers cash grants to qualified indigent students enrolled in college, managed by the city’s Social Welfare Office in Angeles City.',
      logo: 'assets/images/Educational Financial Assistance Program (EFAP).PNG',
      category: ['gov', 'financial', 'college', 'partial'],
    },
    {
      routerLink: '/aics', 
      id:'aics',
      name: 'Assistance to Individuals in Crisis Situations (AICS)',
      description: 'This initiative provides financial aid to students from underprivileged backgrounds to help cover educational expenses.',
      logo: 'assets/images/Assistance to Individuals in Crisis Situations (AICS).PNG',
      category: ['financial', 'shs', 'college', 'partial'],
    },
    {
      routerLink: '/chamber',  
      id:'chamber',
      name: 'Pampanga Chamber of Commerce and Industry',
      description: 'Provides educational subsidies to students in technical-vocational programs to support local workforce development.',
      logo: 'assets/images/Pampanga Chamber of Commerce and Industry .PNG',
      category: ['private', 'financial', 'course', 'college', 'partial'],
    },
    {
      routerLink: '/owwa', 
      id:'owwa',
      name: 'Overseas Workers Welfare Administration',
      description: 'Grants scholarships to qualified dependents of OWWA members who plan to enroll in a four- or five-year baccalaureate course.',
      logo: 'assets/images/Overseas Workers Welfare Administration .PNG',
      category: ['gov', 'shs', 'college', 'full'],
    },
    {
      routerLink: '/charity', 
      id:'charity',
      name: 'Charity First Foundation Scholarship',
      description: 'Offers scholarships to financially challenged but deserving students pursuing college education.',
      logo: 'assets/images/Charity First Foundation Scholarship .PNG',
      category: ['private', 'financial', 'college', 'partial'],
    },
    {
      routerLink: '/pshs', 
      id:'pshs',
      name: 'PSHS Grade 7 Scholarship National Competitive Examination',
      description: 'Offers scholarships to incoming Grade 7 students who excel in science and mathematics.​',
      logo: 'assets/images/PSHS Grade 7 Scholarship National Competitive Examination.PNG',
      category: ['gov','merit', 'shs', 'full'],
    },
    {
      routerLink: '/gbf', 
      id:'gbf',
      name: 'GBF teachSTEM College Scholarship',
      description: 'Provides scholarships to students pursuing degrees in education with a focus on STEM subjects.',
      logo: 'assets/images/GBF teachSTEM College Scholarship.PNG',
      category: ['private', 'merit', 'course', 'college'],
    },
    {
      routerLink: '/aboitiz', 
      id:'aboitiz',
      name: 'Aboitiz Foundation Scholarship',
      description: 'For outstanding students in business, engineering, and IT-related courses.',
      logo: 'assets/images/Aboitiz Foundation Scholarship .PNG',
      category: ['private', 'merit', 'course', 'college'],
    },
    {
      routerLink: '/toyota', 
      id:'toyota',
      name: 'Toyota Motor Philippines School of Technology',
      description: ' Offers scholarships in automotive and technical education with guaranteed employment opportunities.',
      logo: 'assets/images/Toyota Motor Philippines School of Technology .PNG',
      category: ['private', 'course', 'college'],
    },
  ];

  selectedCategory: string = 'all';
  currentTime: string = '';

  constructor() {}

  ngOnInit() {
    this.updateTime();
    setInterval(() => this.updateTime(), 1000);
  }

  updateTime() {
    const now = new Date();
    this.currentTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  // ✅ Fix: Removed invalid comparison and kept includes() logic only
  filteredScholarships() {
    return this.scholarships.filter(scholarship => {
      const matchesCategory =
        this.selectedCategory === 'all' ||
        (Array.isArray(scholarship.category) &&
          scholarship.category.includes(this.selectedCategory));

      const matchesSearchQuery =
        scholarship.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        scholarship.description.toLowerCase().includes(this.searchQuery.toLowerCase());

      return matchesCategory && matchesSearchQuery;
    });
  }

  // ✅ Fix: Added missing method for ionInput
  onSearchChange(event: any) {
    this.searchQuery = event.target.value;
  }

  setActive(tab: string) {
    this.activeTab = tab;
  }
}
