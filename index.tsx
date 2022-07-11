// FILE WITH ROOT COMPONENT. DOES NOT NEED EDITING
import React from "react";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import { IUser } from "./interface";
import "./index.css";
import {
  FirstComponent,
  SecondComponent,
  ThirdComponent,
  FourthComponent,
} from "./taskComponents";

function App() {
  const [state, setState] = useState<IUser>({
    name: "Andy",
    age: 21,
  });

  return (
  <div>
      {/* button to redraw all child components without changing their props values */}
     <button className="btn btn-info" onClick={() => setState({ ...state })}>
        components force updating
      </button>

      <FirstComponent {...state} />
      <SecondComponent user={state} />
      <ThirdComponent {...state} />
      <FourthComponent user={state} />;
    </div>
  
  );
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  // <StrictMode>
    <App />
  // </StrictMode>
);
