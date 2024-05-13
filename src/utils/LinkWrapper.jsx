/*
  Aquí se define y exporta el componente LinkWrapper. Este componente acepta varias props: to, className, children y cualquier otra prop que se pase al componente (representada por ...props).

to: Esta prop es la ruta a la que el componente Link debe navegar cuando se hace clic en él.
className: Esta prop es la clase CSS que se debe aplicar al componente Link.
children: Esta prop son los elementos hijos que se deben renderizar dentro del componente Link.
...props: Esta sintaxis representa cualquier otra prop que se pase al componente LinkWrapper. Estas props se pasan directamente al componente Link.
*/
import { Link } from "react-router-dom";

export const LinkWrapper = ({ to, className, children, ...props }) => (
  <Link to={to} className={className} {...props}>
    {children}
  </Link>
);
