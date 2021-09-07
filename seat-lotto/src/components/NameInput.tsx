import React from 'react';
import { Form } from 'react-bootstrap';
class NameInput extends React.Component<InputListProps, InputListState>{
  constructor(props:InputListProps){
    super(props);
    this.state = {
      id: `person-${props.id}`,
      value: props.value,
      key: props.id
    }
  }

  handleChange(event:any){
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <Form.Control type="text" 
        placeholder='Person Name' 
        id={`person-${this.state.id}`} 
        defaultValue=''
        key={this.state.id}
        onChange={this.handleChange}
        >
      </Form.Control>
  );}
}

interface InputListProps {
  value:string;
  id:number;
}

interface InputListState {
  value: string;
  id: string;
  key: number;
}

export default NameInput;