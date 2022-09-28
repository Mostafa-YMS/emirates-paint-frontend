import React from "react";

export default function Logo() {
  return (
    <div className="app_logo">
      <img alt="Logo" src={require("../assets/images/logo.png").default} />
    </div>
  );
}
