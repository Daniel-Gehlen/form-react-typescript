import React from "react";
import { ButtonContainer } from "./styles";

interface IButtonProps {
  title: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled: boolean;
  style?: React.CSSProperties; // Adicione a propriedade style para estilos personalizados
}

const Button: React.FC<IButtonProps> = ({ title, onClick, disabled, style }) => {
  return (
    <
      ButtonContainer
      onClick={onClick}
      disabled={disabled}
      style={style} // Aplicar estilos personalizados
    >
      {title}
      </ButtonContainer>
  );
};

export default Button;
