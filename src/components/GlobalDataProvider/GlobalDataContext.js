import React, { useContext, useEffect, useState } from "react";
import api from "../../api/userAPI";

const GlobalDataContext = React.createContext();

function GlobalDataProvider(props) {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState({
    username: "thang",
  });
  useEffect(() => {}, [loading]);
  async function fetchUserData() {
    setLoading(true);
    const userData = await api.register();
    setLoading(false);
    setValue(userData);
  }

  const setField = (field, val) => {
    const _value = { ...value };
    _value[field] = val;
    setValue(_value);
  };

  const providerValues = {
    ...value,
    loading,
    setField,
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
