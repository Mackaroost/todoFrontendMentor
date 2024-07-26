import Header from "./Components/Header";
import { TodoList } from "./Components/TodoList";
import Form from "./Components/Form";
import { useState, useEffect } from "react";
import TodoResumen from "./Components/TodoResumen";
import PanelFilter from "./Components/PanelFilter";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const initialStateTodo: Todo[] = (() => {
  try {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) as Todo[] : [];
  } catch (error) {
    console.error("Error parsing localStorage data:", error);
    return [];
  }
})();

function App() {
  const [todos, setTodos] = useState<Todo[]>(initialStateTodo);
  const [filterTodo, setFilterTodo] = useState<string>('all');

  useEffect(() => {
    try {
      localStorage.setItem('todos', JSON.stringify(todos));
    } catch (error) {
      console.error("Error saving to localStorage:", error);
    }
  }, [todos]);

  const createTodo = (title: string): void => {
    const newTodo: Todo = {
      id: Date.now(),
      title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const filterFc = todos.filter((item) => {
    switch (filterTodo) {
      case 'active':
        return !item.completed;
      case 'completed':
        return item.completed;
      case 'all':
      default:
        return item;
    }
  });

  const filterAct = (filter: string) => setFilterTodo(filter);

  const deleteTodo = (id: number): void => {
    setTodos(todos.filter(item => item.id !== id));
  };

  const updateTodo = (id: number): void => {
    setTodos(todos.map(item => item.id === id ? { ...item, completed: !item.completed } : item));
  };

  const clearTodo = (): void => {
    setTodos(todos.filter(item => !item.completed));
  };

  const incompleteTodo = todos.filter(todo => !todo.completed).length;

  return (
    <div className="min-h-screen dark:bg-slate-900 bg-slate-200">
      <div className="min-h-72 px-5 bg-[url('/todo-app-main/images/bg-mobile-light.jpg')] bg-cover bg-center dark:bg-[url('/todo-app-main/images/bg-mobile-dark.jpg')]">
        <Header />
        <div className="pt-8">
          <Form createTodo={createTodo} />
        </div>
      </div>
      <main className="container mx-auto">
        <TodoList todos={filterFc} deleteTodo={deleteTodo} updateTodo={updateTodo} />
        <TodoResumen clearTodo={clearTodo} incompleteTodo={incompleteTodo} />
        <PanelFilter filterAct={filterAct} filterTodo={filterTodo} />
      </main>
    </div>
  );
}

export default App;
