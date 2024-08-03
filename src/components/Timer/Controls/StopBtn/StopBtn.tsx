import { FC, MouseEventHandler, useEffect, useState } from "react";
import { Btn, EType } from "src/components/Btn";
import { useAppSelector } from "src/store/hooks";

type tHandlers = 'skip' | 'done' | 'stop' | 'nothing'
type Props = {
  stop: () => void;
  skip: () => void;
  done: () => void;
}

export const StopBtn: FC<Props> = ({ stop, skip, done }) => {
  const { currentTomato, isBreak, isWorking, isStarted } = useAppSelector(state => state.timer)
  const [styleType, setStyleType] = useState<EType>(EType.grey)
  const [descr, setDescr] = useState('Стоп')
  const [handleName, setHandleName] = useState<tHandlers>('stop')

  useEffect(() => {
    if (isStarted) {
      setStyleType(EType.red)
    } else if (currentTomato > 1) {
      setStyleType(EType.brick)
    } else {
      setStyleType(EType.grey)
    }
    isStarted ? EType.red : EType.grey

  }, [currentTomato, isStarted])

  useEffect(() => {
    if (isBreak) {
      setDescr('Пропустить')
      setHandleName('skip')
      return
    }
    if (!isWorking && !isBreak && isStarted) {
      setDescr('Сделано')
      setHandleName('done')
      return
    }
    if (!isStarted) {
      setHandleName('nothing')
    } else {
      setHandleName('stop')
    }
    setDescr('Стоп')
  }, [isBreak, isWorking, isStarted])

  const handleClick: Record<tHandlers, MouseEventHandler<HTMLButtonElement>> = {
    stop,
    skip,
    done,
    nothing: () => { },
  }

  // const handleStopTimer = () => {
  //   dispatch(stopTimer())
  // }

  // const handleDone = () => {
  //   dispatch(removeTodo(activeTodoId))
  //   dispatch(resetTimer())
  // }



  return (
    <Btn onClick={handleClick[handleName]} styleType={styleType}>{descr}</Btn>
  );
};
