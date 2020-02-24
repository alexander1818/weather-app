import React, {useState} from 'react'
import {Form, InputGroup, FormControl, Button } from 'react-bootstrap'

const FormInput = (props) => {
  const [text, setText] = useState('');
  // console.log(props.temp)
  const handleChangeInput = (e) => {
    setText(e.target.value);
    console.log(e.target.value)
}

  return (
    <div>
     
    <Form onSubmit={props.weatherMethod}>
      <InputGroup  className="mb-3">
        <FormControl type="text" onChange={handleChangeInput} value={text} placeholder="City"
          aria-describedby="basic-addon2"
          name="city"
        />

        <InputGroup.Append >
          <Button variant="primary" type="submit"  >Получить погоду</Button>
        </InputGroup.Append>
      </InputGroup>
      
    </Form >
        <div>
          {props.city}
        </div>
    </div>
   
  )
}
export default FormInput;