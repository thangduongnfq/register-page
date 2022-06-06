import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/userAPI";
import animalAPI from "../../api/animalAPI";

const GlobalDataContext = React.createContext();

function GlobalDataProvider(props) {
  const [loading, setLoading] = useState(true);
  const [hiddenDiv, sethiddenDiv] = useState(false);
  let navigator = useNavigate();
  const [value, setValue] = useState({
    username: "",
    email: "",
    password: "",
    roles: [],
  });

  async function fetchUserData(data) {
    const userData = await api.register(data);
    setHiddenPage();
    setValue(userData);
  }

  const fetchAllUserData = async () => {
    setLoading(true);
    const allDataUser = await animalAPI.getAll();
    setLoading(false);
    return allDataUser;
  };

  const deleteUserById = async (id) => {
    setLoading(true);
    const allDataUser = await animalAPI.deleteById(id);
    setLoading(false);
    return allDataUser;
  };

  async function login(data) {
    const userData = await api.login(data);
    if (userData.status === "200") {
      localStorage.setItem("token", userData.Token);
      localStorage.setItem("roles", userData.role);
      setField("roles", userData.role);
      setValue(userData);
      navigator("/Dashboard");
    } else {
      alert("not found");
    }
  }

  function setLoaddingPage() {
    setLoading(!loading);
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
    fetchAllUserData,
    setLoaddingPage,
    deleteUserById,
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
