import { FC } from "react";
import { Btn, EType } from "src/components/Btn";
import { useAppDispatch, useAppSelector } from "src/store/hooks";
import { EStatus, resetTimer, skipPause, stopTimer } from "src/store/timerSlice";
import { removeTodo } from "src/store/todoSlice";

export const StopBtn: FC = () => {
  const activeTodoId = useAppSelector(state => state.todos.todos[0].id)
  const { started, status } = useAppSelector(state => state.timer)
  const dispatch = useAppDispatch()

  // Повторяющийся код, не знаю как избавиться
  const getIncription = (statusType: EStatus) => {
    switch (statusType) {
      case EStatus.work:
        return 'Стоп'
      case EStatus.workPause:
        return 'Сделано'
      case EStatus.breakPause:
      case EStatus.break:
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

  const handleStop = (statusType: EStatus) => {
    switch (statusType) {
      case EStatus.work:
        handleStopTimer()
        break;
      case EStatus.workPause:
        handleDone()
        break;
      case EStatus.break:
      case EStatus.breakPause:
        handleSkip()
        break;
      default:
        break;
    }
  }

  return (
    <Btn onClick={() => handleStop(status)} styleType={started ? EType.red : EType.grey}>{getIncription(status)}</Btn>
  );
};
