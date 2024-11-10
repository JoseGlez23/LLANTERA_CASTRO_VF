// Sidebar.jsx
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, AddCircle, Edit } from "@mui/icons-material"; // Importamos el ícono de edición
import { useSidebar } from "../context/SidebarContext";
import "../Sidebar.css";
import LogoLlantera from "../assets/img/LlanteraLogo.png";
import "@fontsource/libre-baskerville";

function Sidebar() {
  const location = useLocation();
  const { isSidebarCollapsed, toggleSidebar } = useSidebar();

  // Verifica si la ruta actual es la de edición
  const isEditRoute = location.pathname.startsWith("/Editar");

  return (
    <>
      {/* Botón de colapso */}
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        {isSidebarCollapsed ? "☰" : "✕"}
      </button>

      <div className={`sidebar ${isSidebarCollapsed ? "collapsed" : ""}`}>
        <div className="logo-container">
          <Link to="/llantas">
            <img src={LogoLlantera} alt="Logo" className="logo" />
          </Link>
        </div>
        <ul className="nav-links">
          <li>
            <Link
              to="/llantas"
              className={`nav-link ${
                location.pathname === "/llantas" ? "active" : ""
              }`}
            >
              <Home className="nav-icon" />
              {!isSidebarCollapsed && "INICIO"}
            </Link>
          </li>
          <li>
            <Link
              to="/nuevallanta"
              className={`nav-link ${
                location.pathname === "/nuevallanta" ? "active" : ""
              }`}
            >
              <AddCircle className="nav-icon" />
              {!isSidebarCollapsed && "AGREGAR"}
            </Link>
          </li>
          {isEditRoute && (
            <li>
              <Link
                to={location.pathname}
                className={`nav-link ${isEditRoute ? "active" : ""}`}
              >
                <Edit className="nav-icon" />
                {!isSidebarCollapsed && "EDITAR"}
              </Link>
            </li>
          )}
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
