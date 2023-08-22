import React from "react";
import "../components/table.css";

const Datatable = ({ searchedData }) => {
  if (!searchedData || searchedData.length === 0) {
    return <div>No Data</div>;
  }

  return (
    <div className="table">
      {searchedData.map((item) => (
        <ul key={item.id}>
          <li>Reference Number :{item.attributes.referenceNumber}</li>
          <li>Complainer Name :{item.attributes.complainerName}</li>
          <li>Complainer Age :{item.attributes.complainerAge}</li>
          <li>Complainer Telephone :{item.attributes.complainerTelephone}</li>
          <li>Offence :{item.attributes.offence}</li>
          <li>Victim Name :{item.attributes.victimName}</li>
          <li>Victim Residence :{item.attributes.victimResidence}</li>
          <li>Happened Date :{item.attributes.happenedDate}</li>
        </ul>
      ))}
    </div>
  );
};

export default Datatable;
