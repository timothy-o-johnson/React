import React from 'react'
import { formatPrice } from "../helpers"

class EditFishForm extends React.Component {
handleChange = (event) => {
  console.log(event.currentTarget.name);
// update that fish
// 1. take copy of the current fish
const updatedFish = {
  ... this.props.fish,
  [event.currentTarget.name]: event.currentTarget.value
 }
this.props.updateFish(this.props.index, updatedFish )
}

  render () {
    return (
      <div className='fish-edit'>
        <input type='text' name='name' onChange={this.handleChange} value={this.props.fish.name} />
        <input type='text' name='price' onChange={this.handleChange} value={formatPrice(this.props.fish.price)} />
        <select type='text' name='status' onChange={this.handleChange} value={this.props.fish.status}>
          <option value='available'>available</option>
          <option value='so clean, not mean'>so clean, not mean</option>
          <option value='sold out'>sold out</option>
        </select>
        <textarea name='desc' onChange={this.handleChange} value={this.props.fish.desc} />
        <input type='text' name='image' onChange={this.handleChange} value={this.props.fish.image} />

      </div>
    )
  }
}

export default EditFishForm
