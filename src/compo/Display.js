import React from "react";
import { useLocation,useNavigate } from "react-router-dom";

const Display = () => {
  const location = useLocation();
  const formData = location.state?.formData || {};
  const navigation = useNavigate();

  const handlerBack=()=>{
    navigation('/');
  }

  return (
    <div>
      {Object.keys(formData).length === 0 ? (
          <h1 className="text-focus-in">No data</h1>
          ) : (
        <>
          <h1 className="text-focus-in">Form Data</h1>
          <div className="container">
            {formData?.imageFile && (
              <div className="centerImg">
                <img
                  className="imageR"
                  src={URL.createObjectURL(formData.imageFile)}
                  alt="Selected"
                />
              </div>
            )}

            <p className="paraS">Name: {formData.name}</p>
            <p className="paraS">Email: {formData.email}</p>
            <p className="paraS">Work: {formData.work}</p>
          <button onClick={handlerBack} className="dataBtnBack">BACK</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Display;
