import { useState } from "react";
import { FilterProjects, ProjectList } from "../components/Project";
import { useFilterProjects } from "../hooks"; //para usarlo con firebase necesita agregarle el useProject del hooks
import { Input, Image } from "../utils";
import { mynauiSearch } from "../assets/icons";
import { ProjectsListData } from "../constants/ProjectsListData";
export const Projects = ({ filterFunction = FilterProjects }) => {
  // const data = useProject();
  const [search, setSearch] = useState("");
  // const results = useFilterProjects(data, search); se utiliza para trabajarlo con el firebases.
  // const results = useFilterProjects(data, search, filterFunction);
  const results = useFilterProjects(ProjectsListData, search, filterFunction);
  return (
    <section className="max-container">
      <div className="flex justify-center items-center">
        <Input
          id="search"
          name=""
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="search for tecnologies"
          className="searchInput"
        />
        <Image src={mynauiSearch} alt="Search" className={"w-7"} />
      </div>
      <div className="flex flex-wrap items-center justify-evenly relative">
        <ProjectList projects={results} />
      </div>
    </section>
  );
};
