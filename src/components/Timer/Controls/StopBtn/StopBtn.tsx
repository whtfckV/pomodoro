import { FC, useEffect, useState } from "react";
import { Btn, EType } from "src/components/Btn";
import { useAppDispatch, useAppSelector } from "src/store/hooks";
import { EProgress, resetTimer, skipPause, stopTimer } from "src/store/timerSlice";
import { removeTodo } from "src/store/todoSlice";

interface IStopBtnProps { }

export const StopBtn: FC<IStopBtnProps> = () => {
  const activeTodoId = useAppSelector(state => state.todos.todos[0].id)
  const { started, progress } = useAppSelector(state => state.timer)
  const dispatch = useAppDispatch()
  const [btnText, setBtnText] = useState<string>('Стоп')

  useEffect(() => {
    setBtnText(getIncription(progress!))
  }, [progress])

  const getIncription = (progressType: EProgress) => {
    switch (progressType) {
      case EProgress.work:
        return 'Стоп'
      case EProgress.workPause:
        return 'Сделано'
      case EProgress.breakPause:
      case EProgress.break:
        return 'Пропустить'
      default:
        return 'Стоп'
    }
  }

  const handleStopTimer = () => {
    dispatch(stopTimer())
  }

  const handleDone = () => {
    dispatch(removeTodo(activeTodoId))
    dispatch(resetTimer())
  }

  const handleSkip = () => {
    dispatch(skipPause())
  }

  const handleStop = (progressType: EProgress) => {
    switch (progressType) {
      case EProgress.work:
        handleStopTimer()
        break;
      case EProgress.workPause:
        handleDone()
        break;
      case EProgress.break:
      case EProgress.breakPause:
        handleSkip()
        break;
      default:
        break;
    }
  }

  return (
    <Btn onClick={() => handleStop(progress!)} styleType={started ? EType.red : EType.grey}>{btnText}</Btn>
  );
};
