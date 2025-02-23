export function SuccessMessage() {
  return (
    <div className="bg-primary-900 absolute top-8 mx-4 flex flex-col gap-4 rounded-xl p-8">
      <h3 className="flex items-center gap-4 text-white">
        <svg
          className="size-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 21"
        >
          <path
            fill="#fff"
            d="M14.28 7.72a.748.748 0 0 1 0 1.06l-5.25 5.25a.748.748 0 0 1-1.06 0l-2.25-2.25a.75.75 0 1 1 1.06-1.06l1.72 1.72 4.72-4.72a.75.75 0 0 1 1.06 0Zm5.47 2.78A9.75 9.75 0 1 1 10 .75a9.76 9.76 0 0 1 9.75 9.75Zm-1.5 0A8.25 8.25 0 1 0 10 18.75a8.26 8.26 0 0 0 8.25-8.25Z"
          />
        </svg>
        <span className="text-xl font-bold">Message Sent</span>
      </h3>
      <p className="text-primary-200 sm:text-lg">
        Thanks for completing the form. We&apos;ll be in touch soon!
      </p>
    </div>
  );
}
