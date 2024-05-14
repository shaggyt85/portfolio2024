export const LinkContent = ({ name, iconUrl }) => (
  <>
    <span className="text-base">{name}</span>
    <img className=" h-12 " src={iconUrl} alt={name} />
  </>
);
