import React from 'react';
class ScrollingSection extends React.Component {
    render() {
      return (
        <div className="scrolling-section" ref={this.props.forwardRef}>
          {/* Content of the scrolling section */}
          <div><h1>Hii!</h1></div> 
          
          
        </div>
      );
    }
  }
  
  export default React.forwardRef((props, ref) => (
    <ScrollingSection forwardRef={ref} {...props} />
  ));