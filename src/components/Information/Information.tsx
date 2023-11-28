import { FC } from "react";
import { InformationTitle } from "./InformationTitle";
import { InformationList } from "./InformationList";

export const Information: FC = () => {
  return (
    <article>
      <InformationTitle />
      <InformationList />
    </article>
  );
}
