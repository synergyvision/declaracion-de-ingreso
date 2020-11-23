import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';

import { DataStore } from '../../shell/data-store';
import { TravelService } from '../travel.service';
import { TravelDetailsModel } from './travel-details.model';

@Injectable()
export class TravelDetailsResolver implements Resolve<DataStore<TravelDetailsModel>> {

  constructor(private travelService: TravelService) {}

  resolve(): DataStore<TravelDetailsModel> {
    const dataSource: Observable<TravelDetailsModel> = this.travelService.getDetailsDataSource();
    const dataStore: DataStore<TravelDetailsModel> = this.travelService.getDetailsStore(dataSource);

    return dataStore;
  }
}
