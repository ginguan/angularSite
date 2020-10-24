import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Listing} from "../types";
import {fakeListings} from "../fake-data";

@Component({
  selector: 'app-edit-listings-page',
  templateUrl: './edit-listings-page.component.html',
  styleUrls: ['./edit-listings-page.component.css']
})
export class EditListingsPageComponent implements OnInit {

  constructor(
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    //https://angular.io/api/router/ActivatedRouteSnapshot
    const id  = this.route.snapshot.paramMap.get('id');
    
  }
  onSubmit():void{
    alert('Saving  changes to the listing...')
    this.router.navigateByUrl('/my-listings');
  }

}
