import React from 'react'

const Weather = (props) => {
      console.log(props)
    return (
        <div>
          {props.city}
        </div>
    )
}
export default Weather;