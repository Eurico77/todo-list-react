import { Header } from '../../components/Header';
import { Card } from '../../components/Card';
import { InputContainer } from '../../components/Form';

import { useState } from 'react';
import { Container } from '../../styles/global';

export function Home() {
  const [tasks, setTasks] = useState([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');

  function handleCreateNewTask() {
    if (!newTaskTitle) return;

    const newTask = {
      id: Math.random() * 1000,
      title: newTaskTitle,
      completed: false,
    };
    setTasks((oldTasks) => [...oldTasks, newTask]);
    setNewTaskTitle('');
  }

  function handleToggleTaskCompletion(id) {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          completed: !task.completed,
        };
      }
      return task;
    });
    setTasks(newTasks);
  }

  return (
    <Container>
      <Header />
      <InputContainer
        onSubmit={handleCreateNewTask}
        value={newTaskTitle}
        onChange={(e) => setNewTaskTitle(e.target.value)}
      />
      {tasks.map((task) => (
        <Card
          key={task.id}
          title={task.title}
          completed={task.completed}
          onToggleTaskCompletion={() => handleToggleTaskCompletion(task.id)}
        />
      ))}
    </Container>
  );
}
