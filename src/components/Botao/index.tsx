import styled from "styled-components";

const StyledButton = styled.button`
  background-color: #FE652B;
  border: 2px solid black;
  font-weight: 600;
  font-size: 20px;
  padding: 18px 40px;
  color: #FFF;
  border-radius: 37.5px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 26px;
  box-shadow: 4px 4px 0px black;

  &:hover{
    background-color: #4B69FDFC;
  }
  img{
    width: 40px;
  }
`

interface Props{
  children: React.ReactNode,
  disabled?: boolean,
  onClick?: () => void,
  type?: "button" | "submit" | "reset" | undefined
}

const Botao = ({ children, disabled, onClick, type = "button"  }: Props) => {
  return (
    <StyledButton type={type} disabled={disabled} onClick={onClick}>
      {children}
    </StyledButton>
  );
}

export default Botao;