export enum ESize {
  short = 'short',
  middle = 'middle',
  long = 'long'
}
export function timeConvert(milliseconds: number, size: ESize = ESize.middle): string {
  const hours = milliseconds / 1000 / 60 / 60;
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
        hoursString = 'часа';
      }
      if (rhours > 4) {
        hoursString = 'часов';
      }
      break;
    case ESize.long:
      hoursString = 'часа';
      if ((rminutes - 1) % 10 === 0 && rminutes !== 11) {
        minutesString = 'минуты';
      } else {
        minutesString = 'минут';
      }
      if (rhours > 1) {
        hoursString = 'часов';
      }
      break;
  }


  return ` ${rhours ? `${rhours} ${hoursString}` : ''}` + ` ${rminutes ? `${rminutes} ${minutesString}` : ''}`;
}
