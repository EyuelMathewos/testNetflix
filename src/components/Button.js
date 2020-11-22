import styled, { css } from 'styled-components';

export const Button = styled.button`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 112px;
  background: transparent;
  color: white;
  border: 1px solid white;

  ${props => props.primary && css`
    padding: 6px 12px;
    background: #e50914;
    color: white;
    border: 1px solid red;
    font-family: Roboto ,Dancing Script,cursive, sans-serif;
    font-size: 15px;
    width: 112px;
  `}
  ${props => props.header && css`
    color: #FF2401;
    border: 1px solid #FF2401;
    font-family: Roboto ,Dancing Script,cursive, sans-serif;
    font-weight: bold;
    font-size: 15px;
    width: 95px;
    padding: 6px 12px;
  `}
`