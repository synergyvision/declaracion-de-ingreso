import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { DataStore } from '../shell/data-store';
import { FashionListingModel } from './listing/fashion-listing.model';
import { FashionDetailsModel } from './details/fashion-details.model';

@Injectable()
export class FashionService {
  private listingDataStore: DataStore<FashionListingModel>;
  private detailsDataStore: DataStore<FashionDetailsModel>;

  constructor(private http: HttpClient) { }

  public getListingDataSource(): Observable<FashionListingModel> {
    return this.http.get<FashionListingModel>('./assets/sample-data/fashion/listing.json')
    .pipe(
      map(
        (data: FashionListingModel) => {
          // Note: HttpClient cannot know how to instantiate a class for the returned data
          // We need to properly cast types from json data
          const listing = new FashionListingModel();

          // The Object.assign() method copies all enumerable own properties from one or more source objects to a target object.
          // Note: If you have non-enummerable properties, you can try a spread operator instead. listing = {...data};
          // (see: https://scotch.io/bar-talk/copying-objects-in-javascript#toc-using-spread-elements-)
          Object.assign(listing, data);

          return listing;
        }
      )
    );
  }

  public getListingStore(dataSource: Observable<FashionListingModel>): DataStore<FashionListingModel> {
    // Use cache if available
    if (!this.listingDataStore) {
      // Initialize the model specifying that it is a shell model
      const shellModel: FashionListingModel = new FashionListingModel();
      this.listingDataStore = new DataStore(shellModel);
      // Trigger the loading mechanism (with shell) in the dataStore
      this.listingDataStore.load(dataSource);
    }
    return this.listingDataStore;
  }

  public getDetailsDataSource(): Observable<FashionDetailsModel> {
    return this.http.get<FashionDetailsModel>('./assets/sample-data/fashion/details.json')
    .pipe(
      map(
        (data: FashionDetailsModel) => {
          // Note: HttpClient cannot know how to instantiate a class for the returned data
          // We need to properly cast types from json data
          const details = new FashionDetailsModel();

          // The Object.assign() method copies all enumerable own properties from one or more source objects to a target object.
          // Note: If you have non-enummerable properties, you can try a spread operator instead. details = {...data};
          // (see: https://scotch.io/bar-talk/copying-objects-in-javascript#toc-using-spread-elements-)
          Object.assign(details, data);

          return details;
        }
      )
    );
  }

  public getDetailsStore(dataSource: Observable<FashionDetailsModel>): DataStore<FashionDetailsModel> {
    // Use cache if available
    if (!this.detailsDataStore) {
      // Initialize the model specifying that it is a shell model
      const shellModel: FashionDetailsModel = new FashionDetailsModel();
      this.detailsDataStore = new DataStore(shellModel);
      // Trigger the loading mechanism (with shell) in the dataStore
      this.detailsDataStore.load(dataSource);
    }
    return this.detailsDataStore;
  }

}
