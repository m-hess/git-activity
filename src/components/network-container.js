import React from 'react';
import Network from './network';
import './container.css';

class NetworkContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [12, 5, 6, 6, 9, 10],
      width: 700,
      height: 500,
      id: 'network',
    };
  }

  render() {
    return (
      <div className="NetworkContainer">
        <Network data={this.state.data} width={this.state.width} height={this.state.height} id={this.state.id} />
      </div>
    );
  }
}

export default NetworkContainer;
