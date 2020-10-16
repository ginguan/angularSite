import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-listings-page',
  templateUrl: './edit-listings-page.component.html',
  styleUrls: ['./edit-listings-page.component.css']
})
export class EditListingsPageComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit():void{
    alert('Saving  changes to the listing...')
    this.router.navigateByUrl('/my-listings');
  }

}
