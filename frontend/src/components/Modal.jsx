import React from "react";

const Modal = ({ children, isOpen, onClose, title, hideHeader }) => {
    if(!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center w-full h-full bg-black/40">
      <div
        className={`relative flex flex-col bg-white shadow-lg rounded-lg overflow-hidden `}
      >
        {!hideHeader && title && (
          <div className="flex items-center justify-between p-4 border-b border-b-gray-200">
            <h3 className="md:text-lg font-medium text-gray-900">{title}</h3>
          </div>
        )}
        <button
          type="button"
          className="text-gray-400 bg-transparent hover:bg-orange-100 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex items-center justify-center absolute top-3.5 right-3.5 cursor-pointer"
          onClick={onClose}
        >
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="flex-1 overflow-y-auto custom-scrollbar">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
