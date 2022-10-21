const schemaEdit = {
  Komoditas: {
    type: "text",
    required: true,
    placeholder: "Input Commodity",
    defaultValue: JSON.parse(localStorage.getItem("resourceData"))?.komoditas,
  },
  Size: {
    type: "select",
    required: true,
    placeholder: "Select Size",
    defaultValue: JSON.parse(localStorage.getItem("resourceData"))?.size,
    options: JSON.parse(localStorage.getItem("sizeData")),
  },

  Price: {
    type: "number",
    required: true,
    placeholder: "Input Price",
    defaultValue: JSON.parse(localStorage.getItem("resourceData"))?.price,
  },
  Province: {
    type: "select",
    required: true,
    placeholder: "Select Province",
    defaultValue: JSON.parse(localStorage.getItem("resourceData"))
      ?.area_provinsi,
    options: JSON.parse(localStorage.getItem("provinceData")),
  },

  City: {
    type: "select",
    required: true,
    placeholder: "Select City",
    defaultValue: JSON.parse(localStorage.getItem("resourceData"))?.area_kota,
    options: JSON.parse(localStorage.getItem("cityData")),
  },

  Save: {
    type: "submit",
  },
};

export default schemaEdit;
