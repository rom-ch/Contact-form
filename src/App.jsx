import { useEffect, useState } from "react";
import { Form } from "./components/Form";
import { SuccessMessage } from "./components/SuccessMessage";

function App() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    if (formSubmitted) {
      window.scrollTo(0, 0);
      const timer = setTimeout(() => {
        setFormSubmitted(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [formSubmitted]);

  return (
    <div className="flex min-h-screen items-center justify-center">
      {formSubmitted && <SuccessMessage />}
      <Form setFormSubmitted={setFormSubmitted} />
    </div>
  );
}

export default App;
