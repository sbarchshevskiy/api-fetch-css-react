import React from 'react';

export default function ModelDetails({ model }) {
  return(
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          {/*<img src={model.img} alt=''/>*/}
        </div>
        <div>
          {model.Make_Name}
          <ul>
            <li>
              <strong>Model_ID:</strong> {model.Model_ID}
            </li>
            <li>
              <strong>Model_Name:</strong> {model.Model_Name}
            </li>
            <li>
              <strong>VehicleTypeName:</strong> {model.VehicleTypeName}
            </li>
            <li>
              <strong>VehicleTypeId:</strong> {model.VehicleTypeId}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}