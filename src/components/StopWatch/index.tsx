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
  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o Cronômetro</p>
      <div className={style.relogioWrapper}>
        <Watch time={time} />
      </div>
      <Button
      texto="Começar!"
      />    
      </div>
  )
}