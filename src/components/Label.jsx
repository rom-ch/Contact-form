export function Label({ children, htmlFor }) {
  return (
    <label htmlFor={htmlFor} className="font-medium">
      {children} <span className="text-primary-600 ml-1">*</span>
    </label>
  );
}
