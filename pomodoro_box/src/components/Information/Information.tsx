import { FC } from "react";
import InformationTitle from "./InformationTitle/InformationTitle";
import InformationList from "./InformationList/InformarmationList";

const Information: FC = () => {
  return (
    <article>
      <InformationTitle />
      <InformationList />
    </article>
  );
}
export default Information
