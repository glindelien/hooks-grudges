import React, { useState, useEffect } from 'react';
import './AddGrudge.css';

const AddGrudge = () => {

  return (
    <form className="Add-Grudge">

      <label htmlFor="person">Person:</label>
      <input type="text" id="person" name="person"></input>

      <label htmlFor="reason">Reason:</label>
      <input type="text" id="reason" name="reason"></input>

      <input type="submit" value="Add"></input>
    </form>
  );
};

export default AddGrudge;
