import * as moment from "moment";

export class footerCustomElement {

    today: string
    constructor() {
        this.today = moment().format('MM/DD/YYYY');
    }
}