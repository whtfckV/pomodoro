import { FC, ReactNode, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { Btn, EType } from "../Btn";
import { EIcons, Icon } from "../Icon";
import styles from './Popup.module.css';

interface IPopupProps {
  children: ReactNode
  onClose: () => void
}

export const Popup: FC<IPopupProps> = ({ children, onClose }) => {
  const ref = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    ref.current?.showModal()

    const handleClickDoc = (event: MouseEvent) => {
      if (event.target === ref.current) {
        close()
      }
    }

    document.addEventListener('click', handleClickDoc)
    return () => {
      document.removeEventListener('click', handleClickDoc)
    }
  })

  const close = () => {
    ref.current?.close()
    onClose()
  }

  const node = document.getElementById('modal')!

  return createPortal((
    <dialog className={styles.popup} ref={ref} onClose={close}>
      <div className={styles.content}>
        <Btn styleType={EType.iconOnly} className={styles.btn} onClick={close}>
          <Icon name={EIcons.cross} />
        </Btn>
        {children}
        <button className={styles.cancel} onClick={close}>Отмена</button>
      </div>
    </dialog>
  ), node);
}
