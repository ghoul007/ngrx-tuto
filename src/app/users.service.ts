import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from '@ngrx/data';

@Injectable({ providedIn: 'root' })
export class UserService extends EntityCollectionServiceBase<any> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('User', serviceElementsFactory);
  }
}