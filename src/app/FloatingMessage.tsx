import React from "react";

export default function FloatingMessage({
  title,
  message = "",
  actionText,
  deleteClick,
  actionClick,
}: {
  title: string;
  message?: string;
  actionText: string;
  deleteClick: () => void;
  actionClick: () => void;
}) {
  return (
    <div className="fixed bottom-4 right-4 w-80 bg-blue-500 text-white rounded-lg shadow-lg p-4">
      <div className="flex justify-between items-center border-b border-white pb-2">
        <p className="font-semibold">{title}</p>
        <button
          className="text-white hover:text-gray-200"
          aria-label="delete"
          onClick={deleteClick}
        >
          ✖
        </button>
      </div>
      <div className="mt-2">
        <p className="text-sm">{message}</p>
      </div>
      <div className="mt-4 flex justify-end">
        <button
          className="bg-white text-blue-500 px-4 py-2 rounded-md hover:bg-gray-100"
          onClick={actionClick}
        >
          {actionText}
        </button>
      </div>
    </div>
  );
}
