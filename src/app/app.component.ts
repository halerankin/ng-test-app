import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonProxyModule, TagProxyModule, FilterPillProxyModule, PopoverProxyModule } from '@fabric-msft/fabric-angular';
import { fabricLightTheme, setTheme } from "@fabric-msft/theme"

setTheme(fabricLightTheme);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    ButtonProxyModule, 
    TagProxyModule, 
    FilterPillProxyModule,
    PopoverProxyModule,
    FormsModule,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  styles: [`
    .form-container {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      max-width: 500px;
      margin: 0 auto;
    }

    .form-field {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .form-field label {
      font-weight: 500;
      color: var(--gray-700);
    }

    .form-field input {
      padding: 0.75rem;
      border: 1px solid var(--gray-400);
      border-radius: 4px;
      font-size: 1rem;
    }

    .button-group {
      display: flex;
      gap: 1rem;
      margin-top: 1rem;
    }

    .form-feedback {
      margin-top: 1rem;
      text-align: center;
    }

    .success-message {
      color: #22c55e;
      font-weight: 500;
    }

    .info-message {
      color: #3b82f6;
      font-weight: 500;
    }

    .test-scenarios {
      margin-top: 3rem;
      padding: 2rem;
      background: #f8fafc;
      border-radius: 8px;
    }

    .test-scenarios h2 {
      text-align: center;
      margin-bottom: 2rem;
      color: var(--gray-900);
    }

    .test-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 1.5rem;
    }

    .test-card {
      background: white;
      padding: 1.5rem;
      border-radius: 8px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    }

    .test-card h3 {
      margin: 0 0 1rem 0;
      color: var(--gray-900);
      font-size: 1.1rem;
    }

    .test-input {
      width: 100%;
      padding: 0.75rem;
      border: 1px solid var(--gray-400);
      border-radius: 4px;
      margin-bottom: 1rem;
    }

    .test-result {
      margin-top: 1rem;
      padding: 0.75rem;
      background: #f1f5f9;
      border-radius: 4px;
      font-size: 0.875rem;
      color: var(--gray-700);
      word-break: break-all;
    }

    @media (max-width: 768px) {
      .test-grid {
        grid-template-columns: 1fr;
      }
      
      .button-group {
        flex-direction: column;
      }
    }
  `]
})
export class AppComponent {
  title = 'angular-test-library';
  formData = {
    name: '',
    email: ''
  };

  formSubmitted = false;
  formReset = false;

  lastSubmitted: any;
  lastClickEvent: any;
  lastKeypressEvent: any;
  isDisabled = false;

  onSubmit() {
    console.log('Form submitted:', this.formData);
    this.formSubmitted = true;
  }

  onReset() {
    this.formData = {
      name: '',
      email: ''
    };
    this.formReset = true;
    console.log('Form reset');
  }

  onTestSubmit(event: any) {
    this.lastSubmitted = {
      timestamp: new Date().toISOString(),
      formData: event
    };
  }

  onButtonClick(event: any) {
    this.lastClickEvent = {
      timestamp: new Date().toISOString(),
      type: event.type,
      target: event.target.tagName
    };
  }

  onKeyPress(event: any) {
    this.lastKeypressEvent = {
      timestamp: new Date().toISOString(),
      key: event.key,
      keyCode: event.keyCode
    };
  }

  toggleDisabled() {
    this.isDisabled = !this.isDisabled;
  }

  // Make console available in template
  console = console;
}
