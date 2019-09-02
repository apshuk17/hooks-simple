import React from "react";
import useResources from './useResources';
import Resource from "./Resource";

const ResourceList = ({ resource }) => {
  const resources = useResources(resource);

  return (
    <div>
      <h2>{resource.toUpperCase()}</h2>
      <ul>
        {resources.map(({ id, ...otherProps }) => (
          <Resource key={id} type='posttodo' {...otherProps} />
        ))}
      </ul>
    </div>
  );
};

export default ResourceList;
