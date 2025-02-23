export function InputText({ type = "text", name, id, onChange, value }) {
  return (
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      className="ring-primary-500 focus:ring-primary-600 rounded-lg px-6 py-2.5 text-lg ring focus:border-none focus:outline-none"
    />
  );
}
