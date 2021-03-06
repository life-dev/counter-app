import propTypes from 'prop-types'
import classNames from "classnames";

import './Counter.css'

const Counter = ({inc,dec,reset,count}) => {
// added classNames external module
    let testStyle = classNames({
        'red' : count === 0,
        'teal' : count !==0
    })

  return(

      <div>
        <h1 style={{color: count ===0? 'red' : 'green'}}>{count}</h1>
        <button onClick={inc}>+</button>
        <button className={testStyle} onClick={dec} disabled={count === 0}>-</button>
        <br/>
        <button onClick={reset}>Reset</button>
      </div>
  )
}


// check props type

Counter.propTypes = {
    inc:propTypes.func,
    dec:propTypes.func,
    reset:propTypes.func,
    count: propTypes.number
}
export default Counter;
