import React, {useState} from 'react';
import BreadCrumbComponent from '../../components/Breadcrumb/Breadcrumb';
import './DigitalTwinPage.scss';
import { Button, TextInput , Modal,Tab,TabList, Tabs, ToggletipLabel, TabPanel} from '@carbon/react';
import ReactDOM from 'react-dom/client';
import ToggleTip from '../../components/ToggleTip/ToggleTip';
import NewTabs from '../../components/NewTabs/NewTabs';



const DigitalTwinPage = () => {


  return (
    <div>
        <div>
            <BreadCrumbComponent />
        </div>
           <h1 className="DigitalTwin">My Digital Twin</h1>
           <div className='Toggletip'>
              <ToggleTip />
           </div>
            
    </div>
  )
}
export default DigitalTwinPage