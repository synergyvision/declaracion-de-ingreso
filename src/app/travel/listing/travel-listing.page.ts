import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { IResolvedRouteData, ResolverHelper } from '../../utils/resolver-helper';
import { TravelListingModel } from './travel-listing.model';
// import { delay, finalize } from 'rxjs/operators';

@Component({
  selector: 'app-travel-listing',
  templateUrl: './travel-listing.page.html',
  styleUrls: [
    './styles/travel-listing.page.scss',
    './styles/travel-listing.shell.scss'
  ]
})
export class TravelListingPage implements OnInit {
  // Gather all component subscription in one place. Can be one Subscription or multiple (chained using the Subscription.add() method)
  subscriptions: Subscription;

  listing: TravelListingModel;

  @HostBinding('class.is-shell') get isShell() {
    return (this.listing && this.listing.isShell) ? true : false;
  }

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // On init, the route subscription is the active subscription
    this.subscriptions = this.route.data
    // .pipe(
    //   delay(2000),
    //   finalize(() => console.log('dataSubscription [finalize()]'))
    // )
    .subscribe(
      (resolvedRouteData: IResolvedRouteData<TravelListingModel>) => {
        // Route subscription resolved, now the active subscription is the Observable extracted from the resolved route data
        this.subscriptions = ResolverHelper.extractData<TravelListingModel>(resolvedRouteData.data, TravelListingModel)
        // .pipe(
        //   delay(8000),
        //   finalize(() => console.log('listingDataStore.subscribe [finalize()]'))
        // )
        .subscribe(
          (state) => {
            // console.log('GOT STATE');
            this.listing = state;
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
