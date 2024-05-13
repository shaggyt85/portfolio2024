/** useAlert es un hook personalizado que maneja el estado y la lógica de una alerta
 * @returns {Object} {show, text, type, showAlert, hideAlert}
 * @returns {Boolean} show - Estado de la alerta
 * @returns {String} text - Texto de la alerta
 * @returns {String} type - Tipo de alerta
 * @returns {Function} showAlert - Muestra la alerta
 * @returns {Function} hideAlert - Oculta la alerta
 */

import { useState } from "react";

export const useAlert = () => {
  const [show, setShow] = useState(false);
  const [text, setText] = useState("");
  const [type, setType] = useState("danger");

  const showAlert = (alertText, alertType = "danger") => {
    setShow(true);
    setText(alertText);
    setType(alertType);
  };
  const hideAlert = () => {
    setShow(false);
    setText("");
    setType("danger");
  };
  return { show, text, type, showAlert, hideAlert };
};
