import React from 'react';

const dreams = [];

for (let i = 0; i < 500; i++) {
  dreams.push('i styled it...');
}

class Dreamfield extends React.Component {
  render() {
    return (
      <section id="dream">
        {dreams.map(message => {
          return <a class='dream-field'>{message}</a>;
        })}
      </section>
    );
  }
}

export default Dreamfield;
