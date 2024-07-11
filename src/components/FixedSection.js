import React from 'react';


class FixedSection extends React.Component {
    render() {
      return (
        <div className="fixed-section" onWheel={this.props.onScroll}>
          {/* Content of the fixed section */}
          <div>
            <h1> Riyanshi Goyal</h1>
            <h3>Software Engineer</h3>
          </div>
        </div>
      );
    }
  }
  
  export default FixedSection