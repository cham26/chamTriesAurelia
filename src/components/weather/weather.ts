import { WeatherResource } from '../../services/weather.resource';
import { inject } from 'aurelia-framework';
import * as moment from "moment";

@inject(WeatherResource)
export class Weather {
  weatherData: Object[];
  gettingData: Boolean;
  constructor(private weatherResource: WeatherResource) {
    this.callWeatherService('cdOhDWyEfC');
  }

  callWeatherService(buttonName) {
    this.gettingData = true;
    this.weatherResource.getWeather(buttonName)
      .then((response) => {
        this.weatherData = response
        this.gettingData = false;
      })

  }

  splittedPhoneNumber(phoneNumber): string {
    return phoneNumber.substring(9); // to remove code
  }

  roundedOffBalance(roundedBalance): string {
    // let test  = roundedBalance.substring(1, roundedBalance.length -3)
    // console.log(test.split(',').join(''))
    // return roundedBalance.substring(0, roundedBalance.length -3); // string method one
    return roundedBalance.slice(0, -3) // slice works with minus index values
    // return  `$ ${roundedBalance.substring(1, roundedBalance.length -3).split(',').join('.')}`  // stupid way dont do it just to show what happens
}

  mailToPerson(email): string {
    return `mailto:${email}`
  }
}

