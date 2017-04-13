import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators} from "@angular/forms";
import { Router } from '@angular/router';

//service pour login
import { UserService } from "../../services/user.service";
//user
import { User } from "../../models/user.model";

@Component({
  selector: 'profile',
  styleUrls: ['profile.component.css'],
  templateUrl: 'profile.component.html'
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  error = "";
  succesMsg = "";
  //edit bool
  editing = false;
  buttonEdit = "";

  constructor(public formBuilder: FormBuilder,
              private router: Router,
              private loginService: UserService,
              private user: User
  ){

    var loggedUser = JSON.parse(localStorage.getItem("loggeduser"));

    user.token = loggedUser && loggedUser.token;
    user.email = loggedUser && loggedUser.usermail;
    this.buttonEdit = "Éditer le profil";
    console.log(user.token);

    //get user
    this.loginService.getUser(user.token)
      .subscribe(data => {
        console.log(data);
        this.user = data;
      });
  }

  ngOnInit(){

    this.profileForm = this.formBuilder.group({
      name: [this.user.name, Validators.required],
      firstname: [this.user.firstname, Validators.required],
      email: [this.user.email, Validators.required]
    });
  }

  onUpdateSubmit(){
    let formValues = this.profileForm.value;
    if(formValues.name)  this.user.name = formValues.name;
    if(formValues.firstname) this.user.firstname = formValues.firstname;;
    if(formValues.email)      this.user.email = formValues.email;

    console.log(this.user)
    this.loginService.updateUser(this.user)
      .subscribe(data => {
          if(data && data.status === 200) {
            //no edit status
            this.editing = false;
            this.buttonEdit = "Éditer le profil";
            this.succesMsg = "Modification effectuée avec succès";
            //update values
            this.user = data.user;

            //if update username => need login
            if(this.user.name !== JSON.parse(localStorage.getItem("loggeduser")).username){
              localStorage.setItem('loggeduser', JSON.stringify({email: this.user.email, token: this.user.token, role: this.user.role }));
            }
          } else {
            this.error = "Veuillez vérifier vos informations";
          }
        },
        error => {
          this.error = "Modification impossible.";
        });

  }

  onClickEdit(){
    if(this.editing === false){
      this.editing = true;
      this. buttonEdit = "Annuler l'édition";
    } else {
      this.editing = false;
      this.buttonEdit = "Éditer le profil";
    }
  }

}
