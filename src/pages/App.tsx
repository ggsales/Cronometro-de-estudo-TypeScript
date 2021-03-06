import Form from '../components/Form';
import List from '../components/List';
import StopWatch from '../components/StopWatch';
import style from './App.module.scss'
import { useState } from 'react';
import { ITarefa } from '../types/tarefa';


function App() {
  const[tarefas, setTarefas] = useState<ITarefa[]>([])
  const[selected, setSelected] = useState<ITarefa>()

   function SelectedTask(selectedTasks:ITarefa){
     setSelected(selectedTasks)
     setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
       ...tarefa,
       selecionado: tarefa.id === selectedTasks.id ? true : false
     })))

   }
   function endTask(){
     if(selected){
       setSelected(undefined)
       setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa=>{
         if(tarefa.id === selected.id){
           return{
             ...tarefa,
             selecionado: false,
             completado: true
           }
         }
         return tarefa;
       }))
     }
   }

  return (
    <div className={style.AppStyle}>
      <Form setTarefas={setTarefas}/>
      <List tarefas={tarefas} SelectedTask={SelectedTask}/>
      <StopWatch selected={selected} endTask={endTask} />
    </div>
  );
}

export default App;
