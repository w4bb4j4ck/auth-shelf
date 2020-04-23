import React, {Component} from 'react';
import { connect } from 'react-redux';


class InfoPage extends Component {

  componentDidMount(){
    this.getShelf();
  }

  getShelf = () => {
    this.props.dispatch({type:'FETCH_SHELF'});
  }

  handleDelete = (id) => () => {
    this.props.dispatch({type: 'DELETE_SHELF', payload: id });
  }

  render() {
    return (
      <div>
          <h1>Shelf Page</h1>
          <table>
            <thead>
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
      </div>
    );
  }
}

const putStateOnProps = (reduxStore) => ({
  shelf: reduxStore.shelf
})

export default connect(putStateOnProps)(InfoPage);
