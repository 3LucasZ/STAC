export class Translator {
  locale: string;
  constructor(locale: string) {
    this.locale = locale;
  }
  get(json: any) {
    if (this.locale == "en") {
      return json.en;
    } else {
      return json.zh;
    }
  }
}
