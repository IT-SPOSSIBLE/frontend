import { ReactNode } from "react";

interface InputFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  error?: string;
  icon?: ReactNode; // ✅ Add icon support
}

const InputField = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  error,
  icon,
}: InputFieldProps) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium text-gray-700">
      {label}
    </label>
    <div className="relative mt-2">
      {icon && (
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
          {icon}
        </div>
      )}
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`block w-full px-4 py-2 pl-10 border rounded-md focus:ring-primary focus:border-primary ${
          error ? "border-red-500" : "border-gray-300"
        }`}
      />
    </div>
    {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
  </div>
);

export default InputField;
