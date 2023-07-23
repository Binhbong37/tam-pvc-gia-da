import React, { useState } from "react";
import "./Sidebar.css";
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";
import { SidebarData } from "../data";

const Sidebar = () => {
  const [selected,setSelected] = useState(0)
  const [expand, setExpand] = useState(true)
  

  const closeActive = (ix) => {
    setSelected(ix)
    setExpand(false)
  }

  const sideBarVariant = {
    true: {
      left:'0'
    },
    false: {
      left:'-45%'
    }
  }
  return (
    <>
    <div className="bars" style={expand? {
      left:"45%"
    }:{left:"5%"}}
    onClick={() => setExpand(!expand)}
    >
        <UilBars />
      </div>
    <motion.div className="sidebar"
    variants={sideBarVariant}
    animate={window.innerWidth <= 768 ? `${expand}` : ``}
    >
      
      <div className="title-logo">
        <h2>KANG BANG</h2>
      </div>
      {/* menu */}
      <div className="menu">
        {SidebarData.map((item, index) => {
          return (
            <div key={index}
            className={selected === index ? "menuItem active" : 'menuItem'}
            onClick={() => closeActive(index)}
            >
              <item.icon />
          
          <span>{item.heading}</span>
        </div>
          )
        })}
      </div>
      
    </motion.div>
    </>
  );
};

export default Sidebar;
