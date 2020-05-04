import React, { Component } from "react";
import Tutor from "./Tutor";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { FaUserPlus } from "react-icons/fa";
import { getTutors, toggleModal, getFilteredTutors } from "../../actions/tutorAction";
import EditTutor from "./EditTutor";
import AddTutor from "./AddTutor";
import FilterTutors from "./FilterTutors";
export class Tutors extends Component {
  componentDidMount() {
    // this.props.getTutors();
    this.props.getFilteredTutors()
  }

  handleAdd = (e) => {
    this.props.toggleModal();
  };
  render() {
    const { tutors, isModalOpen, tutor, filteredTutors } = this.props;
    return (
      <>
        <div style={{ padding: "1em" }} className="container-fluid">
          {Object.keys(tutor).length !== 0 && isModalOpen && <EditTutor />}
          {Object.keys(tutor).length === 0 && isModalOpen && <AddTutor />}

          <div className="table-container">
            <div className="column is-10">
              <FilterTutors />
            </div>
            <div className="column has-text-right">
              <button onClick={this.handleAdd} className="button is-primary">
                <FaUserPlus />
              </button>
            </div>

            <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
              <thead>
                <tr>
                  {/* <th>Image</th> */}
                  <th>Name</th>
                  <th>Age</th>
                  <th>
                    <abbr title="Experience">Exp</abbr>
                  </th>
                  <th>Gender</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Subjects</th>
                  <th>Rate</th>
                  <th>State</th>
                  <th>City</th>
                  <th>Street</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredTutors.map((tutor) => (
                  <Tutor key={tutor._id} tutor={tutor} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  tutors: state.tutor.tutors,
  tutor: state.tutor.tutor,
  isModalOpen: state.tutor.isModalOpen,
  filteredTutors: state.tutor.filteredTutors
});

export default connect(mapStateToProps, { getTutors, getFilteredTutors, toggleModal })(Tutors);
