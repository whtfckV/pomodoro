import { FC } from 'react';
import Text from 'src/components/Text/Text';
import styles from './InformationTitle.module.css'

const InformationTitle: FC = () => {
  return (
    <Text size={24} As='h2' weight={700} className={styles.title}>
      Ура! Теперь можно начать работать:
    </Text>
  );
}

export default InformationTitle
