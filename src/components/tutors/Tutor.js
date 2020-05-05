import React, { Component } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { connect } from 'react-redux'
import {  toggleModal, deleteTutor, getTutor, refreshFilteredTutors } from '../../actions/tutorAction'

export class Tutor extends Component {

  handleDelete = id => {
    this.props.deleteTutor(id)
    this.props.refreshFilteredTutors()
  }
  handleEdit = id => {
    this.props.getTutor(id)
    this.props.toggleModal()
  }
  render() {
    const {
      _id,
      // image,
      name,
      age,
      experience,
      gender,
      email,
      phone,
      rate,
      subject,
    } = this.props.tutor;

    const stateUS = this.props.tutor.address.state === null ? "" : this.props.tutor.address.state ;
    const address = this.props.tutor.address;
    return (
      <>
      <tr>
        {/* <td>
          <figure class="image is-48x48">
            <img src={image} alt="Placeholder image" />
          </figure>
        </td> */}
        <td>{name}</td>
        <td>{age}</td>
        <td>{experience}</td>
        <td>{gender}</td>
        <td>{email}</td>
        <td>{phone}</td>
        <td>{subject}</td>
        <td>{rate}</td>
        <td>{stateUS}</td>
        <td>{address.city}</td>
        <td>{address.street}</td>
        <td className="btn-action has-text-centered">
          <button onClick={this.handleEdit.bind(this, _id)} className="button is-warning" data-tooltip="Edit">
            <FaEdit />
          </button>
          <button onClick={this.handleDelete.bind(this, _id)} className="button is-danger">
            <FaTrash />
          </button>
        </td>
      </tr>
      </>
    );
  }
}

export default connect(null, { deleteTutor, toggleModal, getTutor, refreshFilteredTutors })(Tutor);
