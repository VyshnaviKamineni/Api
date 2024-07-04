import React, { useState, useEffect } from 'react';
import { addUser, updateUser } from './Api';
import './Form.css';

const UserForm = ({ type }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [id, setId] = useState('');
  const [button, setButton] = useState(false);

  useEffect(() => {
    if (button) {
      const user = { id, name, email };
      if (type === 'POST') {
        addUser(user).then((response) => {
          console.log('User added:', response);
          resetForm();
        });
      } else if (type === 'PUT') {
        updateUser(user).then((response) => {
          console.log('User updated:', response);
          resetForm();
        });
      }
      setButton(false);
    }
  }, [button, id, name, email, type]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setButton(true);
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setId('');
  };

  return (
    <form className="user-form" onSubmit={handleSubmit}>
      {type === 'PUT' && (
        <div className="form-group">
          <label>ID:</label>
          <input
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
            className="form-control"
            placeholder="Enter ID"
          />
        </div>
      )}
      <div className="form-group">
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-control"
          placeholder="Enter Name"
          required
        />
      </div>
      <div className="form-group">
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
          placeholder="Enter Mail"
          required
        />
      </div>
      <button type="submit" className="btn">
        {type === 'POST' ? 'Add' : 'Update'}
      </button>
    </form>
  );
};

export default UserForm;
