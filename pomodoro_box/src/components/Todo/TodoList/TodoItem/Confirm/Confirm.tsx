import { FC, useEffect } from "react";
import { Btn, EType } from "src/components/Btn";
import { Text } from "src/components/Text";
import styles from './Confirm.module.css';

interface IConfirmProps {
  onConfirm: () => void
}

export const Confirm: FC<IConfirmProps> = ({ onConfirm }) => {

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      console.log(event)
      if (event.key === 'Enter') {
        onConfirm()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
    }
  })

  return (
    <>
      <Text className={styles.title} As='h3' size={24} weight={400} >Удалить задачу?</Text>
      <Btn onClick={onConfirm} styleType={EType.redFill}>Удалить</Btn>
    </>
  )
}
