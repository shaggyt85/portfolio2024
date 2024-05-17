export const FilterProjects = (projects, query) =>
  !query
    ? projects
    : projects.filter((project) =>
        project.techs.toLowerCase().includes(query.toLowerCase())
      );
