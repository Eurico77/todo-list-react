import { Header } from '../../components/Header';
import { Card } from '../../components/Card';
import { InputContainer } from '../../components/Form';

import { useState, useEffect } from 'react';
import { Container } from '../../styles/global';

export function Home() {
  const [tasks, setTasks] = useState(
    localStorage.getItem('tasks')
      ? JSON.parse(localStorage.getItem('tasks'))
      : []
  );

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

  function handleRemoveTask(id) {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  }

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

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
          onRemoveTask={() => handleRemoveTask(task.id)}
        />
      ))}
    </Container>
  );
}
