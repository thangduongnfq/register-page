// import React from "react";
import { useGlobalData } from "../../components/GlobalDataProvider/GlobalDataContext";
import React, { useEffect, useRef, useState } from "react";
export default function HiddenPage() {
  // const [hiddenDiv, sethiddenDiv] = useState(true);
  let globalData = useGlobalData();
  const { hiddenDiv, setHiddenPage } = globalData;
  const ref = useRef();
  useEffect(() => {
    if (hiddenDiv === true) {
      ref.current.style.transform = "translateX(100%)";
    } else {
      ref.current.style.transform = "translateX(0%)";
    }
  }, [hiddenDiv]);
  return (
    <div className="intro-Change" ref={ref}>
      <div className="intro-Change__container">
        <div className="intro-Change__icon">
          <img
            src="https://affixtheme.com/html/xmee/demo/img/logo-10.png"
            alt=""
          />
        </div>
        <h1>Welcome To xmee</h1>
        <p>
          Grursus mal suada faci lisis Lorem ipsum dolarorit more ametion
          consectetur elit. Vesti at bulum nec odio aea the dumm ipsumm ipsum
          that dolocons rsus mal suada.
        </p>
        <div
          className="btnChange"
          onClick={() => {
            setHiddenPage();
          }}
        >
          {hiddenDiv === true ? "Login" : "Register"}
        </div>
      </div>
    </div>
  );
}
