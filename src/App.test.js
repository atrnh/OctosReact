import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import StudentCollection from './components/Student';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('adds a student', () => {
  const collection = new StudentCollection();
  const len = collection.state.students.length;
  collection.addStudent({ name: 'Hello' });
  expect(collection.state.students.length).toBe(len + 1);
});
