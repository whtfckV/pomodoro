import { FC, ReactNode } from "react";

export interface IGenericListProps {
  list: IItem[];
}

type typeElemnt = 'li' | 'a' | 'button' | 'div';

export interface IItem {
  id: string;
  As?: typeElemnt;
  onClick?: (id: string) => void;
  className?: string;
  href?: string;
  element?: ReactNode | string
}

const NOOP = () => { };

const GenericList: FC<IGenericListProps> = ({ list }) => {
  return (
    <>
      {list.map(({ id, As = 'li', onClick = NOOP, className, href, element }) => (
        <As className={className} onClick={() => onClick(id)} href={href} key={id}> {/* вызажение не является вызываемым ts(2349) */}
          {element}
        </As>
      ))}
    </>
  );
}

export default GenericList
