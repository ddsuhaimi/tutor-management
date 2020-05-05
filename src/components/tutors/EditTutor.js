import React, { Component } from "react";
import { connect } from "react-redux";
import { toggleModal, updateTutor, clearTutor, refreshFilteredTutors } from "../../actions/tutorAction";

export class EditTutor extends Component {
  state = {
    id: "",
    name: "",
    email: "",
    phone: "",
    gender: "",
    age: 0,
    subject: "",
    experience: 0,
    rate: "",
    is_recommended: false,
    street: "",
    city: "",
    stateUS: "",
  };

  componentDidMount() {
    const {
      _id,
      name,
      email,
      phone,
      gender,
      age,
      subject,
      experience,
      rate,
      is_recommended,
    } = this.props.tutor;
    const stateUS = this.props.tutor.address.state;
    const { city, street } = this.props.tutor.address;

    this.setState({
      id: _id,
      name,
      email,
      phone,
      gender,
      age,
      subject,
      experience,
      rate: parseInt(rate.substring(1, rate.length - 3)),
      is_recommended,
      stateUS,
      city,
      street,
    });
  }

  handleChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    console.log(e.target);
    this.setState({
      [name]: value,
    });
  };

  handleCancel = () => {
    this.props.clearTutor()
    this.props.toggleModal();
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const {
      id,
      name,
      email,
      phone,
      gender,
      age,
      experience,
      subject,
      rate,
      is_recommended,
      street,
      city,
      stateUS,
    } = this.state;

    // make new updated tutor object
    const updTutor = {
      _id: id,
      name,
      email,
      phone,
      gender,
      age: parseInt(age),
      experience: parseInt(experience),
      subject,
      rate: `$${rate}.00`,
      is_recommended,
      address: {
        street,
        city,
        state: stateUS,
      },
    };

    // update tutor
    this.props.updateTutor(updTutor);

    // clean state
    this.setState({
      id: "",
      name: "",
      email: "",
      phone: "",
      gender: "",
      age: 0,
      subject: "",
      experience: 0,
      rate: "",
      is_recommended: false,
      street: "",
      city: "",
      stateUS: "",
    });
    this.props.clearTutor()
    this.props.toggleModal()
    this.props.refreshFilteredTutors()
  };

  render() {
    const {
      name,
      email,
      phone,
      gender,
      age,
      experience,
      subject,
      rate,
      is_recommended,
      street,
      city,
      stateUS,
    } = this.state;

    return (
      <div className="modal is-active">
        <div className="modal-background"></div>
        <div className="modal-card">
          <form onSubmit={this.handleSubmit}>
            <header className="modal-card-head">
              <p className="modal-card-title">Edit Tutor</p>
              <button
                onClick={this.handleCancel}
                class="delete"
                aria-label="close"
              ></button>
            </header>
            <section class="modal-card-body">
              {/* name email */}
              <div className="field is-grouped">
                <div className="control is-expanded">
                  <label htmlFor="name" className="label">
                    Name
                  </label>
                  <input
                    name="name"
                    type="text"
                    className="input"
                    placeholder="Enter name"
                    value={name}
                    onChange={this.handleChange}
                  />
                </div>

                <div className="control is-expanded">
                  <label htmlFor="email" className="label">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    className="input"
                    placeholder="Enter email"
                    value={email}
                    onChange={this.handleChange}
                  />
                </div>
              </div>

              {/* phone */}
              <div className="field">
                <div className="control">
                  <label htmlFor="phone" className="label">
                    Phone
                  </label>
                  <input
                    type="text"
                    name="phone"
                    className="input"
                    placeholder="Enter phone number"
                    value={phone}
                    onChange={this.handleChange}
                  />
                </div>
              </div>

              {/* gender age */}
              <div className="field is-grouped">
                <div className="control">
                  <label htmlFor="gender" className="label">
                    Gender
                  </label>
                  <div className="select">
                    <select
                      name="gender"
                      value={gender}
                      onChange={this.handleChange}
                    >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                </div>

                <div className="control is-expanded">
                  <label htmlFor="age" className="label">
                    Age
                  </label>
                  <input
                    className="input"
                    type="number"
                    name="age"
                    placeholder="Enter age"
                    value={age}
                    onChange={this.handleChange}
                  />
                </div>

                <div className="control is-expanded">
                  <label htmlFor="subject" className="label">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    list="subjects"
                    className="input"
                    placeholder="Enter subject"
                    value={subject}
                    onChange={this.handleChange}
                  />
                  <datalist id="subjects">
                    <option value="Mathematics">Mathematics</option>
                    <option value="Pyhsics">Physics</option>
                  </datalist>
                </div>
              </div>

              {/* exp rate */}
              <div className="field is-grouped">
                <div className="control is-expanded ">
                  <label htmlFor="experience" className="label">
                    Experience (years)
                  </label>
                  <input
                    className="input"
                    type="number"
                    name="experience"
                    placeholder="Enter years of experience"
                    value={experience}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="control is-expanded">
                  <label htmlFor="rate" className="label">
                    Rate ($)
                  </label>
                  <input
                    className="input"
                    type="number"
                    name="rate"
                    placeholder="Enter rate per hour"
                    value={rate}
                    onChange={this.handleChange}
                  />
                </div>
              </div>

              {/* featured */}
              <div className="control is-expanded">
                <label htmlFor="is_recommended" className="checkbox">
                  <input
                    type="checkbox"
                    checked={is_recommended}
                    name="is_recommended"
                    onChange={this.handleChange}
                  />{" "}
                  Featured
                </label>
              </div>

              <hr />

              {/* street */}
              <div className="field">
                <div className="control is-expanded">
                  <label htmlFor="street" className="label">
                    Street
                  </label>
                  <input
                    name="street"
                    type="text"
                    className="input"
                    placeholder="Enter street"
                    value={street}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              {/* city state */}
              <div className="field is-grouped">
                <div className="control is-expanded">
                  <label htmlFor="city" className="label">
                    City
                  </label>
                  <input
                    name="city"
                    type="text"
                    className="input"
                    placeholder="Enter city"
                    value={city}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="control is-expanded">
                  <label htmlFor="stateUS" className="label">
                    State
                  </label>
                  <input
                    name="stateUS"
                    type="text"
                    className="input"
                    placeholder="Enter state"
                    value={stateUS}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
            </section>
            <footer class="modal-card-foot">
              <button type="submit" class="button is-success">
                Save changes
              </button>
              <button onClick={this.handleCancel} class="button">
                Cancel
              </button>
            </footer>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  tutor: state.tutor.tutor,
});

export default connect(mapStateToProps, { toggleModal, updateTutor, clearTutor, refreshFilteredTutors })(
  EditTutor
);
