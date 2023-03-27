import { Btn } from "./GoBackBtn.styled";

export const GoBackBtn = ({ path, children }) => {
    return <Btn to={path}>{children}</Btn>;
  };