import React from 'react';

class Footer extends React.Component {
  render() {
    return <footer>&copy; {new Date().getFullYear()} Code Fellows</footer>;
  }
}

export default Footer;
