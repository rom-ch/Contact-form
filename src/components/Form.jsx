import { useState } from "react";
import { validateForm } from "../validators";
import { ErrorMessage } from "./ErrorMessage";
import { FormGroup } from "./FormGroup";
import { InputRadio } from "./InputRadio";
import { InputText } from "./InputText";
import { Label } from "./Label";

const INITIAL_VALUES = {
  firstname: "",
  lastname: "",
  email: "",
  query: "",
  message: "",
  consent: false,
};

export function Form({ setFormSubmitted }) {
  const [isAfterFirstSubmit, setIsAfterFirstSubmit] = useState(false);
  const [errors, setErrors] = useState({});
  const [formValues, setFormValues] = useState(INITIAL_VALUES);

  function handleChangeValue(e) {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    setFormValues((prev) => {
      const updatedValues = { ...prev, [name]: newValue };

      if (isAfterFirstSubmit) {
        setErrors(validateForm(updatedValues));
      }

      return updatedValues;
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsAfterFirstSubmit(true);

    const validationErrors = validateForm(formValues);

    setErrors(validationErrors);

    const hasErrors = Object.values(validationErrors).some(
      (errorArray) => errorArray.length > 0,
    );

    if (!hasErrors) {
      setFormSubmitted(true);
      setFormValues(INITIAL_VALUES);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="m-4 w-full max-w-2xl rounded-2xl bg-white p-6 sm:p-10"
    >
      <h1 className="mb-8 text-2xl font-bold sm:text-3xl">Contact Us</h1>
      <div className="flex flex-col items-center justify-between sm:flex-row sm:gap-4">
        <FormGroup>
          <Label htmlFor="firstname">First Name</Label>
          <InputText
            id="firstname"
            name="firstname"
            value={formValues.firstname}
            onChange={handleChangeValue}
          />
          {errors.firstname?.length > 0 && (
            <ErrorMessage errors={errors.firstname} />
          )}
        </FormGroup>
        <FormGroup>
          <Label htmlFor="lastname">LastName</Label>
          <InputText
            id="lastname"
            name="lastname"
            value={formValues.lastname}
            onChange={handleChangeValue}
          />
          {errors.lastname?.length > 0 && (
            <ErrorMessage errors={errors.lastname} />
          )}
        </FormGroup>
      </div>
      <FormGroup>
        <Label htmlFor="email">Email Address</Label>
        <InputText
          type="email"
          id="email"
          name="email"
          value={formValues.email}
          onChange={handleChangeValue}
        />
        {errors.email?.length > 0 && <ErrorMessage errors={errors.email} />}
      </FormGroup>
      <FormGroup type="fieldset">
        <legend className="mb-2 font-medium">
          Query Type <span className="text-primary-600 ml-1">*</span>
        </legend>
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <InputRadio
            name="query"
            id="enquiry"
            value="General Enquiry"
            checked={formValues.query}
            onChange={handleChangeValue}
          />
          <InputRadio
            name="query"
            id="request"
            value="Support Request"
            checked={formValues.query}
            onChange={handleChangeValue}
          />
        </div>
        {errors.query?.length > 0 && <ErrorMessage errors={errors.query} />}
      </FormGroup>
      <FormGroup>
        <Label htmlFor="message">Message</Label>
        <textarea
          name="message"
          id="message"
          value={formValues.message}
          onChange={handleChangeValue}
          className="ring-primary-500 focus:ring-primary-600 flex h-56 resize-none items-center gap-3 rounded-lg px-6 py-2.5 text-lg ring focus:outline-none sm:h-28"
        ></textarea>
        {errors.message?.length > 0 && <ErrorMessage errors={errors.message} />}
      </FormGroup>
      <FormGroup>
        <div className="my-3 flex items-center gap-3">
          <label className="relative flex cursor-pointer items-center">
            <input
              type="checkbox"
              name="consent"
              id="consent"
              checked={formValues.consent}
              onChange={handleChangeValue}
              className="peer border-primary-500 focus:border-primary-600 checked:bg-primary-600 focus:ring-primary-600 size-4 cursor-pointer appearance-none rounded-sm border focus:ring focus:ring-offset-2 focus:outline-none"
            />
            <span className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5"
                viewBox="0 0 20 20"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="1"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
          </label>
          <Label htmlFor="consent">
            I consent to being contacted by the team
          </Label>
        </div>
        {errors.consent?.length > 0 && <ErrorMessage errors={errors.consent} />}
      </FormGroup>
      <button
        type="submit"
        className="bg-primary-600 text-primary-200 active:bg-button-focus focus:ring-primary-600 w-full cursor-pointer rounded-lg py-3.5 text-lg font-semibold focus:ring focus:ring-offset-2 focus:outline-none sm:text-xl"
      >
        Submit
      </button>
    </form>
  );
}
