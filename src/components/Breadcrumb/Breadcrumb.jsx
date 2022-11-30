import React from 'react';
import './Breadcrumb.scss';
import {Breadcrumb,BreadcrumbItem} from '@carbon/react';

  
  
  function BreadcrumbComponent() {
    
    return (
      
      <div>
        <div className="BreadcrumbDiv">
          <Breadcrumb >
            <BreadcrumbItem href="/#">Home</BreadcrumbItem> 
            <BreadcrumbItem href="/#">Patient Tracker</BreadcrumbItem> 
            <BreadcrumbItem href="/#">My Digital Twin</BreadcrumbItem>
          </Breadcrumb>
        </div>

        
          
        
      </div>
    )
  }
    
export default BreadcrumbComponent
