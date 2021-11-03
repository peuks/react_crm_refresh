import { loadCustomers, loadInvoices } from "actions/customersActions";
import { login } from "actions/userAction";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import authenticate from "services/authApi";

const model = {
  username: "",
  password: "",
};

const useLogin2 = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [credentials, setCredentials] = useState(model);

  const [error, setError] = useState("");

  const { username, password } = credentials;

  const handleChanged = ({ currentTarget }) => {
    const { value, name } = currentTarget;
    setCredentials({ ...credentials, [name]: value });
  };

  // Submit handling
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await authenticate(credentials);
      setError(false);
      dispatch(login());
      dispatch(loadInvoices());
      dispatch(loadCustomers());
      history.replace("/");
    } catch (error) {
      setError("Wrong password or Email");
    }
  };

  const { isAuthenticated } = useSelector((state) => state.user);
  isAuthenticated && history.push("/");

  return {
    handleChanged,
    handleSubmit,
    error,
    credentials,
    username,
    password,
  };
};

export default useLogin2;
