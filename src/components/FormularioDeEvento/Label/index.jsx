export default function Label({ texto, htmlfor }) {
  return <label htmlFor={htmlfor}>{texto}</label>;
}
