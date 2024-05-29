export enum ESize {
  short = 'short',
  middle = 'middle',
  long = 'long'
}
export function timeConvert(data: number, size: ESize = ESize.middle): string {
  const hours = data / 60;
  const rhours = Math.floor(hours);

  const minutes = (hours - rhours) * 60;
  const rminutes = Math.round(minutes);

  let hoursString = 'час';
  let minutesString = 'мин';

  switch (size) {
    case ESize.short:
      hoursString = 'ч';
      minutesString = 'м';
      break;
    case ESize.middle:
      if (rhours > 1) {
        hoursString = hoursString + 'а';
      }
      if (rhours > 4) {
        hoursString = hoursString + 'ов';
      }
      break;
    case ESize.long:
      minutesString = 'минута';
      if (rminutes > 1) {
        minutesString = 'минуты';
      }
      if (rminutes > 4) {
        minutesString = 'минут';
      }
      if (rhours > 1) {
        hoursString = 'часа';
      }
      if (rhours > 4) {
        hoursString = 'часов';
      }
      break;
  }


  return `${rhours ? `${rhours} ${hoursString}` : ''} ${rminutes} ${minutesString}`;
}
