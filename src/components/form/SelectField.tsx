interface SelectFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: { label: string; value: string }[];
  error?: string; // Optional error message for validation
}

const SelectField = ({
  label,
  name,
  value,
  onChange,
  options,
  error,
}: SelectFieldProps) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium text-gray-700">
      {label}
    </label>
    <select
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      className={`mt-2 block w-full px-4 py-2 border rounded-md focus:ring-primary focus:border-primary ${
        error ? "border-red-500" : "border-gray-300"
      }`}
    >
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
    {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
  </div>
);

export default SelectField;
