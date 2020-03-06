import { Directive } from '@angular/core';
import { Validator, FormGroup, AbstractControl, NG_VALIDATORS } from '@angular/forms';
import { CompileShallowModuleMetadata } from '@angular/compiler';

@Directive({
  selector: '[appLocationValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: LocationValidatorDirective, multi: true}]
})
export class LocationValidatorDirective implements Validator {

  addressControl: AbstractControl;
  cityControl: AbstractControl;
  countryControl: AbstractControl;
  onlineUrlControl: AbstractControl;

  constructor() { }

  validate(locationGroup: FormGroup): { [key: string]: any } {
    this.addressControl = locationGroup.controls.address;
    this.cityControl = locationGroup.controls.city;
    this.countryControl = locationGroup.controls.country;
    // this.onlineUrlControl = (<FormGroup>locationGroup.root).controls['onlineUrl'];
    // (locationGroup.root as FormGroup).controls.onlineUrl;
    this.onlineUrlControl = (locationGroup.root as FormGroup); // (locationGroup.root as FormGroup).controls.onlineUrl;

    // console.log(JSON.stringify(this.onlineUrlControl.));

    // this.onlineUrlControl = locationGroup.controls.onlineUrl;

    // const urlGroup = (locationGroup.root as FormGroup).controls;
    // console.log(onlineUrl.value);
    // console.log(urlGroup.onlineUrl.value);
    // const u = urlGroup.controls;
    // console.log('controls: ' + u);

    // console.log('onlineUrlControl ');
    // console.log(this.onlineUrlControl);

    // console.log('addressValid: ' + this.AddressValid, ', cityValid: ' + this.CityValid,
    //             ',countryValid: ' + this.CountryValid, ', onlineUrlValid: ' + this.OnlineUrlValid, );
    if ((this.AddressValid && this.CityValid && this.CountryValid) || this.OnlineUrlValid) {
      return null;
    } else {
      return { validateLocation: false };
    }
  }

  get AddressValid() {

    return !!this.addressControl && this.addressControl.value;
  }
  get CityValid() {
    return !!this.cityControl && this.cityControl.value;
  }
  get CountryValid() {
    return !!this.countryControl && this.countryControl.value;
  }
  get OnlineUrlValid() {
    // return !!this.onlineUrlControl && this.onlineUrlControl.value;

    // ORIN: I could not get this working
    return false;
  }
}
