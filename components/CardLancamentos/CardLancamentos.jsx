import style from './CardLancamentos.module.scss'
import Image from 'next/image'
export default function CardLancamentos(props) {
  return (
    <div className={style['cardLancamento']}>
      <Image src={props.foto} width="193" height="290"></Image>
      <div className={style['cardLancamento__text']}>
        <h5>{props.name}</h5>
        <p>{props.year}</p>
      </div>
    </div>
  )
}
