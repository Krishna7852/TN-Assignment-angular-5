import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Speech } from '../../dashboard/constants/speech';
import { PublishService } from '../../dashboard/services/publish.service';
import { SpeechService } from '../../dashboard/services/speech.service';

@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.scss']
})
export class FormModalComponent implements OnInit, OnDestroy {
  public speech: Speech;
  private _menuSubscription$: Subscription;

  constructor(private _speechService: SpeechService,
              private _publishService: PublishService) {
    this._sideMenuObserver = this._sideMenuObserver.bind(this);
  }

  public ngOnInit() {
    this._menuSubscription$ = this._publishService.selectedSpeech.subscribe(this._sideMenuObserver);
    this.resetForm();
  }

  public ngOnDestroy() {
    this._menuSubscription$.unsubscribe();
  }

  public saveSpeech(speech: Speech): void {
    this._speechService.save(speech);
    this.resetForm();
    this._publishService.publish('speech-updated');
  }

  public resetForm(): void {
    this.speech = <Speech> {};
  }

  public deleteSpeech(speech): void {
    this._speechService.deleteSpeech(speech.id);
    this.resetForm();
    this._publishService.publish('speech-updated');
  }

  private _sideMenuObserver(selectedSpeech): void {
    this.speech = selectedSpeech;
  }
}
