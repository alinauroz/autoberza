import React from 'react';

interface Props {
  isVisible: boolean;
  onClose: () => void;
  icon?: string;
}

const MenuModalComp = ({ isVisible, onClose, icon }: Props) => {
  if (!isVisible) return null;
  return (
    <div>
      <div className="absolute top-2 right-4 z-10" onClick={() => onClose()}>
        <div className="flex flex-col w-[600px]">
          <button
            className="text-2xl px-2 rounded-sm font-bold bg-gray-300 text-white place-self-end"
            onClick={() => onClose()}
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuModalComp;
