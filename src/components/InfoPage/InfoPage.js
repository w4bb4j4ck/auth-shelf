import React, { Component } from "react";
import { connect } from "react-redux";

class InfoPage extends Component {
  state = {
    description: '',
    image_url: ''
  }
  componentDidMount() {
    this.getShelf();
  }

  getShelf = () => {
    this.props.dispatch({ type: "FETCH_SHELF" });
  };
  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }
  addBook = (event) => {
    event.preventDefault();

    if (this.state.description && this.state.image_url) {
      this.props.dispatch({
        type: 'ADD_BOOK',
        payload: {
          description: this.state.description,
          image_url: this.state.image_url,
          user_id: this.props.user.id
        },
      });
    }
  } // end login

  handleDelete = (id) => () => {
    this.props.dispatch({type: 'DELETE_SHELF', payload: id });
  }

  render() {
    console.log(this.props);
    
    return (
      <div>
        <h1>Shelf Page</h1>
        <table>
          <thead>
            <tr>
              <th>Description</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {this.props.shelf.map(item => (
              <tr>

                <th>Description</th>
                <th>Image</th>
                <th>Remove Item</th>
              </tr>
            </thead>
            <tbody>
              {this.props.shelf.map((item) => 
              <tr><td>{item.description}</td><td><img width="320" height="240" src={item.image_url}/></td><td><button onClick={this.handleDelete(item.id)}>Delete</button></td></tr>)}
            </tbody>
          </table>

                <td>{item.description}</td>
                <td>
                  <img width="320" height="240" src={item.image_url} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          
          <form onSubmit={this.addBook}>
            <div>
              <label htmlFor="description">
                Description:
                <input
                  type="text"
                  name="description"
                  value={this.state.description}
                  onChange={this.handleInputChangeFor("description")}
                />
              </label>
            </div>
            <div>
              <label htmlFor="image_url">
                Image URL:
                <input
                  type="text"
                  name="image_url"
                  value={this.state.image_url}
                  onChange={this.handleInputChangeFor("image_url")}
                />
              </label>
            </div>
            <div>
              <input
                className="log-in"
                type="submit"
                name="submit"
                value="Add Book"
              />
            </div>
          </form>
        </div>

      </div>
    );
  }
}

const putStateOnProps = reduxStore => ({
  shelf: reduxStore.shelf,
  user: reduxStore.user
});

export default connect(putStateOnProps)(InfoPage);
