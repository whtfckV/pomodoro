export enum ESize {
  short = "short",
  middle = "middle",
  long = "long",
}
export function timeConvert(
  milliseconds: number | undefined,
  size: ESize = ESize.middle
): string | undefined {
  if (milliseconds === undefined) return milliseconds;

  const hours = milliseconds / 1000 / 60 / 60;
  const rhours = Math.floor(hours);

  const minutes = (hours - rhours) * 60;
  const rminutes = Math.round(minutes);

  let hoursString = "час";
  let minutesString = "мин";

  switch (size) {
    case ESize.short:
      hoursString = "ч";
      minutesString = "м";
      break;
    case ESize.middle:
      if (rhours > 1) {
        hoursString = "часа";
      }
      if (rhours > 4) {
        hoursString = "часов";
      }
      break;
    case ESize.long:
      hoursString = "часа";
      if ((rminutes - 1) % 10 === 0 && rminutes !== 11) {
        minutesString = "минуты";
      } else {
        minutesString = "минут";
      }
      if (rhours > 1) {
        hoursString = "часов";
      }
      break;
  }

  return (
    ` ${
      rhours ? `${rhours}${size === ESize.short ? "" : ""}${hoursString}` : ""
    }` +
    ` ${
      rminutes
        ? `${rminutes}${size === ESize.short ? "" : ""}${minutesString}`
        : ""
    }`
  );
}
