import Button from "../Button";
import Watch from "./Watch";
import style from './StopWatch.module.scss';
import { TimeForSeconds } from "../../common/utils/date";

export default function StopWatch() {
  console.log("conversão:", TimeForSeconds("01:01:01"))
  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o Cronômetro</p>
      <div className={style.relogioWrapper}>
        <Watch />
      </div>
      <Button
      texto="Começar!"
      />    
      </div>
  )
}