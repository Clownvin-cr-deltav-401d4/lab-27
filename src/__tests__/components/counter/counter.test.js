import React from 'react';
import renderer from 'react-test-renderer';
import Counter from '../../../components/counter/counter';

describe('<Counter />', () => {
  it('can render initially in section.counter', () => {
    let app = shallow(<Counter />);
    expect(app.find('section.counter').exists()).toBe(true);
    expect(app.find('a.down').exists()).toBe(true);
    expect(app.find('a.up').exists()).toBe(true);
    expect(app.find('span.count').exists()).toBe(true);
  });

  it('state.count: 0 initially', () => {
    let app = shallow(<Counter />);
    expect(app.state('count')).toBe(0);
    expect(app.find('span.count').text()).toBe('0');
  });

  it('can click the down clicker to decrement count', () => {
    // Arrange
    let app = shallow(<Counter />);
    let button = app.find('a.down');

    // Act
    button.simulate('click');

    // Assert
    expect(app.state('count')).toBe(-1);
    expect(app.find('span.count').text()).toBe('-1');

    // Act
    button.simulate('click');

    // Assert
    expect(app.state('count')).toBe(-2);
    expect(app.find('span.count').text()).toBe('-2');
  });

  it('can click the down clicker to decrement count', () => {
    // Arrange
    let app = shallow(<Counter />);
    let button = app.find('a.up');

    // Act
    button.simulate('click');

    // Assert
    expect(app.state('count')).toBe(1);
    expect(app.find('span.count').text()).toBe('1');

    // Act
    button.simulate('click');

    // Assert
    expect(app.state('count')).toBe(2);
    expect(app.find('span.count').text()).toBe('2');
  });

  it('renders consistently', () => {
    const tree = renderer.create(<Counter />).toJSON();
    // console.log(tree);
    expect(tree).toMatchSnapshot();
  });
});
