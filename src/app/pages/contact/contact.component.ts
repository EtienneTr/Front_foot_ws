import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators} from "@angular/forms";
import { Router } from '@angular/router';

//service pour contact
import {ContactService} from "../../services/contact.service";
import {Contact} from "../../models/contact.model";

@Component({
  selector: 'contact',
  styleUrls: ['contact.component.css'],
  templateUrl: 'contact.component.html'
})
export class ContactComponent implements OnInit {

  //authService: AuthService;
  contactForm: FormGroup;
  error = "";
  success = "";
  usermail = "";

  constructor(public formBuilder: FormBuilder,
              private router: Router,
              private contactService: ContactService
  ){
    var loggedUser = JSON.parse(localStorage.getItem("loggeduser"));
    this.usermail = loggedUser && loggedUser.usermail;
  }

  ngOnInit(){

    //contact avec email user si connecté
    this.contactForm = this.formBuilder.group({
      email: [this.usermail, Validators.required,],
      subject: ['', Validators.required],
      body: ['', Validators.required]
    });
  }

  onContactSubmit(){
    let formValues = this.contactForm.value;
    let mail = new Contact();
    mail.Email = formValues.email;
    mail.Subject = formValues.subject;
    mail.Body = formValues.body;

    this.contactService.sendContact(mail)
      .subscribe(result => {
          if(result === true){
            this.success = "Votre message a bien été envoyé. Merci !";

            setTimeout((router: Router) => {
              this.router.navigate(['/']).then(function(){
                window.location.reload(); });
            }, 2000);  //2s
          } else {
            this.error = "Une erreur est survenue en envoyant le message. Merci de rééssayer.";
          }},
        error => {
          this.error = "Une erreur est survenue en envoyant le message. Merci de rééssayer.";
        });

  }
}
