import { FC } from 'react';
import LogoImg from 'src/assets/tomato_logo.svg';
import Text from 'src/components/Text/Text'
import { Ecolor } from 'src/components/Text/TextEnum.ts';
import styles from './Logo.module.css'

const Logo: FC = () => {
  return (
    <a className={styles.logo} href='/' >
      <img src={LogoImg} alt='Логотип Помодоро' />
      <Text size={24} color={Ecolor.red}>
        pomodoro_box
      </Text>
    </a >
  );
}

export default Logo
