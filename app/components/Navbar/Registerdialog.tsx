import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useRef, useState } from "react";
import { LockClosedIcon } from "@heroicons/react/20/solid";
import emailjs from "@emailjs/browser";

const Register = () => {
  let [isOpen, setIsOpen] = useState(false);
  const form = useRef<HTMLFormElement | null>(null);
  // const [form, setForm] = useState({
  //   name: "",
  //   email: "",
  //   inquiry: "",
  //   message: "",
  //   company: "",
  // });

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form.current);
    // setLoading(true);

    emailjs
      .sendForm(
        "service_kq7wsw8",
        "template_tgngdd1",
        form.current as HTMLFormElement,
        "qWSXDKYAXeZZMw3nj"
      )
      .then(
        (result) => {
          closeModal();
        },
        (error) => {
          console.log("FAILED...", error);
        }
      )
      .finally(() => {});
  };

  return (
    <>
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto  sm:pr-0">
        <div className="hidden lg:block">
          {/* <button
              className="text-blue text-lg font-medium ml-9 py-5 px-16 transition duration-150 ease-in-out leafbutton bg-lightblue hover:text-white hover:bg-blue"
              onClick={openModal}
            >
              Sign up
            </button> */}
          <button
            className="text-blue text-lg font-medium ml-9 py-5 px-16 transition duration-150 ease-in-out leafbutton bg-lightblue hover:text-white hover:bg-blue"
            onClick={openModal}
          >
            Contact Us
          </button>
        </div>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="flex min-h-full items-center justify-center px-4 sm:px-6 lg:px-8">
                    <div className="w-full max-w-md space-y-8">
                      <div>
                        <img
                          className="mx-auto h-20 w-auto"
                          src="./assets/logo/logo.png"
                          alt="Your Company"
                        />
                        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                          Contact Us
                        </h2>
                      </div>
                      <form
                        className="mt-8 space-y-6"
                        ref={form}
                        onSubmit={sendEmail}
                      >
                        <input
                          type="hidden"
                          name="remember"
                          defaultValue="true"
                        />
                        <div className="-space-y-px rounded-md flex flex-col gap-y-3">
                          <div>
                            <label htmlFor="name" className="sr-only">
                              Name
                            </label>
                            <input
                              id="name"
                              name="name"
                              type="text"
                              required
                              className="relative block w-full appearance-none rounded-md border border-grey500 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                              placeholder="Name"
                            />
                          </div>
                          <div>
                            <label htmlFor="email" className="sr-only">
                              Email
                            </label>
                            <input
                              id="email"
                              name="email"
                              type="email"
                              required
                              className="relative block w-full appearance-none rounded-md border border-grey500 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                              placeholder="Email Id"
                            />
                          </div>
                          <div>
                            <label htmlFor="company" className="sr-only">
                              Company Name
                            </label>
                            <input
                              id="company"
                              name="company"
                              type="text"
                              required
                              className="relative block w-full appearance-none rounded-md border border-grey500 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                              placeholder="Company Name"
                            />
                          </div>

                          <div>
                            <label htmlFor="message" className="sr-only">
                              Message
                            </label>

                            <select
                              name="cars"
                              id="cars"
                              form="carform"
                              className="relative block w-full appearance-none rounded-md border border-grey500 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                            >
                              <option value="" disabled selected hidden>
                                Inquiry Type
                              </option>
                              <option value="general">General</option>
                              <option value="request-demo">Request Demo</option>
                              <option value="partnership">Partnership</option>
                            </select>

                            {/* <textarea
                              id="message"
                              name="message"
                              rows={3}
                              required
                              placeholder="Message"
                            /> */}
                          </div>

                          <div>
                            <label htmlFor="message" className="sr-only">
                              Message
                            </label>
                            <textarea
                              id="message"
                              name="message"
                              rows={3}
                              required
                              className="relative block w-full appearance-none rounded-md border border-grey500 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                              placeholder="Message"
                            />
                          </div>
                        </div>

                        {/* <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <input
                              id="remember-me"
                              name="remember-me"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              htmlFor="remember-me"
                              className="ml-2 block text-sm text-gray-900"
                            >
                              Remember me
                            </label>
                          </div>
                        </div> */}

                        <div>
                          <button
                            type="submit"
                            className="group relative flex w-full justify-center rounded-md border border-transparent bg-blue py-2 px-4 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                          >
                            {/* <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                              <LockClosedIcon
                                className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                                aria-hidden="true"
                              />
                            </span> */}
                            Submit
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>

                  {/* <div className="mt-4 flex justify-end">
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 "
                        onClick={closeModal}
                      >
                        Got it, thanks!
                      </button>
                    </div> */}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Register;
