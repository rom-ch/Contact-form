export function InputRadio({ name, id, value, checked, onChange }) {
  return (
    <div
      className={`peer-checked:bg-primary-200 ring-primary-500 focus:ring-primary-600 flex w-full items-center gap-3 rounded-lg px-6 py-2.5 text-lg ring ${checked === value ? "bg-primary-200 ring-primary-600" : ""}`}
    >
      <label htmlFor={id} className="relative flex cursor-pointer items-center">
        <input
          type="radio"
          name={name}
          id={id}
          value={value}
          checked={checked === value}
          onChange={onChange}
          className="peer checked:border-primary-600 border-primary-500 focus:border-primary-600 size-5 cursor-pointer appearance-none rounded-full border transition-all focus:border-2 focus:outline-none"
        />
        <span className="bg-primary-600 absolute top-1/2 left-1/2 size-3 -translate-x-1/2 -translate-y-1/2 transform rounded-full opacity-0 transition-opacity duration-200 peer-checked:opacity-100"></span>
      </label>
      <label htmlFor={id} className="cursor-pointer text-lg">
        {value}
      </label>
    </div>
  );
}
