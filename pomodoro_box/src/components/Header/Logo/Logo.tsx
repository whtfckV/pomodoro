import { ReactElement } from 'react';
import LogoImg from '../../../assets/tomato_logo.svg';
import Text from '../../Text/Text.tsx';
import { Ecolor } from '../../Text/TextEnum.ts';
import { logo } from './Logo.module.css'

export default function Logo(): ReactElement {
  return (
    <a className={logo} href='/' >
      <img src={LogoImg} alt='Логотип Помодоро' />
      <Text size={16} color={Ecolor.red}>
        pomodoro_box
      </Text>
    </a >
  );
}
