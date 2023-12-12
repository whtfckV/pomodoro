import { FC } from "react";
import { InformationList } from "./InformationList";
import { Text } from "src/components/Text";
import styles from './Information.module.css'

export const Information: FC = () => {
  return (
    <article>
      <Text size={24} As='h2' weight={700} className={styles.title}>
        Ура! Теперь можно начать работать:
      </Text>
      <InformationList />
    </article>
  );
}
