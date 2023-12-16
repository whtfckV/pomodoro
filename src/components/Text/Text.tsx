import classNames from "classnames";
import { FC, ReactNode } from "react";
import { EColor } from "./TextEnum";
import styles from './Text.module.css';

type TSizes = 24 | 16 | 30 | 64| 150;
type TWeight = 200 | 300 | 400 | 700;

export interface ITextProps {
  As?: 'span' | 'p' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
  children?: ReactNode;
  size: TSizes;
  color?: EColor;
  weight?: TWeight;
  upperCase?: boolean;
  className?: string;
  transition?: boolean
}

export const Text: FC<ITextProps> = (props) => {
  const {
    As = 'span',
    children,
    size,
    color = EColor.black,
    weight = 300,
    upperCase = false,
    className,
    transition
  } = props

  const classes = classNames(
    styles[`s${size}`],
    styles[`w${weight}`],
    styles[color],
    className,
    upperCase ? styles.upperCase : '',
    transition ? styles.transition : ''
  )
  return (
    <As className={classes}>
      {children}
    </As>
  );
}

