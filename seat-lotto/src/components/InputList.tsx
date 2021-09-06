import React from 'react';
import NameInput from './NameInput';
import { InputGroup } from 'react-bootstrap';
class InputList extends React.Component<{},InputListProps>{
  constructor(props:any){
    super(props);
    this.state = {
      inputs: [1,2,3]
    }
  }

  renderInputs(){
    return (
      this.state.inputs.map((i,index) => { 
        return (
        <NameInput value='Person Name' id={i} key={i}></NameInput>)}));
  }

  render(){
    return (
      <InputGroup className="mb-3">
        {this.renderInputs()}
      </InputGroup>
    )
  }
}

interface InputListProps {
  inputs: number[]
}

export default InputList;