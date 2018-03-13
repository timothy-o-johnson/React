import React from 'react';
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  myInput = React.createRef();

  constructor() {
    super();
    console.log('gunna create component');
    this.goToStore = this.goToStore.bind(this);
    
  }

    goToStore = event => {
      
      //1. Stop the form from submitting
      event.preventDefault();
      // console.log("Going to store");
      
      //2. get the text from that input don't reference the dom
      let storeName = console.log(`in goToStore() ${this.myInput.value.value}`); //clog doesn't store anything to the variable 
      //console.log(`storeName = ${storeName}`);
      storeName = this.myInput.value.value;
      console.log(`storeName = ${storeName}`);
      
      
      // 3. Change the page to /store/whatever-they-entered 
      this.props.history.push(`/store/${storeName}`);
    }
    
    componentDidmount(){
      console.log("MOUNTED!!!");
      console.log(this)      
    }

    render() {
    return (
      <React.Fragment>
        {/* how to write a comment -- must be in a fragment*/}
      <form className="store-selector" onSubmit={this.goToStore}> 
      <h2> Please Enter A Store </h2>
      <input 
        type="text"
        ref={this.myInput}
        required 
        placeholder="Store Name" 
        defaultValue={getFunName()} />
      <button type="submit">Visit Store -> </button>
      </form>
      </React.Fragment>  
    )
  }
}

export default StorePicker;