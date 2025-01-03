import { FC, useCallback, useEffect, useState } from "react";
import { TaskNumber } from "./TaskNumber";
import { Time } from "./Time";
import { Controls } from "./Controls";
import { BREAK_TIME, LONG_BREAK_TIME, ONE_MINUTE, ONE_SECOND, WORK_TIME } from "src/store/constants";
import styles from './Timer.module.css'
import { useAppDispatch, useAppSelector } from "src/store/hooks";
import { nextTomato, startBreak, stopTimer } from "src/store/timerSlice";
import { removeTodo } from "src/store/todoSlice";
import { addTime } from "src/store/statisticsSlice";
import { useNotifications } from "src/hooks/useNotifications";

export const Timer: FC = () => {
  const dispatch = useAppDispatch()
  const { isPause, isBreak, currentTomato, isStarted } = useAppSelector(state => state.timer)
  const [time, setTime] = useState(WORK_TIME)
  const [pauseTime, setPauseTime] = useState(0)
  const [workTime, setWorkTime] = useState(0)
  const [pastTime, setPastTime] = useState(0)
  const currentTask = useAppSelector(state => state.todos.todos[0])
  const { isPermissionGranted, requestPermission, showNotification } = useNotifications()

  const sound = new Audio('src/assets/timer.mp3')

  const tick = useCallback(() => {
    if (!isBreak && !isPause) {
      setWorkTime(oldTime => oldTime + ONE_SECOND)
    }
    if (isPause) {
      setPauseTime(oldTime => oldTime + ONE_SECOND)
    } else {
      setTime(oldTime => oldTime - ONE_SECOND)
    }
    setPastTime(oldTime => oldTime + ONE_SECOND)
  }, [isPause, isBreak])

  const addTimeToStatistics = useCallback(() => {
    dispatch(addTime({
      total: pastTime,
      pause: pauseTime,
      work: workTime
    }))
    setPauseTime(0)
    setPastTime(0)
    setWorkTime(0)
  }, [pastTime, pauseTime, workTime, dispatch])

  useEffect(() => {
    if (currentTomato > currentTask.tomatoes) {
      dispatch(removeTodo(currentTask.id))
    }
  }, [currentTomato, currentTask, addTimeToStatistics, dispatch])

  useEffect(() => {
    if (time === 0) {
      sound.play()
      if (isBreak) {
        setTime(WORK_TIME)
        addTimeToStatistics()

        return () => {
          dispatch(nextTomato())
        }
      } else {
        setTime(currentTomato % 4 === 0 ? LONG_BREAK_TIME : BREAK_TIME)
        addTimeToStatistics()

        if (isPermissionGranted) {
          showNotification({
            title: 'Время закончилось',
            body: 'Пора на паузу'
          })
        } else {
          requestPermission()
          showNotification({
            title: 'Время закончилось',
            body: 'Пора на паузу',
            requireInteraction: true
          })
        }
        // React обновляет время после смены состояния, если есть решение надо переделать
        // setTimeout(() => {
        //   dispatch(startBreak())
        // }, 0)
        // Сделал так, но все еще не уверен в том насколько это правильно, но проблема решилась
        return () => {
          dispatch(startBreak())
        }
      }
    }
  }, [time, isBreak, currentTomato, addTimeToStatistics, dispatch])

  useEffect(() => {
    if (!isStarted) return
    const timerId = setInterval(tick, ONE_SECOND / 500)
    return () => clearInterval(timerId)
  }, [isStarted, tick])

  const handleStop = () => {
    dispatch(stopTimer())
    setTime(WORK_TIME)
    addTimeToStatistics()
  }

  const handleSkipPause = () => {
    setTime(0)
  }

  const handleDone = () => {
    dispatch(removeTodo(currentTask.id))
    addTimeToStatistics()
  }

  const handlePlus = () => {
    setTime(oldTime => oldTime + ONE_MINUTE)
  }

  return (
    <div className={styles.timer}>
      <Time time={time} addTime={handlePlus} isPause={isPause} isBreak={isBreak} isStarted={isStarted} />
      <TaskNumber />
      <Controls stop={handleStop} skip={handleSkipPause} done={handleDone} />
    </div>
  );
};
