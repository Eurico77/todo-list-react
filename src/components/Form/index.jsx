import { Input, Container, Button } from './styles';

export function InputContainer({ onSubmit, value, onChange }) {
  return (
    <Container>
      <Input placeholder="Digite o titulo" value={value} onChange={onChange} />
      <Button type="submit" onClick={onSubmit}>
        Adicionar
      </Button>
    </Container>
  );
}
