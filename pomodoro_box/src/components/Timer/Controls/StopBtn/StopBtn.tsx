import { FC } from "react";
import { Btn, EType } from "src/components/Btn";
import { useAppDispatch, useAppSelector } from "src/store/hooks";
import { stopTimer } from "src/store/timerSlice";

interface IStopBtnProps { }

export const StopBtn: FC<IStopBtnProps> = () => {
  const started = useAppSelector(state => state.timer.started)
  const dispatch = useAppDispatch()

  const handleStop = () => {
    dispatch(stopTimer())
  }

  return (
    <Btn onClick={handleStop} styleType={started ? EType.red : EType.grey}>Стоп</Btn>
  );
};
