import { useState } from "react";
import { FilterProjects, ProjectList } from "../components/Project";
import { useProject, useFilterProjects } from "../hooks";
import { Input } from "../utils";
export const Projects = ({ filterFunction = FilterProjects }) => {
  const data = useProject();
  const [search, setSearch] = useState("");
  const results = useFilterProjects(data, search, filterFunction);
  return (
    <>
      <Input
        name=""
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="search"
      />
      <ProjectList projects={results} />
    </>
  );
};
