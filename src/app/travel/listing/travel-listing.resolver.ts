import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';

import { DataStore } from '../../shell/data-store';
import { TravelService } from '../travel.service';
import { TravelListingModel } from './travel-listing.model';

@Injectable()
export class TravelListingResolver implements Resolve<DataStore<TravelListingModel>> {

  constructor(private travelService: TravelService) {}

  resolve(): DataStore<TravelListingModel> {
    const dataSource: Observable<TravelListingModel> = this.travelService.getListingDataSource();
    const dataStore: DataStore<TravelListingModel> = this.travelService.getListingStore(dataSource);

    return dataStore;
  }
}
