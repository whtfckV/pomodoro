import { FC } from "react";
import styles from "./TaskInformation.module.css";
import { EColor, Text } from "src/components/Text";

interface ITaskInformationProps {
}

export const TaskInformation: FC<ITaskInformationProps> = () => {
  return (
    <div className={styles.info}>
      <Text As='h2' size={16} weight={700} color={EColor.white}>
        Сверстать сайт
      </Text>
      <Text As='span' size={16} weight={400} color={EColor.white}>
        Помидор 1
      </Text>
    </div>
  );
};
