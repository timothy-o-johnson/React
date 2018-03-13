import React from 'react'

class AddFishForm extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div className='inventory'>
          <h2>It works, y'all!</h2> <h4><br/> <br/>We in da fishes !!  We in da fishes!!</h4>  
        </div>
        <form className="fish-edit">
          <input name="name" type="text" placeholder="Name"/> 
          <input name="price" type="text" placeholder="Price"/> 
          <select name="status">
            <option value="available">Fresh!</option>
            <option value="available">So Clean!</option>
            <option value="available">Sold out-- like the sucka you are!</option> 
          </select>
          <textarea name="desc" type="text" placeholder="Desc"/> 
          <input name="image" type="text" placeholder="Image"/> 
          <button type="sumbit">+ Add Fish</button>
        </form>
      </React.Fragment>
    );
  }
}

export default AddFishForm
