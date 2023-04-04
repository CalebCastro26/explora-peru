import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./i18n";
import { ApplicationContextComponent } from "./context/ApplicationContext";
import { ConfigProvider } from "antd";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ApplicationContextComponent>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#e6007e",
        },
      }}
    >
      <App />
    </ConfigProvider>
  </ApplicationContextComponent>
);
