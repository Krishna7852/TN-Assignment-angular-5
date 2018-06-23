import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Speech } from '../../dashboard/constants/speech';
import { PublishService } from '../../dashboard/services/publish.service';
import { SpeechService } from '../../dashboard/services/speech.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit, OnDestroy {
  public menuItems: Speech[] = [];
  private subscription: Subscription;

  constructor(private _speechService: SpeechService,
              private _publishService: PublishService) {
  }

  public ngOnInit() {
    this.loadSpeeches();
    this.subscription = this._publishService.on('speech-updated').subscribe((item) => {
      this.loadSpeeches();
    });
  }

  public ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public onClickItem(speech: Speech): void {
    this._publishService.select(speech);
  }

  private loadSpeeches(): void {
    this.menuItems = this._speechService.getAll();
  }
}
