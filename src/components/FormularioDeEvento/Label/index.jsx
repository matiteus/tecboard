import "./label.estilos.css";
export default function Label({ children, htmlfor }) {
  return (
    <label className="label" htmlFor={htmlfor}>
      {children}
    </label>
  );
}
