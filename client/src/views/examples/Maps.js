/*!

=========================================================
* Argon Dashboard React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useState } from "react";

// reactstrap components
import { Card, Container, Row } from "reactstrap";

import { Data } from "components/Anas/DataXLSX/Data"
import * as XLSX from 'xlsx'

// core components
import Header from "components/Headers/Header.js";
import BtnModalTimeOut from "components/Anas/ModalButtontimeout/ModalButtontimeout";

const MapWrapper = () => {
  const mapRef = React.useRef(null);
  // React.useEffect(() => {

  //   let google = window.google;
  //   let map = mapRef.current;
  //   let lat = "40.748817";
  //   let lng = "-73.985428";
  //   const myLatlng = new google.maps.LatLng(lat, lng);
  //   // const mapOptions = {
  //   //   zoom: 12,
  //   //   center: myLatlng,
  //   //   scrollwheel: false,
  //   //   zoomControl: true,
  //   //   styles: [
  //   //     {
  //   //       featureType: "administrative",
  //   //       elementType: "labels.text.fill",
  //   //       stylers: [{ color: "#444444" }],
  //   //     },
  //   //     {
  //   //       featureType: "landscape",
  //   //       elementType: "all",
  //   //       stylers: [{ color: "#f2f2f2" }],
  //   //     },
  //   //     {
  //   //       featureType: "poi",
  //   //       elementType: "all",
  //   //       stylers: [{ visibility: "off" }],
  //   //     },
  //   //     {
  //   //       featureType: "road",
  //   //       elementType: "all",
  //   //       stylers: [{ saturation: -100 }, { lightness: 45 }],
  //   //     },
  //   //     {
  //   //       featureType: "road.highway",
  //   //       elementType: "all",
  //   //       stylers: [{ visibility: "simplified" }],
  //   //     },
  //   //     {
  //   //       featureType: "road.arterial",
  //   //       elementType: "labels.icon",
  //   //       stylers: [{ visibility: "off" }],
  //   //     },
  //   //     {
  //   //       featureType: "transit",
  //   //       elementType: "all",
  //   //       stylers: [{ visibility: "off" }],
  //   //     },
  //   //     {
  //   //       featureType: "water",
  //   //       elementType: "all",
  //   //       stylers: [{ color: "#5e72e4" }, { visibility: "on" }],
  //   //     },
  //   //   ],
  //   // };

  //   map = new google.maps.Map(map, mapOptions);

  //   const marker = new google.maps.Marker({
  //     position: myLatlng,
  //     map: map,
  //     animation: google.maps.Animation.DROP,
  //     title: "Light Bootstrap Dashboard PRO React!",
  //   });

  //   const contentString =
  //     '<div class="info-window-content"><h2>Light Bootstrap Dashboard PRO React</h2>' +
  //     "<p>A premium Admin for React-Bootstrap, Bootstrap, React, and React Hooks.</p></div>";

  //   const infowindow = new google.maps.InfoWindow({
  //     content: contentString,
  //   });

  //   google.maps.event.addListener(marker, "click", function () {
  //     infowindow.open(map, marker);
  //   });
  // }, []);

  // on change states
  const [excelFile, setExcelFile] = useState(null);
  const [excelFileError, setExcelFileError] = useState(null);

  // submit
  const [excelData, setExcelData] = useState(null);
  // it will contain array of objects

  // handle File
  const fileType = ['text/csv'];
  const handleFile = (e) => {
    let selectedFile = e.target.files[0];
    if (selectedFile) {
      // console.log(selectedFile.type);
      if (selectedFile && fileType.includes(selectedFile.type)) {
        let reader = new FileReader();
        reader.readAsArrayBuffer(selectedFile);
        reader.onload = async (e) => {
          setExcelFileError(null);
          setExcelFile(e.target.result);


          const data = e.target.result;
          const workbook = XLSX.read(data, { type: "array" });
          const sheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[sheetName];
          let json = XLSX.utils.sheet_to_json(worksheet);
          let counter = 0
          let part = json.length > 100 ? Math.floor(json.length / 10) : Math.floor(json.length / 5)
          let slice = []
          let calculated = []
          json.forEach((command) => {
            if (counter != part) {
              slice.push(command)
              counter++
            } else {
              calculated.push(slice)
              slice = []
              counter = 0
            }
          })

          let result = await Promise.all(
            calculated.map(async (slice) => {
              return await fetch('http://localhost:8080/exel/uploadData', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(slice)
              })
            })
          )

          json = json.filter(e => !e.Article.includes('-->'))
          json = json.reduce((output, elment) => {
            (output[elment.Article] = output[elment.Article] || []).push(elment);
            return output;
          }, {});
          console.log(json);
          let wsslt = 1
          for (const plat in json) {
            if (Object.hasOwnProperty.call(json, plat)) {
              const send = {
                name: plat,
                qty: json[plat].length,
              };

              setTimeout(async () => {
                let ress = await fetch('http://localhost:8080/exel/stock', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(send)
                })
                let res = await ress.json()
              }, 2 * wsslt);
              console.log(wsslt);
              wsslt++
            }
          }
        }
      }
      else {
        setExcelFileError('Please select only excel file types');
        setExcelFile(null);
      }
    }
    else {
      console.log('plz select your file');
    }
  }

  // submit function
  const handleSubmit = (e) => {
    e.preventDefault();
    if (excelFile !== null) {
      const workbook = XLSX.read(excelFile, { type: 'buffer' });
      const worksheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[worksheetName];
      const data = XLSX.utils.sheet_to_json(worksheet);
      setExcelData(data);
    }
    else {
      setExcelData(null);
    }
  }

  return (
    <>
      <div
        style={{ height: `auto` }}
        className="map-canvas"
        id="map-canvas"
      >
        <div className='form'>
          <form className='form-group' autoComplete="off"
            onSubmit={handleSubmit}>
            <label><h5>Upload Excel file</h5></label>
            <br></br>
            <input type='file' className='form-control'
              onChange={handleFile} required></input>
            {excelFileError && <div className='text-danger'
              style={{ marginTop: 5 + 'px' }}>{excelFileError}</div>}
            <button type='submit' onClick={BtnModalTimeOut} className='btn btn-success'
              style={{ marginTop: 5 + 'px' }}>Submit</button>
          </form>
        </div>
        <h5>View Excel file</h5>
        <div className='viewer'>
          {excelData === null && <>No file selected</>}
          {excelData !== null && (
            <div className='table-responsive'>
              <table className='table'>
                <thead>
                  <tr>
                    <th scope='col'>ID</th>
                    <th scope='col'>ID_TICKET</th>
                    <th scope='col'>Ticket</th>
                    <th scope='col'>Dates</th>
                    <th scope='col'>Heure</th>
                    <th scope='col'>Code</th>
                    <th scope='col'>Article</th>
                    <th scope='col'>Famille</th>
                    <th scope='col'>PRIX_A</th>
                    <th scope='col'>PRIX_MP</th>
                    <th scope='col'>PRIX_V</th>
                    <th scope='col'>FALSE</th>
                    <th scope='col'>Remise</th>
                    <th scope='col'>TAUX_TVA</th>
                    <th scope='col'>Caissier</th>
                    <th scope='col'>Vendeur</th>
                    <th scope='col'>CODE_CLIENT</th>
                    <th scope='col'>CLIENT</th>
                    <th scope='col'>POSTE</th>
                    <th scope='col'>OPERATION</th>
                    <th scope='col'>CLOTURE_CAISSIER</th>
                    <th scope='col'>CLOTURE_GLOBALE</th>
                    <th scope='col'>NOTES</th>
                  </tr>
                </thead>
                <tbody>
                  <Data excelData={excelData} />
                </tbody>
              </table>
            </div>
          )}
        </div>

      </div>
    </>
  );
};

const Maps = () => {
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <div className="col">
            <Card className="shadow border-0 px-12 py-4">
              <MapWrapper />
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Maps;
