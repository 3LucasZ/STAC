export function translate(json: any, locale: string) {
  if (locale == "en") {
    return json.en;
  } else {
    return json.zh;
  }
}
