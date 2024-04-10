import { Component, OnInit ,ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Data, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrl: './login2.component.css'
})

export class Login2Component implements OnInit {
  registerForm !: FormGroup;
  submitted = false;
  data1 !: Data[];
  useSonumber = false;
  useSOText:string= 'Use SO';
  user: User = {
    email: '',
    ponumber: '',
    sonumber: ''
  };
  @ViewChild('myModal') modal: any;
  constructor(private formBuilder: FormBuilder, private router: Router, private authService: DataService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      ponumber: ['' ],
      sonumber: ['' ]

    });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
debugger;
    this.submitted = true;
    {
      if (this.registerForm.valid && this.registerForm.value['email'] !='' ) {
        this.user.email = this.registerForm.value['email'];
        this.user.ponumber = this.registerForm.value['ponumber'];
        this.user.sonumber = this.registerForm.value['sonumber'];

        const isAuthenticated = this.authService.authenticate(this.user.email, this.user.ponumber, this.user.sonumber);
        if (isAuthenticated) {
          this.router.navigate(['/dashboard']);
        }
        else
        this.openModal();
          // alert('No record can be found at this time, please try again later.</br>   For further assistance, please contact Customer Service.</br> </br>   Customer Service is a hyperlink for    https://www.agilent.com/en/contact-us/page');
      }
      else
      this.registerForm.value['email'].Validators();
    }

  }
  onCancel() {
    this.registerForm = this.formBuilder.group({ email: ['',[Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]], sonumber: [''], ponumber: [''] });
    this.useSonumber =false;

  }
  toggleField() {
    if(this.useSonumber ){
    this.useSonumber = !this.useSonumber;
    this.useSOText='Use SO'
  }
else{
  this.useSonumber = !this.useSonumber;
  this.useSOText='Use PO'
}
 
  }
  openModal() {
    this.modal.nativeElement.style.display = 'block'; // Open modal by changing display style
    document.body.classList.add('modal-open'); // Add modal-open class to body
  }

  closeModal() {
    this.modal.nativeElement.style.display = 'none'; // Close modal by changing display style
    document.body.classList.remove('modal-open'); // Remove modal-open class from body
  }
}

export interface User {
  email: string;
  ponumber: string;
  sonumber: string;
}