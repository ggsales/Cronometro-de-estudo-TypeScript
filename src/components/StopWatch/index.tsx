import Button from "../Button";
import Watch from "./Watch";
import style from './StopWatch.module.scss';
import { TimeForSeconds } from "../../common/utils/time";
import { ITarefa } from "../../types/tarefa";
import { useEffect, useState } from "react";


interface Props{
  selected : ITarefa | undefined
}

export default function StopWatch({selected} : Props) {
  const [time, setTime] = useState<number>();

  useEffect(() =>{
   if(selected?.tempo){
    setTime(TimeForSeconds(selected.tempo));
   }
  },[selected])

  function regressive(count: number = 0){
    setTimeout(()=>{
      if(count > 0){
        setTime(count - 1);
        return regressive(count - 1)
      }
      
    }, 1000)
  }

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o Cronômetro</p>
      <div className={style.relogioWrapper}>
        <Watch time={time} />
      </div>
      <Button
      onClick={()=> regressive(time) }
      texto="Começar!"
      />    
      </div>
  )
}