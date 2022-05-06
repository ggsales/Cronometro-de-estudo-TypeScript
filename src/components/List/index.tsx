import React, { useState } from 'react';
import { ITarefa } from '../../types/tarefa';
import Item from './Item';
import style from './List.module.scss';


interface props{
  tarefas : ITarefa[],
  SelectedTask : (selectedTasks: ITarefa) => void
}


function List({tarefas, SelectedTask} : props) {

  return (
    <aside className={style.listaTarefas}>
      <h2> Estudos do dia </h2>
      <ul>
        {tarefas.map(item => (
          <Item
            SelectedTask={SelectedTask}
            key={item.id}
            {...item}
          />
        ))}
      </ul>
    </aside>
  )
}

export default List;