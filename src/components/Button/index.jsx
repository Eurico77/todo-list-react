import { ButtonContainer } from './style';
import { Trash } from '@phosphor-icons/react';

export function Button({ onRemoveTask }) {
  return (
    <ButtonContainer onClick={onRemoveTask} type="button">
      <Trash />
    </ButtonContainer>
  );
}
