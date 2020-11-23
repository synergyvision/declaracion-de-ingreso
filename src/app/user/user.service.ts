import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { DataStore } from '../shell/data-store';
import { UserProfileModel } from './profile/user-profile.model';
import { UserFriendsModel } from './friends/user-friends.model';

@Injectable()
export class UserService {
  private profileDataStore: DataStore<UserProfileModel>;
  private friendsDataStore: DataStore<UserFriendsModel>;

  constructor(private http: HttpClient) { }

  public getProfileDataSource(): Observable<UserProfileModel> {
    return this.http.get<UserProfileModel>('./assets/sample-data/user/user-profile.json')
    .pipe(
      map(
        (data: UserProfileModel) => {
          // Note: HttpClient cannot know how to instantiate a class for the returned data
          // We need to properly cast types from json data
          const profile = new UserProfileModel();

          // The Object.assign() method copies all enumerable own properties from one or more source objects to a target object.
          // Note: If you have non-enummerable properties, you can try a spread operator instead. profile = {...data};
          // (see: https://scotch.io/bar-talk/copying-objects-in-javascript#toc-using-spread-elements-)
          Object.assign(profile, data);

          return profile;
        }
      )
    );
  }

  public getProfileStore(dataSource: Observable<UserProfileModel>): DataStore<UserProfileModel> {
    // Use cache if available
    if (!this.profileDataStore) {
      // Initialize the model specifying that it is a shell model
      const shellModel: UserProfileModel = new UserProfileModel();
      this.profileDataStore = new DataStore(shellModel);
      // Trigger the loading mechanism (with shell) in the dataStore
      this.profileDataStore.load(dataSource);
    }
    return this.profileDataStore;
  }

  public getFriendsDataSource(): Observable<UserFriendsModel> {
    return this.http.get<UserFriendsModel>('./assets/sample-data/user/user-friends.json')
    .pipe(
      map(
        (data: UserFriendsModel) => {
          // Note: HttpClient cannot know how to instantiate a class for the returned data
          // We need to properly cast types from json data
          const friends = new UserFriendsModel();

          // The Object.assign() method copies all enumerable own properties from one or more source objects to a target object.
          // Note: If you have non-enummerable properties, you can try a spread operator instead. friends = {...data};
          // (see: https://scotch.io/bar-talk/copying-objects-in-javascript#toc-using-spread-elements-)
          Object.assign(friends, data);

          return friends;
        }
      )
    );
  }

  public getFriendsStore(dataSource: Observable<UserFriendsModel>): DataStore<UserFriendsModel> {
    // Use cache if available
    if (!this.friendsDataStore) {
      // Initialize the model specifying that it is a shell model
      const shellModel: UserFriendsModel = new UserFriendsModel();
      this.friendsDataStore = new DataStore(shellModel);
      // Trigger the loading mechanism (with shell) in the dataStore
      this.friendsDataStore.load(dataSource);
    }
    return this.friendsDataStore;
  }

}
