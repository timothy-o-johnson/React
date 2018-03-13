import React from 'react'

class AddFishForm extends React.Component {
  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();

createFish = (event) => {
  //1. stop the form from submitting
    event.preventDefault();
    const fish = {
      name: this.nameRef.value.value,
      price: parseFloat(this.priceRef.value.value),
      status: this.statusRef.value.value,
      desc: this.descRef.value.value,
      image: this.imageRef.value.value,
    }
    //console.log(fish);
    this.props.addFish(fish);
    //clean up the form; refresh the form
    // console.log(`current target is.. ${event.currentTarget}`);
    event.currentTarget.reset();
};

  render () {
    return (
      <React.Fragment>
        <div className='inventory'>
          <h2>It works, y'all!</h2> <h4><br/> <br/>We in da fishes !!  We in da fishes!!</h4>
        </div>
        <form className="fish-edit" onSubmit={this.createFish}>
          <input name="name" ref={this.nameRef} type="text" placeholder="Name"/>
          <input name="price" ref={this.priceRef} type="text" placeholder="Price"/>
          <select name="status" ref={this.statusRef}>
            <option value="available">Fresh!</option>
            <option value="available">So Clean!</option>
            <option value="available">Sold out-- like the sucka you are!</option>
          </select>
          <textarea name="desc" ref={this.descRef} type="text" placeholder="Desc"/>
          <input name="image" ref={this.imageRef} type="text" placeholder="Image"/>
          <button type="sumbit">+ Add Fish</button>
        </form>
      </React.Fragment>
    );
  }
}

export default AddFishForm
