import React, { Component } from "react";
import { connect } from "react-redux";

class PersonalBooks extends Component {
  componentDidMount() {
    this.getPersonalShelf();
  }

  getPersonalShelf = () => {
    this.props.dispatch({ type: "FETCH_PERSONAL_SHELF", payload: this.props.user.id});
  };

  render() {
    console.log(this.props);

    return (
        <div>


        <h1>Personal Books</h1>
        <table>

        <thead>
          <tr>
            <th>Description</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
        {this.props.personalShelf.map(pitem => (
          <tr>
            <td>{pitem.description}</td>
            <td>
              <img width="320" height="240" src={pitem.image_url} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
    )
  }
}

const putStateOnProps = reduxStore => ({
  personalShelf: reduxStore.personalShelf,
  user: reduxStore.user
});

export default connect(putStateOnProps)(PersonalBooks);
