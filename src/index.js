import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <StrictMode>
//     <App subject="Deez"/>
//   </StrictMode>);

const DATA = [
  { id: "todo-0", name: "Eat", completed: true },
  { id: "todo-1", name: "Sleep", completed: false },
  { id: "todo-2", name: "Repeat", completed: false }
];

root.render(<App tasks={DATA} />, document.getElementById("root"));