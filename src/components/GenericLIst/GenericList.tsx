import { FC, ReactNode } from "react";

export type GenericListProps = {
  list: GenericListItem[];
}

type typeElemnt = 'li' | 'a' | 'button' | 'div';

export type GenericListItem = {
  id: string;
  As?: typeElemnt;
  onClick?: (id: string) => void;
  className?: string;
  href?: string;
  element?: ReactNode | string
}

const NOOP = () => { };

export const GenericList: FC<GenericListProps> = ({ list }) => {
  return (
    <>
      {list.map(({ id, As = 'li', onClick = NOOP, className, href, element }) => (
        <As className={className} onClick={() => onClick(id)} href={href} key={id}>
          {element}
        </As>
      ))}
    </>
  );
}
