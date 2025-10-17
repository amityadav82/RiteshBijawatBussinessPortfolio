import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';


@Component({
  selector: 'app-main-dash',
  imports: [CommonModule,FormsModule],
  templateUrl: './main-dash.html',
  styleUrls: ['./main-dash.css']
})
export class MainDash {
 title = 'Financial Solutions for Everyone';
  contactEmail = 'saccsatish@gmail.com';
  showToast = false;
  toastMessage = '';

  services = [
    { icon: '🇺🇸', title: 'US Tax Return Filings', description: 'Filing and advisory for NRIs and US residents.' },
     { icon: '📚', title: 'Accounting & Book Keeping Services', description: 'Comprehensive accounting and bookkeeping solutions for businesses.' },
    { icon: '💳', title: 'Corporate Credit Card Services', description: 'Simplified corporate credit management and expense tracking.' },
    { icon: '🧮', title: 'Virtual CFO', description: 'End-to-end financial strategy, planning, and advisory support for growing businesses.' },
   { icon: '💰', title: 'Mutual Fund Advisory Services', description: 'Personalized investment advice tailored to your financial goals.' },
    { icon: '🏢', title: 'Company Incorporation', description: 'Business setup in India and abroad (Dubai, Saudi Arabia, Africa, etc.).' },
    { icon: '📊', title: 'Income Tax Return Filings', description: 'Hassle-free preparation and filing for individuals and businesses.' },
    { icon: '📋', title: 'GST Return Filings', description: 'Timely and accurate GST compliance and advisory.' },
    { icon: '✅', title: 'Form 15CA / 15CB Certification', description: 'End-to-end assistance for foreign remittance compliance.' },
    { icon: '📈', title: 'Tax Planning & Advisory', description: 'Strategic tax-saving solutions and compliance planning.' },
    { icon: '📜', title: 'Net Worth Certification', description: 'Certified statements for visa, bank, or business requirements.' },
    { icon: '🌍', title: 'Import & Export Registration', description: 'IEC registration and compliance support for global trade.' },
    { icon: '🏭', title: 'SEZ Compliance', description: 'Assistance with documentation, filings, and approvals for SEZ units.' },
    
    { icon: '🇦🇪', title: 'Dubai Compliance Services', description: 'Accounting, VAT, and corporate compliance solutions.' },
    { icon: '⚖️', title: 'Company Secretary Services', description: 'Drafting of legal documents, board minutes, and statutory filings.' },
  ];

  teamMembers = [
    { icon: '👨‍💼', name: 'John Doe', role: 'Financial Advisor' },
    { icon: '👩‍💼', name: 'Jane Smith', role: 'Tax Consultant' },
    { icon: '👨‍💻', name: 'Alex Johnson', role: 'Business Consultant' },
    { icon: '👩‍💻', name: 'Emma Williams', role: 'Compliance Officer' }
  ];

 

//For sending email 
 formData = {
    name: '',
    email: '',
    service: '',
    message: ''
  };

  onSubmit() {
    const serviceID = 'service_zib3ubl';
    const templateID = 'template_7qo8oqk';
    const publicKey = 'iHAnCzmTVcnpoJ4cb';

   
    emailjs.send(serviceID, templateID, this.formData, publicKey)
      .then((result)  => {
        alert('✅ Message sent successfully!');
        this.formData = { name: '', email: '', service: '', message: '' };
      }, (error) => {
        console.error('❌ EmailJS Error:', error);
        alert('❌ Failed to send message. Please try again later.');
      });
  }
}
  




