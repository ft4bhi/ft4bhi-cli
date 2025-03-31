// Popup.tsx
import React from "react";

interface PopupProps {
  isOpen: boolean;
  title: string;
  message: string;
  onClose: () => void;
  onConfirm?: () => void;
  confirmText?: string;
  cancelText?: string;
}

const Popup: React.FC<PopupProps> = ({
  isOpen,
  title,
  message,
  onClose,
  onConfirm,
  confirmText = "Confirm",
  cancelText = "Cancel",
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-96">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mt-2">{message}</p>
        <div className="mt-4 flex justify-end space-x-3">
          <button
            className="px-4 py-2 bg-gray-300 dark:bg-gray-700 rounded-md text-gray-800 dark:text-white"
            onClick={onClose}
          >
            {cancelText}
          </button>
          {onConfirm && (
            <button
              className="px-4 py-2 bg-violet-600 text-white rounded-md hover:bg-violet-700"
              onClick={onConfirm}
            >
              {confirmText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Popup;
