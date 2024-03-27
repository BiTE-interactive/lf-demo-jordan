import React, { FC } from "react";
import { Button, ButtonProps } from "./styled/Button";

interface IconButtonProps {
  content?: string;
  Icon: FC;
  onClick: () => void;
}

const IconButton = ({
  content,
  Icon,
  ...rest
}: IconButtonProps & ButtonProps) => {
  return (
    <Button {...rest}>
      {content}
      <Icon />
    </Button>
  );
};

export default IconButton;
