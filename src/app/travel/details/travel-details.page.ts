import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { IResolvedRouteData, ResolverHelper } from '../../utils/resolver-helper';
import { TravelDetailsModel } from './travel-details.model';

@Component({
  selector: 'app-travel-details',
  templateUrl: './travel-details.page.html',
  styleUrls: [
    './styles/travel-details.page.scss',
    './styles/travel-details.shell.scss'
  ]
})
export class TravelDetailsPage implements OnInit {
  // Gather all component subscription in one place. Can be one Subscription or multiple (chained using the Subscription.add() method)
  subscriptions: Subscription;

  details: TravelDetailsModel;

  @HostBinding('class.is-shell') get isShell() {
    return (this.details && this.details.isShell) ? true : false;
  }

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // On init, the route subscription is the active subscription
    this.subscriptions = this.route.data
    .subscribe(
      (resolvedRouteData: IResolvedRouteData<TravelDetailsModel>) => {
        // Route subscription resolved, now the active subscription is the Observable extracted from the resolved route data
        this.subscriptions = ResolverHelper.extractData<TravelDetailsModel>(resolvedRouteData.data, TravelDetailsModel)
        .subscribe(
          (state) => {
            this.details = state;
          },
          (error) => {}
        );
      },
      (error) => {}
    );
  }

  // NOTE: Ionic only calls ngOnDestroy if the page was popped (ex: when navigating back)
  // Since ngOnDestroy might not fire when you navigate from the current page, use ionViewWillLeave to cleanup Subscriptions
  ionViewWillLeave(): void {
    // console.log('TravelListingPage [ionViewWillLeave]');
    this.subscriptions.unsubscribe();
  }
}
