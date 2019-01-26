import { Injectable } from '@angular/core';
import { Friend } from './friend';
import { FRIENDS } from './mock-friends';
import { Observable } from 'rxjs/Observable'
import { of } from 'rxjs/observable/of'
import { MessageService } from './message.service';


@Injectable()
export class FriendService {

  getFriends(): Observable<Friend[]> {
    this.messageService.add('FriendService: fetched friends');
    return of(FRIENDS);
  }

  constructor(private messageService: MessageService) { }

}

