import React from 'react';
import NameInput from './NameInput';
import { Button, Form } from 'react-bootstrap';
class InputList extends React.Component<{},InputListProps>{
  constructor(props:any){
    super(props);
    this.state = {
      inputs: [1,2,3]
    }
  }

  renderInputs(){
    console.log("array count:",this.state.inputs.length);
    return (
      this.state.inputs.map((i,index) => { 
        return (
          <Form.Group className="mb-3">
            <NameInput id={i} value="placeholder" key={i}></NameInput>
          </Form.Group>
        )
      })
    );    
  }

  addInput(){
    let sorted = this.state.inputs.sort((a,b) => a-b);
    let newVal = sorted===undefined ? 0 : sorted[sorted.length-1]+1;
    let currArr = this.state.inputs;
    currArr.push(newVal);
    console.log(newVal);
    this.setState({inputs:currArr});
    
  }

  render(){
    return (
      <Form>  
          {this.renderInputs()}
          <Button variant="light" onClick={this.addInput.bind(this)}>Add+</Button>
      </Form>
    )
  }
}

interface InputListProps {
  inputs: number[]
}

export default InputList;