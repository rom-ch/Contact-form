export function FormGroup({ children, type = "" }) {
  if (type === "fieldset")
    return (
      <fieldset className="mb-6 flex cursor-default flex-col gap-2">
        {children}
      </fieldset>
    );

  return <div className="mb-6 flex w-full flex-col gap-2">{children}</div>;
}
