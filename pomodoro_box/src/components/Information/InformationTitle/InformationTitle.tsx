import { ReactElement } from 'react';
import Text from '../../Text/Text';

export default function InformationTitle(): ReactElement {
  return (
    <Text size={24} As='h2' weight={700}>
      Ура! Теперь можно начать работать:
    </Text>
  );
}
