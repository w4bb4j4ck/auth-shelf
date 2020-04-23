import React, {Component} from 'react';
import { connect } from 'react-redux';


class InfoPage extends Component {

  componentDidMount(){
    this.getShelf();
  }

  getShelf = () => {
    this.props.dispatch({type:'FETCH_SHELF'});
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
              </tr>
            </thead>
            <tbody>
              {this.props.shelf.map((item) => 
              <tr><td>{item.description}</td><td><img width="320" height="240" src={item.image_url}/></td></tr>)}
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
