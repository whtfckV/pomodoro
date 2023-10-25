import { FC } from 'react';
import { Text } from 'src/components/Text';
import styles from './InformationTitle.module.css'

export const InformationTitle: FC = () => {
  return (
    <Text size={24} As='h2' weight={700} className={styles.title}>
      Ура! Теперь можно начать работать:
    </Text>
  );
}
