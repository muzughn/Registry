import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  registrationForm!: FormGroup;
  registrationMessage = '';
  name!: string;
  email!: string;
  password!: string;
  isRegistered!: false;
  facultyService: any;
  faculty: any;

  constructor(private authService: AuthService) { }
  onSubmit() {
    this.facultyService.registerFaculty(this.faculty).subscribe(
      (      response: any) => {
        console.log(response);
        alert('Registered successfully. Please wait for admin approval.'); // add this line
      },
      (      error: any) => console.log(error)
    );
  }


  register() {
    // Add code to register the user
  }
}
