import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})
class ContactComponent implements OnInit {

    contactForm: FormGroup;

    constructor(private formBuilder: FormBuilder) {
        // this.contactForm = this.createFormGroup();
        this.contactForm = this.createFormGroupWithBuilder( formBuilder );
    }


    createFormGroup() {
        return new FormGroup({
            personalData: new FormGroup({
                email: new FormControl(),
                mobile: new FormControl(),
                country: new FormControl(),
            }),
            requestType: new FormControl(),
            text: new FormControl(),
        })
    }

    createFormGroupWithBuilder(formBuilder: FormBuilder) {
        return formBuilder.group({
          personalData: formBuilder.group({
            email: 'defaul@email.com',
            mobile: '',
            country: ''
          }),
          requestType: '',
          text: ''
        });
    }


    // this.contactForm.value
}