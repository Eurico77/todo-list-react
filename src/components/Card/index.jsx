import { Button } from '../Button';
import { CardTitle, CardWrapper, Checkbox } from './style';

export function Card({
  title,
  completed,
  onToggleTaskCompletion,
  onRemoveTask,
}) {
  return (
    <>
      {completed && (
        <CardWrapper completed={completed}>
          <Checkbox
            type="checkbox"
            checked={completed}
            onChange={onToggleTaskCompletion}
          />
          <CardTitle completed={completed}>{title}</CardTitle>
          <Button onRemoveTask={onRemoveTask} />
        </CardWrapper>
      )}

      {!completed && (
        <CardWrapper>
          <Checkbox
            type="checkbox"
            checked={completed}
            onChange={onToggleTaskCompletion}
          />
          <CardTitle>{title}</CardTitle>
        </CardWrapper>
      )}
    </>
  );
}
