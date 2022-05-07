import React from "react"
import { ITarefa } from "../../../types/tarefa"
import style from "./Item.module.scss"

interface Props extends ITarefa {
    SelectedTask: (selectedTasks: ITarefa) => void
}

export default function Item({ tarefa, tempo, selecionado, completado, id, SelectedTask }: Props) {
    return (
        <li className={`${style.item} ${selecionado ? style
            .itemSelecionado : ""} ${completado? style.itemCompletado : ""} `}
             onClick={() => !completado && SelectedTask({
            tarefa, tempo, selecionado, completado, id
        })}>
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
            {completado && <span className={style.concluido} aria-label="tarefa-completada"></span>}
        </li>
    )
}