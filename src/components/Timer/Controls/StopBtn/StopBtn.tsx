import { FC } from "react";
import { Btn, EType } from "src/components/Btn";


type tStopBtnProps = {
  isStarted: boolean
}

export const StopBtn: FC<tStopBtnProps> = ({ isStarted }) => {
  // const activeTodoId = useAppSelector(state => state.todos.todos[0].id)

  // Повторяющийся код, не знаю как избавиться
  // const getIncription = () => {
  // switch (statusType) {
  //   case EStatus.work:
  //     return 'Стоп'
  //   case EStatus.workPause:
  //     return 'Сделано'
  //   case EStatus.breakPause:
  //   case EStatus.break:
  //     return 'Пропустить'
  //   default:
  //     return 'Стоп'
  // }
  // }

  // const handleStopTimer = () => {
  //   dispatch(stopTimer())
  // }

  // const handleDone = () => {
  //   dispatch(removeTodo(activeTodoId))
  //   dispatch(resetTimer())
  // }

  // const handleSkip = () => {
  //   dispatch(skipPause())
  // }

  const handleStop = () => {
    // switch (statusType) {
    //   case EStatus.work:
    //     handleStopTimer()
    //     break;
    //   case EStatus.workPause:
    //     handleDone()
    //     break;
    //   case EStatus.break:
    //   case EStatus.breakPause:
    //     handleSkip()
    //     break;
    //   default:
    //     break;
    // }
  }

  return (
    <Btn onClick={() => handleStop()} styleType={isStarted ? EType.red : EType.grey}>Стоп</Btn>
  );
};
