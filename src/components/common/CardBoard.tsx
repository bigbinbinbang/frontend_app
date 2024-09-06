import style from './style.module.scss'
const CardBoard: React.FC = () => {
  return (
    <div className={style.card_pannel}>
      <h4 className={style.card_title}>1111</h4>
      <p className={style.number}>22222</p>
      <p className={style.old}>
        <span>
          上年同期&nbsp;
          <em className={style.number_old}>33333</em>
        </span>
        <span>
          上年期末&nbsp;<em className={style.number_old}>4444</em>
        </span>
      </p>
      <div className={style.triangle}></div>
    </div>
  )
}
export default CardBoard
