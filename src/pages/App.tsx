import Form from '../components/Form';
import List from '../components/List';
import StopWatch from '../components/StopWatch';
import style from './App.module.scss'
import { useState } from 'react';
import { ITarefa } from '../types/tarefa';


function App() {
  const[tarefas, setTarefas] = useState<ITarefa[]>([])
  return (
    <div className={style.AppStyle}>
      <Form setTarefas={setTarefas}/>
      <List tarefas={tarefas}/>
      <StopWatch/>
    </div>
  );
}

export default App;
