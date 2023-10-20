import Btn from '../Btn/Btn';
import { EColor } from '../Btn/BtnEnum';
import { form } from './FormTasks.module.css';

export default function FormTasks() {
  return (
    <form className={form}>
      <input type="text" />
      <Btn color={EColor.green} type='submit'>Добавить</Btn>
      {/* <button type="submit">Добавить</button> */}
    </form>
  );
}
