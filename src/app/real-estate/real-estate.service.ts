import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { DataStore } from '../shell/data-store';
import { RealEstateListingModel } from './listing/real-estate-listing.model';
import { RealEstateDetailsModel } from './details/real-estate-details.model';

@Injectable()
export class RealEstateService {
  private listingDataStore: DataStore<RealEstateListingModel>;
  private detailsDataStore: DataStore<RealEstateDetailsModel>;

  constructor(private http: HttpClient) { }

  public getListingDataSource(): Observable<RealEstateListingModel> {
    return this.http.get<RealEstateListingModel>('./assets/sample-data/real-estate/listing.json')
    .pipe(
      map(
        (data: RealEstateListingModel) => {
          // Note: HttpClient cannot know how to instantiate a class for the returned data
          // We need to properly cast types from json data
          const listing = new RealEstateListingModel();

          // The Object.assign() method copies all enumerable own properties from one or more source objects to a target object.
          // Note: If you have non-enummerable properties, you can try a spread operator instead. listing = {...data};
          // (see: https://scotch.io/bar-talk/copying-objects-in-javascript#toc-using-spread-elements-)
          Object.assign(listing, data);

          return listing;
        }
      )
    );
  }

  public getListingStore(dataSource: Observable<RealEstateListingModel>): DataStore<RealEstateListingModel> {
    // Use cache if available
    if (!this.listingDataStore) {
      // Initialize the model specifying that it is a shell model
      const shellModel: RealEstateListingModel = new RealEstateListingModel();
      this.listingDataStore = new DataStore(shellModel);
      // Trigger the loading mechanism (with shell) in the dataStore
      this.listingDataStore.load(dataSource);
    }
    return this.listingDataStore;
  }

  public getDetailsDataSource(): Observable<RealEstateDetailsModel> {
    return this.http.get<RealEstateDetailsModel>('./assets/sample-data/real-estate/details.json')
    .pipe(
      map(
        (data: RealEstateDetailsModel) => {
          // Note: HttpClient cannot know how to instantiate a class for the returned data
          // We need to properly cast types from json data
          const details = new RealEstateDetailsModel();

          // The Object.assign() method copies all enumerable own properties from one or more source objects to a target object.
          // Note: If you have non-enummerable properties, you can try a spread operator instead. details = {...data};
          // (see: https://scotch.io/bar-talk/copying-objects-in-javascript#toc-using-spread-elements-)
          Object.assign(details, data);

          return details;
        }
      )
    );
  }

  public getDetailsStore(dataSource: Observable<RealEstateDetailsModel>): DataStore<RealEstateDetailsModel> {
    // Use cache if available
    if (!this.detailsDataStore) {
      // Initialize the model specifying that it is a shell model
      const shellModel: RealEstateDetailsModel = new RealEstateDetailsModel();
      this.detailsDataStore = new DataStore(shellModel);
      // Trigger the loading mechanism (with shell) in the dataStore
      this.detailsDataStore.load(dataSource);
    }
    return this.detailsDataStore;
  }
}
