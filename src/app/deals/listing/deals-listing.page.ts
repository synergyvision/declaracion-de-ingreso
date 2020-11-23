import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { IResolvedRouteData, ResolverHelper } from '../../utils/resolver-helper';
import { DealsListingModel } from './deals-listing.model';

@Component({
  selector: 'app-deals-listing',
  templateUrl: './deals-listing.page.html',
  styleUrls: [
    './styles/deals-listing.page.scss',
    './styles/deals-listing.shell.scss',
    './styles/deals-listing.ios.scss'
  ]
})
export class DealsListingPage implements OnInit {
  // Gather all component subscription in one place. Can be one Subscription or multiple (chained using the Subscription.add() method)
  subscriptions: Subscription;

  listing: DealsListingModel;

  @HostBinding('class.is-shell') get isShell() {
    return (this.listing && this.listing.isShell) ? true : false;
  }

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // On init, the route subscription is the active subscription
    this.subscriptions = this.route.data
    .subscribe(
      (resolvedRouteData: IResolvedRouteData<DealsListingModel>) => {
        // Route subscription resolved, now the active subscription is the Observable extracted from the resolved route data
        this.subscriptions = ResolverHelper.extractData<DealsListingModel>(resolvedRouteData.data, DealsListingModel)
        .subscribe(
          (state) => {
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
    this.subscriptions.unsubscribe();
  }
}
