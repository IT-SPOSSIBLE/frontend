interface InputFieldProps {
    label: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    type?: string;
    error?: string; // Optional error message
}

const InputField = ({
    label,
    name,
    value,
    onChange,
    placeholder,
    type = "text",
    error,
}: InputFieldProps) => (
    <div>
        <label htmlFor={name} className="block text-sm font-medium text-gray-700">
            {label}
        </label>
        <input
            type={type}
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={`mt-2 block w-full px-4 py-2 border rounded-md focus:ring-primary focus:border-primary ${
                error ? "border-red-500" : "border-gray-300"
            }`}
        />
        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
);

export default InputField;