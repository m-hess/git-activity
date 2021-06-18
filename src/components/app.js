import React from 'react';
import ForceNetwork from './ForceNetwork';
/* eslint-disable react/prefer-stateless-function */

class App extends React.Component {
  render() {
    return (
      <div className="splash-page">
        <div className="mobile-warning">
          <p>This visualization is not compatible on mobile. Please navigate to a larger screen to proceed.</p>
        </div>
        <div className="header">
          <h1>Welcome to the CI2 Summer Interns!</h1>
          <h2>UCSF Center for Intelligent Imaging 2021</h2>
        </div>
        <div className="canvas">

          <ForceNetwork />

        </div>
        <div className="description">
          <h2>What is this?</h2>
          <p>
            This activity was completed as part of an activity in the 2021 UCSF CI2 intern onboarding week.
            Each intern was asked to learn and experiment with some of the Git CLI tools by uploading a photo of themselves to a shared repository.
            This visualization is a play on what they spent the rest of the week learning about: deep learning for medical imaging with convolutional neural networks.
          </p>
          <div className="footer">
            <a href="https://intelligentimaging.ucsf.edu/people/madeline-hess">Created by Madeline Hess</a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
