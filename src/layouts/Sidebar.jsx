import React, { useState } from "react";
import "./Sidebar.css";
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";
import { UilSignOutAlt } from "@iconscout/react-unicons";
import { SidebarData } from "../data";



const Sidebar = () => {
  const [selected,setSelected] = useState(0)
  
  return (
    <div>
      <div className="tile">
        <h2>KANG BANG</h2>
      </div>
      {/* menu */}
      <div className="menu">
        {SidebarData.map((item, index) => {
          return (
            <div key={index}
            className={selected === index ? "menuItem active" : 'menuItem'}
            onClick={() => setSelected(index)}
            >
              <item.icon />
          
          <span>{item.heading}</span>
        </div>
          )
        })}
      </div>
      
    </div>
  );
};

export default Sidebar;
