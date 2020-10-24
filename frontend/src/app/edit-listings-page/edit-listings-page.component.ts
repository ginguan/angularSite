import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Listing} from "../types";
import {fakeListings, fakeMyListings} from "../fake-data";

@Component({
  selector: 'app-edit-listings-page',
  templateUrl: './edit-listings-page.component.html',
  styleUrls: ['./edit-listings-page.component.css']
})
export class EditListingsPageComponent implements OnInit {

  listing :Listing;
  constructor(
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    //https://angular.io/api/router/ActivatedRouteSnapshot
    //access para : route.paramMap.subscribe if you need to update the URL parameter in the same component
    /*
    ngOnInit() {
      this.route.paramMap.subscribe(params => {
      this.car = params.get("carBrand")
  })}
     */
    const id  = this.route.snapshot.paramMap.get('id'); //only get the id
    this.listing= fakeMyListings.find(listing => listing.id ===id);
    
    
  }
  onSubmit():void{
    alert('Saving  changes to the listing...')
    this.router.navigateByUrl('/my-listings');
  }

}
