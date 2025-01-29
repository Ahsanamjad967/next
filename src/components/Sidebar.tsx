import React, { useState } from "react";
import { motion } from "framer-motion";
import { HomeIcon, Menu, Settings, User } from "lucide-react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const menuItems = [
    { name: "Home", icon: <HomeIcon />, path: "/" },
    { name: "Profile", icon: <User />, path: "/profile" },
    { name: "Settings", icon: <Settings />, path: "/settings" },
  ];

  return (
    <div className="inline-flex absolute right-0">
      <motion.div
        animate={{ width: isOpen ? "16rem" : "5rem" }} 
        transition={{ duration: 0.3, ease: "easeInOut" }} 
        className="h-screen bg-gray-900 text-white p-5 pt-8 flex flex-col shadow-lg"
      >

        <button
          onClick={toggleSidebar}
          className="text-white text-2xl p-3 focus:outline-none mb-8"
        >
          <Menu />
        </button>

        <ul className="space-y-4">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="flex items-center gap-4 p-3 hover:bg-gray-700 rounded-lg cursor-pointer"
            >
        
              <span className="text-xl">{item.icon}</span>

              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 0.2 }}
                className={`text-lg font-medium ${!isOpen && "hidden"}`}
              >
                {item.name}
              </motion.span>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default Sidebar;
