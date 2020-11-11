import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { DataStore } from '../shell/data-store';
import { TravelListingModel } from './listing/travel-listing.model';
import { TravelDetailsModel } from './details/travel-details.model';

@Injectable()
export class TravelService {
  private listingDataStore: DataStore<TravelListingModel>;
  private detailsDataStore: DataStore<TravelDetailsModel>;

  constructor(private http: HttpClient) { }

  public getListingDataSource(): Observable<TravelListingModel> {
    return this.http.get<TravelListingModel>('./assets/sample-data/travel/listing.json')
    .pipe(
      map(
        (data: TravelListingModel) => {
          // Note: HttpClient cannot know how to instantiate a class for the returned data
          // We need to properly cast types from json data
          const listing = new TravelListingModel();

          // The Object.assign() method copies all enumerable own properties from one or more source objects to a target object.
          // Note: If you have non-enummerable properties, you can try a spread operator instead. listing = {...data};
          // (see: https://scotch.io/bar-talk/copying-objects-in-javascript#toc-using-spread-elements-)
          Object.assign(listing, data);

          return listing;
        }
      )
    );
  }

  public getListingStore(dataSource: Observable<TravelListingModel>): DataStore<TravelListingModel> {
    // Use cache if available
    if (!this.listingDataStore) {
      // Initialize the model specifying that it is a shell model
      const shellModel: TravelListingModel = new TravelListingModel();
      this.listingDataStore = new DataStore(shellModel);
      // Trigger the loading mechanism (with shell) in the dataStore
      this.listingDataStore.load(dataSource);
    }
    return this.listingDataStore;
  }

  public getDetailsDataSource(): Observable<TravelDetailsModel> {
    return this.http.get<TravelDetailsModel>('./assets/sample-data/travel/details.json')
    .pipe(
      map(
        (data: TravelDetailsModel) => {
          // Note: HttpClient cannot know how to instantiate a class for the returned data
          // We need to properly cast types from json data
          const details = new TravelDetailsModel();

          // The Object.assign() method copies all enumerable own properties from one or more source objects to a target object.
          // Note: If you have non-enummerable properties, you can try a spread operator instead. details = {...data};
          // (see: https://scotch.io/bar-talk/copying-objects-in-javascript#toc-using-spread-elements-)
          Object.assign(details, data);

          return details;
        }
      )
    );
  }

  public getDetailsStore(dataSource: Observable<TravelDetailsModel>): DataStore<TravelDetailsModel> {
    // Use cache if available
    if (!this.detailsDataStore) {
      // Initialize the model specifying that it is a shell model
      const shellModel: TravelDetailsModel = new TravelDetailsModel();
      this.detailsDataStore = new DataStore(shellModel);
      // Trigger the loading mechanism (with shell) in the dataStore
      this.detailsDataStore.load(dataSource);
    }
    return this.detailsDataStore;
  }
}

