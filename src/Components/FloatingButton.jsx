import React from "react";

export default function FloatingButton({ texto, Icon, clase }) {
  return (
    <div className={`btn-flotante ${clase} flotante-contacto`}>
      <Icon style={{ color: "white", fontSize: 22 }} />
      <p>{texto}</p>
    </div>
  );
}
