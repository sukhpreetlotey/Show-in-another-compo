import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();
  // eslint-disable-next-line
  const [imageUrl, setImageUrl] = useState("");

  const [data, setData] = useState({
    name: "",
    email: "",
    work: "",
    imageFile: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "imageFile" && files[0]) {
      const file = files[0];
      setData({ ...data, imageFile: file });
      const reader = new FileReader();

      reader.onload = (e) => {
        setImageUrl(e.target.result);
      };

      reader.readAsDataURL(file);
    } else {
      setData({ ...data, [name]: value });
    }
  };
  const submitHandle = (e) => {
    e.preventDefault();

    navigate("/display", {
      state: { formData: data },
    });
    setData({
      name: "",
      email: "",
      work: "",
      imageFile: null,
    });
    setImageUrl("");
  };

  return (
    <>
      <div className="bigContainer">
        <div className="form-container">
          <div className="column">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              onChange={handleChange}
              value={data.name}
              id="field1"
              name="name"
            />
          </div>
          <div className="column">
            <label htmlFor="email"> Email:</label>
            <input
              type="text"
              onChange={handleChange}
              value={data.email}
              id="field2"
              name="email"
            />
          </div>
          <div className="column">
            <label htmlFor="work">Work:</label>
            <input
              type="text"
              onChange={handleChange}
              value={data.work}
              id="field3"
              name="work"
            />
          </div>
          <div className="column">
            <label htmlFor="imageFile">Select Image</label>
            <input
              type="file"
              id="imageFile"
              onChange={handleChange}
              // value={data.imageFile}
              name="imageFile"
            />
          </div>
        </div>
        <div className="btn-container">
          <button
          className="btn-submit"
            disabled={!data.name || !data.email || !data.work}
            onClick={submitHandle}
          >
            SUBMIT
          </button>
        </div>
        <div className="jumpBtn">
          <Link to="/display"><i class="bi bi-person-circle"></i></Link>
        </div>
      </div>
    </>
  );
};

export default Create;
