import { Tab, TabList,Tabs } from '@carbon/react'
import React from 'react'
import { useState } from 'react';

function NewTabs() {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  return (
    <Tabs>
        <TabList aria-label="List of tabs" contained activation="manual">
             <Tab style={{
                        backgroundColor: isHovering ? 'white' : '',
                        color:'blue'
                        }}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}>New Workspace  +</Tab>
        </TabList>
    </Tabs>
  )
}

export default NewTabs
