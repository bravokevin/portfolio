const Card = (props: any) => {
  const {start_date, due_date, description, name } = props
  return (

    <div className="resume__data">
    <div>
        <h3 className="resume__title">{name}</h3>
        <span className="resume__subtitle">{description}</span>
        <div className="resume__calendar">
            <i className="uil uil-calendar-alt"></i>{" "}{`${new Date(Number(start_date)).toLocaleDateString()} - ${new Date(Number(due_date)).toLocaleDateString()}`}
        </div>
    </div>

    <div>
        <span className="resume__rounder"></span>
        <span className="resume__line"></span>
    </div>
</div>
  )
}
export default Card;