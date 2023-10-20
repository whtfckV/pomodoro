import { ReactElement } from "react";
import InformationTitle from "./InformationTitle/InformationTitle";
import InformationList from "./InformationList/InformarmationList";

export default function Information(): ReactElement {
  return (
    <article>
      <InformationTitle />
      <InformationList />
    </article>
  );
}
