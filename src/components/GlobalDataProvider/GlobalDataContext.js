import React, { useContext, useEffect, useState } from "react";
import api from "../../api/userAPI";

const GlobalDataContext = React.createContext();

function GlobalDataProvider(props) {
  const [loading, setLoading] = useState(false);
  const [hiddenDiv, sethiddenDiv] = useState(true);

  const [value, setValue] = useState({
    username: "",
    email: "",
    password: "",
  });
  useEffect(() => {}, [loading]);
  async function fetchUserData(data) {
    setLoading(true);
    const userData = await api.register(data);
    setLoading(false);
    setHiddenPage();
    setValue(userData);
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
