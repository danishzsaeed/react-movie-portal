import React, {useState, useEffect} from "react";
import { NavLink } from "react-router-dom";
import { RiAliensLine } from "react-icons/ri";
import links from "../data/data";
import axios from "axios";

const Sidebar = ({onSideItemClick}) => {

  const filterMovies = async (e) => {
    onSideItemClick(e)
  }

  return (
    <div className="sidebar overflow-y-auto flex flex-col fixed h-full">
      <div className="logo-section flex justify-center pt-4">
        <img src="./images/logo.png" className="w-4/6" />
      </div>
      <div className="sidebar-section py-3">
        <div className="pb-3">
            {links.map((item) => (
              <div key={item.title} className="border-t">
                <div className=" ml-4 mt-4">
                <p>{item.title}</p>
                {item.links.map((link) => (
                  <NavLink key={link.href} className="flex h-12 font-normal gap-5 pt-3 pb-2.5 rounded-lg text-black text-md m-2">
                    <span className="w-8 h-8">{link.icon}</span>
                    <span className="capitalize" onClick={() => filterMovies(link)}>{link.name}</span>
                  </NavLink>
                ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
