import { FC } from "react";
import { Btn, EType } from "src/components/Btn";
import { useAppDispatch, useAppSelector } from "src/store/hooks";
import { EProgress, stopTimer } from "src/store/timerSlice";

interface IStopBtnProps { }

export const StopBtn: FC<IStopBtnProps> = () => {
  const state = useAppSelector(state => state.timer.progress)
  const dispatch = useAppDispatch()

  const handleStop = () => {
    dispatch(stopTimer())
  }

  let btnType

  const setBtnType = () => {
    switch (state) {
      case EProgress.work:
        btnType = EType.red
        break;
      case EProgress.work:
        btnType = EType.red
        break;
      default:
        break;
    }
  }

  return (
    <Btn onClick={handleStop} styleType={EType.grey}>Стоп</Btn>
  );
};
