import React, {PropTypes} from 'react';
import Header from '../common/Header';

App.PropTypes = {
  children: PropTypes.object.isRequired
};
class App extends React.Component {
  render(){
    return (
      <div className="container-fluid">
        <Header />
        {this.props.children}
      </div>
    )
  }
}

export default App;