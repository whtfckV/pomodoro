import classNames from "classnames";
import { FC, ReactNode } from "react";
import { Ecolor } from "./TextEnum";
import styles from './Text.module.css';

type TSizes = 24 | 16;
type TWeight = 300 | 400 | 700;

export interface ITextProps {
  As?: 'span' | 'p' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
  children?: ReactNode;
  size: TSizes;
  color?: Ecolor;
  weight?: TWeight;
  upperCase?: boolean;
  className?: string;
}

const Text: FC<ITextProps> = (props) => {
  const {
    As = 'span',
    children,
    size,
    color = Ecolor.black,
    weight = 300,
    upperCase = false,
    className
  } = props

  const classes = classNames(
    styles[`s${size}`],
    styles[`w${weight}`],
    styles[color],
    className,
    upperCase ? styles.upperCase : ''
  )
  return (
    <As className={classes}>
      {children}
    </As>
  );
}

export default Text;
