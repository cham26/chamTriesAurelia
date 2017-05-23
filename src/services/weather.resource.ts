import { HttpClient } from 'aurelia-fetch-client';

export class WeatherResource {

  http: any;

  constructor() {
      this.http = new HttpClient().configure(x => {
      x.useStandardConfiguration()
    })
  }

  getWeather(id): Promise<Object[]> {
     let url = `http://www.json-generator.com/api/json/get/${id}?indent=2`
    return this.http.fetch(url)
      .then(data => data.json())
  }

  example(): void {
    let a = 'hi'
    let b: number = parseInt(a);
    console.log('hi')
  }
} 
