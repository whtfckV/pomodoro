import { generateId } from '../../../utils/ts/GenerateRandomIndex';
import GenericList, { IItem } from "../../GenericLIst/GenericList";
import Text from "../../Text/Text";
import classes from './InformationList.module.css'


const list: string[] = [
  'Выберите категорию и напишите название текущей задачи',
  'Запустите таймер («помидор»)',
  'Работайте пока «помидор» не прозвонит',
  'Сделайте короткий перерыв (3-5 минут)',
  'Продолжайте работать «помидор» за «помидором», пока задача не будут выполнена. Каждые 4 «помидора» делайте длинный перерыв (15-30 минут).',
];

const createItem = (text: string): IItem => generateId({
  As: 'li',
  element: <Text As='span' size={16} weight={400}>{text}</Text>,
  className: classes.listItem,
})

export default function InformationList() {
  return (
    <ul className={classes.list}>
      <GenericList list={list.map(createItem)} />
    </ul>
  );
}
