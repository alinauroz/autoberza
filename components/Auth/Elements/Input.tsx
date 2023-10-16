import React from 'react';

interface IAuthInputProps {
  placeholder?: string;
  required?: boolean;
  name: string;
  type?: string;
}

function AuthInput({ placeholder, type }: IAuthInputProps) {
  return (
    <input
      placeholder={placeholder}
      className="p-4 w-full border border-slate-500 rounded-md"
      type={type}
    />
  );
}

export default AuthInput;
