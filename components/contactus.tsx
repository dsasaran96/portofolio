import React, { useState, useCallback } from "react";
import Image from "next/image";
import axios from "axios";

interface Props {
  submitted: boolean;
  submitting: boolean;
  info: {
    error: boolean;
    msg: string | null;
  };
}

const ContactUs: React.FC = () => {
  const [status, setStatus] = useState<Props>({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });
  const [inputs, setInputs] = useState({
    yourName: "",
    email: "",
    msg: "",
  });

  const handleOnChange = useCallback((e: any) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  }, []);

  const handleServerResponse = useCallback((ok: boolean, msg: string) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        yourName: "",
        email: "",
        msg: "",
      });
    } else {
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg: msg },
      });
    }
  }, []);

  const handleSubmit = useCallback(
    (e: any) => {
      e.preventDefault();
      setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
      axios({
        method: "POST",
        url: process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT_URL,
        data: inputs,
      }).then((_response) => {
        handleServerResponse(
          true,
          "Thank you, your message has been submitted"
        );
      });
    },
    [inputs, handleServerResponse]
  );

  return (
    <div className="bg-black text-white flex flex-col justify-center pt-10 min-h-screen items-center">
      <div className="flex-1 flex flex-col justify-center items-center pt-10 lg:pt-6">
        <div className="pb-10">
          <Image src="/assets/logo.svg" width={30} height={30} alt="logo" />
        </div>
        <h2 className="text-4xl font-bold">Contact Me</h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 mt-16 px-10 lg:mt-20 min-w-full lg:min-w-[500px]"
        >
          {status.info.error && (
            <div
              className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
              role="alert"
            >
              <strong className="font-bold">Error</strong>:{" "}
              <span className="block sm:inline">{status.info.msg}</span>
            </div>
          )}
          {status.submitted ? (
            <div
              className="text-white text-xl font-bold px-4 py-3 rounded relative"
              role="alert"
            >
              Your message has been succesfully sent. I will contact you very
              soon!
            </div>
          ) : (
            <>
              <input
                id="yourName"
                name="yourName"
                required
                maxLength={128}
                type="text"
                placeholder="Your name"
                className="bg-black text-white outline-none border-2 border-white rounded-3xl px-8 py-2"
                onChange={handleOnChange}
                value={inputs.yourName}
              />
              <input
                id="email"
                name="email"
                type="email"
                required
                maxLength={128}
                placeholder="Your E-mail"
                className="bg-black text-white outline-none border-2 border-white rounded-3xl px-8 py-2"
                onChange={handleOnChange}
                value={inputs.email}
              />
              <textarea
                id="msg"
                name="msg"
                required
                maxLength={1048576}
                placeholder="Additional information"
                className="bg-black text-white outline-none border-2 border-white rounded-3xl px-8 py-6 min-h-[16em]"
                onChange={handleOnChange}
                value={inputs.msg}
              ></textarea>
              <div className="text-center mt-10">
                <button
                  type="submit"
                  className="bg-white text-black rounded-3xl px-8 py-2"
                >
                  {!status.submitting
                    ? !status.submitted
                      ? "Submit"
                      : "Submitted"
                    : "Submitting.."}
                </button>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
