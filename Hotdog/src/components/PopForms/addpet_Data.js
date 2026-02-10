const addpet_Data = {
  speciesOptions: [
    { value: "", label: "Select..." },
    { value: "dog", label: "Dog" },
    { value: "cat", label: "Cat" },
    { value: "other", label: "Other" }
  ],

  initialPetState: {
    petName: "",
    weight: "",
    species: "",
    gender: "",
    desexed: "",
    dob: "",
    ageYears: 0,
    ageMonths: 0,
    reasonForVisit: ""
  }
};

export default addpet_Data;