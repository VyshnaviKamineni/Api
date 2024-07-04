import React from 'react';
import UserForm from './Form';

function App() {
  return (
    <div>
      <h1>React API Example</h1>
      <UserForm type="POST" />
      <UserForm type="PUT" />
    </div>
  );
}

export default App;
