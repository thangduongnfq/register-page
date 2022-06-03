import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/userAPI";

const GlobalDataContext = React.createContext();

function GlobalDataProvider(props) {
  const [loading, setLoading] = useState(false);
  const [hiddenDiv, sethiddenDiv] = useState(false);
  let navigator = useNavigate();
  const [value, setValue] = useState({
    username: "",
    email: "",
    password: "",
    roles: [],
  });
  useEffect(() => {}, [loading]);
  async function fetchUserData(data) {
    setLoading(true);
    const userData = await api.register(data);
    setLoading(false);
    setHiddenPage();
    setValue(userData);
  }

  async function login(data) {
    setLoading(true);
    const userData = await api.login(data);
    if (userData.status === "200") {
      localStorage.setItem("token", userData.Token);
      localStorage.setItem("roles", userData.role);
      setField("roles", userData.role);
      setLoading(false);
      setValue(userData);
      navigator("/Dashboard");
    } else {
      setLoading(false);
      alert("not found");
    }
  }

  const setHiddenPage = () => {
    sethiddenDiv(!hiddenDiv);
  };
  const setField = (field, val) => {
    const _value = { ...value };
    _value[field] = val;
    setValue(_value);
  };

  const providerValues = {
    ...value,
    loading,
    hiddenDiv,
    setField,
    setHiddenPage,
    login,
    fetchUserData,
  };

  return (
    <GlobalDataContext.Provider value={providerValues}>
      {props.children}
    </GlobalDataContext.Provider>
  );
}

function useGlobalData() {
  return useContext(GlobalDataContext);
}

export { GlobalDataProvider, useGlobalData, GlobalDataContext };
