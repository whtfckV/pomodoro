import { FC } from 'react';
import { generateId } from '../../../../utils/ts/GenerateRandomIndex';
import { Text } from "src/components/Text";
import { GenericList, IItem } from 'src/components/GenericLIst';
import styles from './InformationList.module.css'


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
  className: styles.listItem,
})

export const InformationList: FC = () => {
  return (
    <ul className={styles.list}>
      <GenericList list={list.map(createItem)} />
    </ul>
  );
}
