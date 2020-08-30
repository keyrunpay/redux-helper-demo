import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchFromApi } from "redux-helper-np";
import Axios from "axios";

function Users() {
  const state = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const fetchUser = () => {
    return Axios.get("https://jsonplaceholder.typicode.com/users");
  };

  React.useEffect(() => {
    fetchFromApi(dispatch, "users", fetchUser);
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      {state.status === "loading" && <p>Loading ...</p>}
      {state.status === "error" && <p style={{ color: "red" }}>{JSON.stringify(state.data)}</p>}
      {state.status === "data" && (
        <React.Fragment>
          {state.data.map((item) => (
            <div key={item.id} className="card">
              <h3>{item.name}</h3>
              <p>{item.email}</p>
            </div>
          ))}
        </React.Fragment>
      )}
    </div>
  );
}

export default Users;
