import { Component, OnInit } from '@angular/core';
import { contactSchema } from 'src/models/contactSchema';
import { ApiService } from '../services/api.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit{

  allGroups:any=[]
 

  contact: contactSchema = {}

  constructor(private api:ApiService, private Navigate:Router){

  }

  ngOnInit(): void {
    // make a call to service
    this.api.getallgroups().subscribe({
      next:(result:any)=>{
        console.log(result);
        this.allGroups=result
        
      }
    })
  }
  addContact(){
  // make a call to service 
  this.api.addContact(this.contact).subscribe({
    next:()=>{
      // alert contact 
      alert("new contact added successfully")
      // redirec to all contact page
      this.Navigate.navigateByUrl("")

    }
  })
  }

}
