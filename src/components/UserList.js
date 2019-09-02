import React from "react";
import useResources from "./useResources";
import Resource from "./Resource";

const UserList = () => {
  const resources = useResources("users");
  return (
    <div>
      <ul>
        {resources.map(({ id, ...otherProps }) => (
          <Resource key={id} type='user' {...otherProps} />
        ))}
      </ul>
    </div>
  );
};

export default UserList;
