import styled, {css} from "styled-components/native";

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    background-color:${theme.colors.background};
  `}
`

export const Content = styled.View`
  ${({ theme }) => css`
  height: 70%;
  background-color: ${theme.colors.backgroundWhite};
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  justify-content: center;
  align-items: center;
  `}
`

export const Footer = styled.View`
  ${({ theme }) => css`
  height: 30%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: ${theme.colors.background};
  justify-content: center;
  align-items: center;
  `}
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: 30px;
    font-weight: 600;
    color: ${theme.colors.text.textBlack} ;
  `}
`
export const SubTitle = styled.Text`
  ${({ theme }) => css`
    font-size: 20px;
    margin-bottom: 10px;
    font-weight: 600;
    color: ${theme.colors.text.textWhite} ;
  `}
`
export const Button = styled.TouchableOpacity`
  ${({ theme }) => css`
    background-color: ${theme.colors.backgroundWhite} ;
    width: 50%;
    padding: 10px;
    margin-top: 5px;
    border-radius: 10px;
  `}
`
export const TextButton = styled.Text`
  ${({ theme }) => css` ;
    text-align: center;
    font-size:20px;
    font-weight:900;
  `}
`

