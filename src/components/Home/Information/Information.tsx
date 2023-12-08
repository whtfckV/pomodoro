import { FC } from "react";
import { InformationList } from "./InformationList";
import styles from './Information.module.css'
import { FirstHeading } from "src/components/FirstHeading";

export const Information: FC = () => {
  return (
    <article>
      <FirstHeading headingClass={styles.title}>
        Ура! Теперь можно начать работать:
      </FirstHeading>
      <InformationList />
    </article>
  );
}
