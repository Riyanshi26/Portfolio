import React from 'react';
import FixedSection from './components/FixedSection';
import ScrollingSection from './components/ScrollingSection';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.scrollingSectionRef = React.createRef();
  }

  handleFixedSectionScroll = (e) => {
    // Forward the scroll event to the scrolling section
    this.scrollingSectionRef.current.scrollTop += e.deltaY;
  };

  render() {
    return (
      <div className="App">
        <FixedSection onScroll={this.handleFixedSectionScroll} />
        <ScrollingSection ref={this.scrollingSectionRef} />
      </div>
    );
  }
}

export default App;
