import "./styles.css";
import React, { useState } from "react";
import pic from "./images/loginph.png";
import data from "./mock.json";
import headerdata from "./mock-header.json";
import EdiText from "react-editext";
import { Container } from "./Container";
import "bootstrap/dist/css/bootstrap.min.css";
export default function App() {
  const [records, setRecords] = useState(data);
  const [hrecords, sethrecords] = useState(headerdata);
  const triggerText = "Edit";
  const onSubmit = (event) => {
    event.preventDefault(event);
  };

  return (
    <div className="App">
      <Container id="fk" triggerText={triggerText} onSubmit={onSubmit} />
      <br />
      <br />
      <center>
        <img src={pic} />
        <br />
        <center>
          <button id="fks" type="button" class="btn btn-secondary" onClick="#">
            Patient Name
          </button>
        </center>
      </center>

      <table className="tbx">
        <div className="rcol">
          <tr>
            {hrecords.map((hrecord) => (
              <td>
                <th class="del">
                  <b>{hrecord.labelname}</b>
                </th>
                <th class="del">{hrecord.valuex}</th>
              </td>
            ))}
          </tr>
        </div>
      </table>
      <table id="tableone" border="1">
        {records.map((record) => (
          <tr>
            <td class="del">
              <b>{record.labelname}</b>
            </td>
            <td>{record.valuex}</td>
            {/*  <td contenteditable="true">text here</td>*/}
            <hr />
          </tr>
        ))}
      </table>
    </div>
  );
}
