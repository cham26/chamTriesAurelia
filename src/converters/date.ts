import * as moment from "moment";

export class DateFormatValueConverter {
   toView(value: string) {
      let parsedDate = value.substring(0, 10).split('-')
      return `${parsedDate[1]}/${parsedDate[2]}/${parsedDate[0]}`
   }
}
