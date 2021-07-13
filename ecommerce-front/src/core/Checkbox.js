import React, { useState, useEffect } from "react";

const Checkbox = ({ categories, handleFilters }) => {
  const [checked, setChecked] = useState([]);

  //c= category id
  const handleToggle = (c) => () => {
    //return 1st index i.e. -1
    const currentCategoryId = checked.indexOf(c);
    const newCheckedCategoryId = [...checked];

    if (currentCategoryId === -1) {
      newCheckedCategoryId.push(c);
    } else {
      newCheckedCategoryId.splice(currentCategoryId, 1);
    }

    console.log(newCheckedCategoryId);
    setChecked(newCheckedCategoryId);
    handleFilters(newCheckedCategoryId);
  };
  return categories.map((c, i) => (
    <li key={i} className="list-unstyled">
      <input
        onChange={handleToggle(c._id)}
        type="checkbox"
        className="form-check-input"
        value={checked.indexOf(c._id === -1)}
      />
      <label className="form-check-label">{c.name}</label>
    </li>
  ));
};

export default Checkbox;
