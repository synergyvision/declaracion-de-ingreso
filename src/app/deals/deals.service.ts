import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import * as dayjs from 'dayjs';

import { DataStore } from '../shell/data-store';
import { DealsListingModel } from './listing/deals-listing.model';
import { DealsDetailsModel } from './details/deals-details.model';

@Injectable()
export class DealsService {
  private listingDataStore: DataStore<DealsListingModel>;
  private detailsDataStore: DataStore<DealsDetailsModel>;

  constructor(private http: HttpClient) { }

  get relativeDates(): Array<string> {
    return [
      dayjs().add(1, 'day').add(8, 'hour').add(10, 'second').format('MM/DD/YYYY HH:mm:ss') as string,
      dayjs().add(7, 'day').format('MM/DD/YYYY') as string,
      dayjs().subtract(1, 'month').format('MM/DD/YYYY') as string,
      dayjs().add(2, 'month').format('MM/DD/YYYY') as string
    ];
  }

  public getListingDataSource(): Observable<DealsListingModel> {
    return this.http.get<DealsListingModel>('./assets/sample-data/deals/listing.json')
    .pipe(
      map(
        (data: DealsListingModel) => {
          // Using rest operator to divide the data (see: https://dev.to/napoleon039/how-to-use-the-spread-and-rest-operator-4jbb)
          const {items, ...otherData} = data;

          const itemsWithRelativeDates = items.map((dealItem, index) => {
            // Relative date (better to showcase UI micro-interactions)
            return {...dealItem, expirationDate: this.relativeDates[index]};
          });

          // Using spread operator to concat the data (see: https://dev.to/napoleon039/how-to-use-the-spread-and-rest-operator-4jbb)
          const updatedListingData = {...otherData, items: itemsWithRelativeDates};

          // Note: HttpClient cannot know how to instantiate a class for the returned data
          // We need to properly cast types from json data
          const listing = new DealsListingModel();

          // The Object.assign() method copies all enumerable own properties from one or more source objects to a target object.
          // Note: If you have non-enummerable properties, you can try a spread operator instead. listing = {...data};
          // (see: https://scotch.io/bar-talk/copying-objects-in-javascript#toc-using-spread-elements-)
          Object.assign(listing, updatedListingData);

          return listing;
        }
      )
    );
  }

  public getListingStore(dataSource: Observable<DealsListingModel>): DataStore<DealsListingModel> {
    // Use cache if available
    if (!this.listingDataStore) {
      // Initialize the model specifying that it is a shell model
      const shellModel: DealsListingModel = new DealsListingModel();
      this.listingDataStore = new DataStore(shellModel);
      // Trigger the loading mechanism (with shell) in the dataStore
      this.listingDataStore.load(dataSource);
    }
    return this.listingDataStore;
  }

  public getDetailsDataSource(): Observable<DealsDetailsModel> {
    return this.http.get<DealsDetailsModel>('./assets/sample-data/deals/details.json')
    .pipe(
      map(
        (data: DealsDetailsModel) => {
          const expirationDate = dayjs().add(1, 'day').add(8, 'hour').add(10, 'second').format('MM/DD/YYYY HH:mm:ss') as string;
          const updatedDetailsData = {...data, expirationDate};

          // Note: HttpClient cannot know how to instantiate a class for the returned data
          // We need to properly cast types from json data
          const details = new DealsDetailsModel();

          // The Object.assign() method copies all enumerable own properties from one or more source objects to a target object.
          // Note: If you have non-enummerable properties, you can try a spread operator instead. details = {...data};
          // (see: https://scotch.io/bar-talk/copying-objects-in-javascript#toc-using-spread-elements-)
          Object.assign(details, updatedDetailsData);

          return details;
        }
      )
    );
  }

  public getDetailsStore(dataSource: Observable<DealsDetailsModel>): DataStore<DealsDetailsModel> {

    // Initialize the model specifying that it is a shell model
    const shellModel: DealsDetailsModel = new DealsDetailsModel();
    this.detailsDataStore = new DataStore(shellModel);
    // Trigger the loading mechanism (with shell) in the dataStore
    this.detailsDataStore.load(dataSource);

    return this.detailsDataStore;
  }

}
