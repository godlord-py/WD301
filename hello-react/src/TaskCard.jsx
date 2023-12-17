/* eslint-disable react/prop-types */
import './TaskCard.css' 
const Taskcard = (props) => {
    console.log(props);
    const isPending = !props.completedOn;
    return (
      <div className = "TaskItem">
        <h3 className="text-xl font-bold">{props.title}</h3>
        {isPending && <p>{props.dueDate}</p>}
        {!isPending && <p>{props.completedOn}</p>}
        <p>{props.assigneeName}</p>
      </div>
    )
  }

  export default Taskcard;