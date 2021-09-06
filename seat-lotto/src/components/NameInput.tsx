import React from 'react';
import { FormControl } from 'react-bootstrap';
class NameInput extends React.Component<InputListProps, InputListState>{
  constructor(props:InputListProps){
    super(props);
    this.state = {
      id: `person-${props.id}`,
      value: props.value,
      key: props.id
    }
  }

  onTodoChange(value:string){
    this.setState({value: value});
  }

  render() {
    return (
      <FormControl  
      placeholder="person name"
      key={this.state.key}
      id={this.state.id}
      value={this.state.value}
      onChange={e=>this.onTodoChange(e.target.value)}
      ></FormControl>
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