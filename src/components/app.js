import React from 'react';
// import BarChart from './BarChart';
import ForceNetwork from './ForceNetwork';
// import './App.css';
/* eslint-disable react/prefer-stateless-function */

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     data: [12, 5, 6, 6, 9, 10],
  //     width: 700,
  //     height: 500,
  //     id: 'root',
  //   };
  // }

  render() {
    return (
      <div className="canvas">
        {/* <BarChart /> */}
        <ForceNetwork />
        {/* <BarChart data={this.state.data} width={this.state.width} height={this.state.height} id={this.state.id} /> */}
      </div>
    );
  }
}

export default App;

// import React from 'react';
// import {
//   BrowserRouter as Router, Route, Switch,
// } from 'react-router-dom';
// import Home from './home';
// // import Tutorial from './tutorial';
// // import Nav from './nav';

// const FallBack = (props) => {
//   return <div>URL Not Found</div>;
// };

// const App = (props) => {
//   return (
//     <Router>
//       {/* <Nav /> */}
//       <Switch>
//         <Route exact path="/" component={Home} />
//         <Route component={FallBack} />
//       </Switch>
//     </Router>
//   );
// };

// export default App;
