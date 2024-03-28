import React from 'react'
import "./counter.css";

function TaskCounter(props) {
    const {value} = props
  return (
    <>
            <p className='p'>{value}</p>           
    </>
  )
}

export default TaskCounter