"use client";

import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
export default function ModalSuccess({ open, setOpen, message, title }) {
  return (
    <Dialog open={open} onClose={setOpen} className="relative z-50">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-700/85 transition-opacity duration-500 data-closed:opacity-0 data-enter:duration-800 data-enter:ease-in data-leave:duration-500 data-leave:ease-in-out"
      />
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
          >
            <div className=" px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button type="button" onClick={() => setOpen(false)}>
                <img className="w-12 h-12" src="/x-circle.svg" alt="" />
              </button>
            </div>
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex justify-center sm:items-start">
                <div className="mb-7s text-center sm:mt-0 sm:ml-4 sm:text-center">
                  <DialogTitle
                    as="h1"
                    className="text-4xl font-semibold text-gray-900"
                  >
                    {title}
                  </DialogTitle>
                  <div className="mb-2">
                    <p className="text-2xl pt-5 font-semibold text-gray-600">
                      {message}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className=" px-4 h-15 py-3 sm:flex sm:flex-row-reverse sm:px-6"></div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
