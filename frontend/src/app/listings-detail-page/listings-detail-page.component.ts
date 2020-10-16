import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fakeListings} from '../fake-data';
import { Listing} from '../types';
@Component({
  selector: 'app-listings-detail-page',
  templateUrl: './listings-detail-page.component.html',
  styleUrls: ['./listings-detail-page.component.css']
})
export class ListingsDetailPageComponent implements OnInit {
  listing:Listing;
// for large number of different prividers to enble to do certain things
//ActivateRoute: allow listing-detail page to access value of the URL parameter in current path. 
  constructor(private route: ActivatedRoute,) { 
    

  }

  ngOnInit(): void {
    //get the URL parameter with name id
    const id = this.route.snapshot.paramMap.get('id');
    //after get id: find listing when find id === 
    this.listing = fakeListings.find(listing =>listing.id ===id)
  }

}
