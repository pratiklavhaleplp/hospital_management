import React from 'react';
import './App.css';
import { RibbonComponent, RibbonTabsDirective, RibbonTabDirective, RibbonCollectionsDirective, RibbonCollectionDirective, RibbonGroupsDirective, RibbonGroupDirective, RibbonItemsDirective, RibbonItemDirective } from "@syncfusion/ej2-react-ribbon";
import PatientRegistration from './components/patient-registration/patient-registration';
import PatientSearch from './components/patient-search/PatientSearch';
import { Routes, Route, useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  const tabSelection = (tabSeleted) => {
    const tab = tabSeleted;
    switch (tab) {
      case 'patient_registration':
        console.log('tesitng')
        navigate('/patient-registration')
        break;
      case 'patient_search':
        navigate('/patient-search')
        break;
      default: console.log('nothing is selected...')
        break;
    }
  }
  return (
    <>
      <RibbonComponent style={{ marginTop: '50px' }} id="ribbon">
        <RibbonTabsDirective>
          <RibbonTabDirective header="Front Desk">
            <RibbonGroupsDirective>
              <RibbonGroupDirective orientation='row'>
                <RibbonCollectionsDirective>
                  <RibbonCollectionDirective>
                    <RibbonItemsDirective>
                      <RibbonItemDirective type="Button" buttonSettings={{ iconCss: "e-icons e-cut", content: "Patient registration", isToggle: true, clicked: () => tabSelection('patient_registration') }}></RibbonItemDirective>
                      <RibbonItemDirective type="Button" buttonSettings={{ iconCss: "e-icons e-cut", content: "Patient Search", isToggle: true, clicked: () => tabSelection('patient_search') }}></RibbonItemDirective>
                      <RibbonItemDirective type="Button" buttonSettings={{ iconCss: "e-icons e-cut", content: "Book Appointment", isToggle: true, clicked: () => tabSelection('book_appointment') }}></RibbonItemDirective>
                      <RibbonItemDirective cssClass='item-margin' type="Button" buttonSettings={{ iconCss: "e-icons e-cut", content: "Manage Appointments", isToggle: true, clicked: () => tabSelection('manage-appointments') }}></RibbonItemDirective>
                      <RibbonItemDirective type="Button" buttonSettings={{ iconCss: "e-icons e-cut", content: "OPD Billing", isToggle: true, clicked: () => tabSelection('opd-billing') }}></RibbonItemDirective>
                    </RibbonItemsDirective>
                  </RibbonCollectionDirective>
                </RibbonCollectionsDirective>
              </RibbonGroupDirective>
              <RibbonGroupDirective orientation='row'>
                <RibbonCollectionsDirective>
                  <RibbonCollectionDirective>
                    <RibbonItemsDirective>
                      <RibbonItemDirective type="Button" buttonSettings={{ iconCss: "e-icons e-cut", content: "Appointments", isToggle: true, clicked: () => tabSelection('appointments') }}></RibbonItemDirective>
                      <RibbonItemDirective type="Button" buttonSettings={{ iconCss: "e-icons e-cut", content: "Inbox", isToggle: true, clicked: () => tabSelection('inbox') }}></RibbonItemDirective>
                      <RibbonItemDirective cssClass='item-margin' type="Button" buttonSettings={{ iconCss: "e-icons e-cut", content: "Checked-out Patient", isToggle: true, clicked: () => tabSelection('checked_out_patient') }}></RibbonItemDirective>
                      <RibbonItemDirective type="Button" buttonSettings={{ iconCss: "e-icons e-cut", content: "Logout", isToggle: true, clicked: () => tabSelection('logout') }}></RibbonItemDirective>
                      <RibbonItemDirective type="Button" buttonSettings={{ iconCss: "e-icons e-cut", content: "Checked-in Patient", isToggle: true, clicked: () => tabSelection('checked-in-patient') }}></RibbonItemDirective>
                    </RibbonItemsDirective>
                  </RibbonCollectionDirective>
                </RibbonCollectionsDirective>
              </RibbonGroupDirective>
            </RibbonGroupsDirective>
          </RibbonTabDirective>
          <RibbonTabDirective header="Optome">
            <RibbonGroupsDirective>
              <RibbonGroupDirective header="" orientation='row'>
                <RibbonCollectionsDirective>
                  <RibbonCollectionDirective>
                    <RibbonItemsDirective>
                      <RibbonItemDirective type="Button" buttonSettings={{ iconCss: "e-icons e-cut", content: "Vision Assesment", isToggle: true, clicked: () => tabSelection('vision_assesment') }}>
                      </RibbonItemDirective>
                    </RibbonItemsDirective>
                  </RibbonCollectionDirective>
                </RibbonCollectionsDirective>
              </RibbonGroupDirective>
              <RibbonGroupDirective orientation='row'>
                <RibbonCollectionsDirective>
                  <RibbonCollectionDirective>
                    <RibbonItemsDirective>
                      <RibbonItemDirective type="Button" buttonSettings={{ iconCss: "e-icons e-cut", content: "Appointments", isToggle: true, clicked: () => tabSelection('appointments') }}></RibbonItemDirective>
                      <RibbonItemDirective type="Button" buttonSettings={{ iconCss: "e-icons e-cut", content: "Inbox", isToggle: true, clicked: () => tabSelection('inbox') }}></RibbonItemDirective>
                      <RibbonItemDirective type="Button" buttonSettings={{ iconCss: "e-icons e-cut", content: "Checked-in Patient", isToggle: true, clicked: () => tabSelection('checked_in_patient') }}></RibbonItemDirective>
                      <RibbonItemDirective cssClass='item-margin' type="Button" buttonSettings={{ iconCss: "e-icons e-cut", content: "Checked-out Patient", isToggle: true, clicked: () => tabSelection('checked_out_patient') }}></RibbonItemDirective>
                      <RibbonItemDirective type="Button" buttonSettings={{ iconCss: "e-icons e-cut", content: "Logout", isToggle: true, clicked: () => tabSelection('logout') }}></RibbonItemDirective>
                    </RibbonItemsDirective>
                  </RibbonCollectionDirective>
                </RibbonCollectionsDirective>
              </RibbonGroupDirective>
            </RibbonGroupsDirective>
          </RibbonTabDirective>
          <RibbonTabDirective header="Doctor"></RibbonTabDirective>
          <RibbonTabDirective header="Optician"></RibbonTabDirective>
          <RibbonTabDirective header="Pharmacist"></RibbonTabDirective>
          <RibbonTabDirective header="Billing"></RibbonTabDirective>
          <RibbonTabDirective header="Admin"></RibbonTabDirective>
          <RibbonTabDirective header="Super User"></RibbonTabDirective>
        </RibbonTabsDirective>
      </RibbonComponent>
      <Routes>
        <Route path="/patient-registration" element={<PatientRegistration />}></Route>
        <Route path="/patient-search" element={<PatientSearch />}></Route>
      </Routes>
    </>
  );
}

export default App;
