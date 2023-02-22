export default class DateHelper {
  public static getDayOfWeekString(dayOfWeek: number){
    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    return days[ dayOfWeek ];
  }
}
