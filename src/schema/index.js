const exportedObject = {
  Komoditas: {
    type: "text",
    required: true,
    placeholder: "Input Commodity",
  },
  Size: {
    type: "select",
    required: true,
    placeholder: "Select Size",
    options: JSON.parse(localStorage.getItem("sizeData")),
  },

  Price: {
    type: "number",
    required: true,
    placeholder: "Input Price",
  },
  Province: {
    type: "select",
    required: true,
    placeholder: "Select Province",
    options: JSON.parse(localStorage.getItem("provinceData")),
  },

  City: {
    type: "select",
    required: true,
    placeholder: "Select City",
    options: JSON.parse(localStorage.getItem("cityData")),
  },

  Save: {
    // button submit
    type: "submit",
  },
};

export default exportedObject;

