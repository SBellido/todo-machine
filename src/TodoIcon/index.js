import { ReactComponent as CheckSVG } from "./images/check.svg";
import { ReactComponent as DeleteSVG } from "./images/delete.svg";
import "./TodoIcon.css";

/**
 * Componente TodoIcon
 *
 * Este componente representa un icono de TODO.
 *
 * Props:
 * - type: Tipo de icono (check o delete).
 * - color: Color del icono.
 * - onClick: Función que se ejecuta al hacer clic en el icono.
 */

const iconTypes = {
  check: (color) => <CheckSVG className="Icon-svg" fill={color} />,
  delete: (color) => <DeleteSVG className="Icon-svg" fill={color} />,
};

function TodoIcon({ type, color, onClick }) {
  return (
    <span
      className={`Icon-container  Icon-container-${type}`}
      onClick={onClick}
    >
      {iconTypes[type](color)}
    </span>
  );
}

export { TodoIcon };
