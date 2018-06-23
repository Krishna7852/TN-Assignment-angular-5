import { Injectable } from '@angular/core';

@Injectable()
export class SpeechService {
  public getAll() {
    return this.getSpeeches();
  }

  public getById(id: number) {
    return this.getSpeeches().find(product => product.id === id);
  }

  public save(speech: any) {
    let allSpeech = this.getSpeeches();
    if (speech.id) {
      // update existing speech
      for (var i = 0; i < allSpeech.length; i++) {
        if (allSpeech[i].id === speech.id) {
          allSpeech[i] = speech;
          break;
        }
      }
      this.setSpeeches(allSpeech);
    } else {
      // assign id
      const lastProduct = allSpeech[allSpeech.length - 1] || {id: 0};
      speech.id = lastProduct.id + 1;
      allSpeech.push(speech);
      this.setSpeeches(allSpeech);
    }
  }

  public deleteSpeech(id: number) {
    let speeches = this.getSpeeches();
    speeches = speeches.filter((speech) => speech.id !== id);
    this.setSpeeches(speeches);
  }

  // private helper methods

  private getSpeeches(): any[] {
    if (!localStorage.getItem('speeches')) {
      localStorage.setItem('speeches', JSON.stringify([]));
    }

    return JSON.parse(localStorage.getItem('speeches'));
  }

  private setSpeeches(products: any[]) {
    localStorage.setItem('speeches', JSON.stringify(products));
  }
}
