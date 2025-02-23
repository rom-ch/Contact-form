export function ErrorMessage({ errors }) {
  return <p className="text-secondary text-sm">{errors.join(". ")}</p>;
}
