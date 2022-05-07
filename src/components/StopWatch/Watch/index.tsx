import style from './Watch.module.scss';


interface Props{
  time: number | undefined
}

export default function Watch({time = 0} : Props) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const [minutesTen, minutesUnity] = String(minutes).padStart(2, "0");
  const [secondsTen, secondsUnity] = String(seconds).padStart(2, "0")
  return (
    <>
      <span className={style.relogioNumero}>{minutesTen}</span>
      <span className={style.relogioNumero}>{minutesUnity}</span>
      <span className={style.relogioDivisao}>:</span>
      <span className={style.relogioNumero}>{secondsTen}</span>
      <span className={style.relogioNumero}>{secondsUnity}</span>
    </>
  )
}