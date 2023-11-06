// Made by Elijah Simmons

import React, { useState } from 'react';

const EditProfile = ({ userInfo, onSave, onCancel }) => {
  const [editedUserInfo, setEditedUserInfo] = useState(userInfo);
  const [address, setAddress] = useState(userInfo.address);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUserInfo({
      ...editedUserInfo,
      [name]: value,
    });
  };

  const handleSave = () => {
    onSave(editedUserInfo);
  };

  const handleCancel = () => {
    onCancel();
  };

  // I love regex!!! (this is for all the inputs when changing employee info)
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(editedUserInfo.email);
  const isPhoneValid = /^\(\d{3}\) \d{3}-\d{4}$/.test(editedUserInfo.phone); 
  // TODO: make it so you can input 1234567890 instead of (123) 456-7890


  return (
    <div className="mb-10">
      <h2 className="text-xl font-bold mb-2">Edit Profile</h2>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
        <input
          type="text"
          name="email"
          value={editedUserInfo.email}
          onChange={handleInputChange}
          className={`border rounded w-full py-2 px-3 ${isEmailValid ? 'border-gray-300' : 'border-red-500'}`}
        />
        {!isEmailValid && <p className="text-red-500 text-sm">Please enter a valid email address.</p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Phone Number</label>
        <input
          type="text"
          name="phone"
          value={editedUserInfo.phone}
          onChange={handleInputChange}
          className={`border rounded w-full py-2 px-3 ${isPhoneValid ? 'border-gray-300' : 'border-red-500'}`}
        />
        {!isPhoneValid && <p className="text-red-500 text-sm">Please enter a valid phone number in the format (123) 456-7890.</p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Address</label>
        <input
          type="text"
          name="address"
          value={address} // Use the address state
          onChange={(e) => setAddress(e.target.value)} // Update the address state
          className="border rounded w-full py-2 px-3 border-gray-300"
        />
      </div>
      <div className="flex">
        <button onClick={handleSave} className="outline_btn mr-2" disabled={!isEmailValid || !isPhoneValid}>Save</button>
        <button onClick={handleCancel} className="outline_btn mr-2"> Cancel </button>
      </div>
      
    </div>
  );
};

export default EditProfile;
