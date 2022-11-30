import React, { Component } from 'react';
import { useState } from 'react';
import { Toggletip,ToggletipContent,ToggletipActions ,ToggletipButton,Tabs,TabList,Tab} from '@carbon/react';
import { TextInput } from '@carbon/react';
import { Button } from '@carbon/react';
import ReactDOM from 'react-dom/client';
import NewTabs from '../NewTabs/NewTabs';
import './ToggleTip.scss';


function ToggleTip() {
    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking]=useState(false); 
    

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  const handleNewTab =() =>{
      setIsClicking()
  }
  return (
    <Toggletip  className='styleTab' >
            <ToggletipButton label="Show information" >

                <Tabs >
                 <TabList  aria-label="List of tabs" contained activation="manual" >
                    <Tab style={{
                        backgroundColor: isHovering ? 'white' : '',
                        color:'blue'
                        }}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}> New Workspace  +</Tab>    
                 </TabList>
              </Tabs> 
           </ToggletipButton>   
        <ToggletipContent className='styleToggle'>
            <h4 style={{textAlign:'start'}}>Create New Workspace</h4>
            <p style={{textAlign:'start'}}>Name workspace and create to begin adding widgets</p>
            <TextInput
              data-modal-primary-focus
              id="text-input-1"
              labelText="Workspace Name"
              placeholder="Enter workspace name"
              style={{ marginBottom: '1rem'}}
            />    
        <ToggletipActions>
            
            <Button size="sm" onClick={handleNewTab}>Create</Button>
        </ToggletipActions>
        </ToggletipContent>
        </Toggletip>
  )
}

export default ToggleTip


