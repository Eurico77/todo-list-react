import styled from 'styled-components';

export const ButtonContainer = styled.button`
  background: transparent;
  color: white;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.25rem;
  font-weight: 700;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    color: #ff0000;
  }
`;
