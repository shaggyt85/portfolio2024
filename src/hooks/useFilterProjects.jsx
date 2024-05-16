import { useState, useEffect } from "react";

export const useFilterProjects = (projects, query, filterFunction) => {
  const [filteredProjects, setFilteredProjects] = useState([]);

  useEffect(() => {
    setFilteredProjects(filterFunction(projects, query));
  }, [projects, query, filterFunction]);

  return filteredProjects;
};
