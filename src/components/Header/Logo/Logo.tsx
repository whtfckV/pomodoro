import { FC } from 'react';
import LogoImg from 'src/assets/tomato_logo.svg';
import { Text } from 'src/components/Text/Text'
import { EColor } from 'src/components/Text/TextEnum.ts';
import styles from './Logo.module.css'
import { Link } from 'react-router-dom';

export const Logo: FC = () => {
  return (
    <Link className={styles.logo} to='/' >
      <img src={LogoImg} alt='Логотип Помодоро' />
      <Text size={24} color={EColor.red}>
        pomodoro_box
      </Text>
    </Link >
  );
}
