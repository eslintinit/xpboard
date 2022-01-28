import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState, useContext } from 'react'
import { AppContext } from '../context'

export default function FAQ() {
  const { faqOpened, setFaqOpened } = useContext(AppContext)

  function closeModal() {
    setFaqOpened(false)
  }

  function openModal() {
    setFaqOpened(true)
  }

  return (
    <Transition appear show={faqOpened} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={closeModal}
      >
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-200 bg-gray-900"
            enterFrom="opacity-0"
            enterTo="opacity-60"
            entered="bg-gray-900 opacity-60"
            leave="ease-in duration-200 bg-gray-900"
            leaveFrom="opacity-60"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 " />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
              <Dialog.Title
                as="h2"
                className="text-lg font-medium leading-6 text-gray-900"
              >
                FAQ
              </Dialog.Title>
              <div className="mt-4">
                <h3 className="mb-2 font-medium">What is this?</h3>
                <p className="text-sm text-gray-500">
                  Think of it as farming in Dota.
                </p>
              </div>
              <div className="mt-4">
                <h3 className="mb-2 font-medium">How do I delete the task?</h3>
                <p className="text-sm text-gray-500">
                  Double click the task, then click trash icon.
                </p>
              </div>
              <div className="mt-4">
                <h3 className="mb-2 font-medium">How do I define points?</h3>
                <p className="text-sm text-gray-500">
                  That's totally up to you. You can define some basic tasks like
                  having a breakfast or taking a walk and count them as 20
                  points. Then define everything else relative to that. <br />
                  Don't expect to estimate everything flawlessly from the start,
                  it will come with experience. Overall I think it's a fine
                  skill to know the value of your actions
                </p>
              </div>
              <div className="mt-4">
                <h3 className="mb-2 font-medium">How can I help?</h3>
                <p className="text-sm text-gray-500">
                  The project is in{' '}
                  <a
                    href="https://github.com/maximignatev/xpboard"
                    target="_blank"
                    className="text-violet-600 cursor-pointer hover:text-violet-800"
                  >
                    opensource
                  </a>
                  . If you know how to code you can pick any issue and implement
                  it.
                  <br />
                  <br />
                  If you'd like to support the project maintainer you can donate
                  me{' '}
                  <a
                    href="https://paypal.me/ignatif"
                    target="_blank"
                    className="text-violet-600 cursor-pointer hover:text-violet-800"
                  >
                    here
                  </a>
                  .
                  <br />
                  <br />
                  You can contact me at{' '}
                  <a
                    href="mailto:ignatif@gmail.com"
                    className="text-violet-600 cursor-pointer hover:text-violet-800"
                  >
                    ignatif@gmail.com
                  </a>
                </p>
              </div>

              <div className="mt-6">
                <button
                  type="button"
                  className="inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-transparent rounded-md hover:text-violet-700 hover:bg-violet-50"
                  onClick={closeModal}
                >
                  Got it, thanks!
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )
}
