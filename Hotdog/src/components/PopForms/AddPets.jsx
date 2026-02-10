import React, { useState } from "react";
import "./addpetsStyle.css";
import addPetData from "./addpet_Data";


function AddPets() {
  const [pet, setPet] = useState(addPetData.initialPetState);

  function handleChange(event) {
    const { name, value } = event.target;

    setPet(prevValue => {
      if (name === "petName") {
        return { ...prevValue, petName: value };
      } else if (name === "weight") {
        return { ...prevValue, weight: value };
      } else if (name === "species") {
        return { ...prevValue, species: value };
      } else if (name === "gender") {
        return { ...prevValue, gender: value };
      } else if (name === "desexed") {
        return { ...prevValue, desexed: value };
      } else if (name === "dob") {
        return { ...prevValue, dob: value };
      } else if (name === "ageYears") {
        return { ...prevValue, ageYears: value };
      } else if (name === "ageMonths") {
        return { ...prevValue, ageMonths: value };
      } else if (name === "reasonForVisit") {
        return { ...prevValue, reasonForVisit: value };
      }
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Submitted Pet:", pet);
  }

  return (
    <div className="modal">
      <form className="form" onSubmit={handleSubmit}>

        <label>Pet Name</label>
        <input
          name="petName"
          value={pet.petName}
          onChange={handleChange}
          placeholder="Pet Name"
        />

        <label>Weight (if known)</label>
        <input
          name="weight"
          value={pet.weight}
          onChange={handleChange}
          placeholder="Weight"
        />

        <label>Species</label>
        <select
          name="species"
          value={pet.species}
          onChange={handleChange}
        >
          {addPetData.speciesOptions.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        {/* Gender */}
        <label>Gender (if known)</label>
        <div className="radio-group">
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={pet.gender === "male"}
              onChange={handleChange}
            />
            Male
          </label>

          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={pet.gender === "female"}
              onChange={handleChange}
            />
            Female
          </label>
        </div>

        {/* Desexed */}
        <label>Desexed (if known)</label>
        <div className="radio-group">
          <label>
            <input
              type="radio"
              name="desexed"
              value="yes"
              checked={pet.desexed === "yes"}
              onChange={handleChange}
            />
            Yes
          </label>

          <label>
            <input
              type="radio"
              name="desexed"
              value="no"
              checked={pet.desexed === "no"}
              onChange={handleChange}
            />
            No
          </label>
        </div>

        {/* DOB */}
        <label>Pet Age (Date of Birth)</label>
        <input
          type="text"
          name="dob"
          value={pet.dob}
          onChange={handleChange}
          placeholder="DD / MM / YYYY"
          inputMode="numeric"
        />

        {/* Estimated Age */}
        <div className="age-group">
          <div>
            <label>Years</label>
            <input
              type="number"
              name="ageYears"
              value={pet.ageYears}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Months</label>
            <input
              type="number"
              name="ageMonths"
              value={pet.ageMonths}
              onChange={handleChange}
            />
          </div>
        </div>

        <label>Reason for Visit (required)</label>
        <textarea
          name="reasonForVisit"
          value={pet.reasonForVisit}
          onChange={handleChange}
          placeholder="Please add any notes for your Vet"
        />

        <div className="button-group">
          <button type="button" className="cancel">
            Cancel
          </button>
          <button type="submit" className="submit">
            Submit
          </button>
        </div>

      </form>
    </div>
  );
}

export default AddPets;
