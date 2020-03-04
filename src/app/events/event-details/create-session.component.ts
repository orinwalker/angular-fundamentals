import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ISession } from '../shared';

@Component({
  selector: 'app-create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.css']
})
export class CreateSessionComponent implements OnInit {

  newSessionForm: FormGroup;
  name: FormControl;
  presenter: FormControl;
  duration: FormControl;
  level: FormControl;
  abstract: FormControl;

  constructor() { }

  ngOnInit() {
    this.name = new FormControl('', Validators.required);
    this.presenter = new FormControl('', Validators.required);
    this.duration = new FormControl('', Validators.required);
    this.level = new FormControl('', Validators.required);
    this.abstract = new FormControl('', [Validators.required, Validators.maxLength(400), this.restrictedWords(['foo', 'bar'])]);

    this.newSessionForm = new FormGroup({
      name: this.name,
      presenter: this.presenter,
      duration: this.duration,
      level: this.level,
      abstract: this.abstract
    });
  }

  // private restrictedWords(control: FormControl): { [key: string]: any } {
  //   return control.value.includes('foo') ?
  //   { restrictedWords : 'foo'}
  //   : null;
  // }

  saveSession(formValues) {
    // console.log(formValues);
    const session: ISession = {
      id: undefined,
      name: formValues.name,
      duration: +formValues.duration,
      level: formValues.level,
      presenter: formValues.presenter,
      abstract: formValues.abstract,
      voters: []
    };
    console.log(session);
  }

  private restrictedWords(words) {
    return (control: FormControl): {[key: string]: any} => {
      if (!words) {
        return null;
      }
      const invalidWords = words.map(w => control.value.includes(w) ? w : null).filter(w => w != null);

      return invalidWords && invalidWords.length > 0 ? {restrictedWords: invalidWords.join(', ')} : null;
  };
}



}
