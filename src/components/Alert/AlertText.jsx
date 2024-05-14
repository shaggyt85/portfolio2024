export const AlertText = ({ type }) => (
  <p
    className={`${
      type === "danger" ? "bg-red-500" : "bg-blue-500"
    } flex items-center rounded-full uppercase px-2 py-1 font-semibold mr-3 text-xs`}
  >
    {type === "danger" ? "Failed" : "Success"}
  </p>
);
