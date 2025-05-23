import {z} from "zod"
import React,{useState} from "react";
import {
  UserRegistrationData,
  UserRole,
} from "../../types/UserRegistrationData";
import InputField from "../../components/form/InputField";
import SelectField from "../../components/form/SelectField";
import {userRegistrationSchema} from '../../types/validationSchema'
const Register = () => {
  const [formData, setFormData] = useState<UserRegistrationData>(...);
 const handleRegister=(e:React.FormEvent)=>{
  e.preventDefault()
  const result=userRegistrationSchema.safeParse(formData)
  if (!result.success) {
    console.log("Validation Errors", result.error.flatten().fieldErrors);
    // Optionally: set errors to state to show to user
    return;
  }

  console.log("Valid data:", result.data);
 }

  const inputFields = [
    {
      label: "Jina la Kwanza",
      name: "first_name",
      placeholder: "Ingiza jina la kwanza",
    },
    {
      label: "Jina la Kati",
      name: "middle_name",
      placeholder: "Ingiza jina la kati",
    },
    {
      label: "Jina la Mwisho",
      name: "last_name",
      placeholder: "Ingiza jina la mwisho",
    },
    {
      label: "Namba ya Simu",
      name: "phone_number",
      placeholder: "Ingiza namba ya simu",
    },
    {
      label: "Barua Pepe",
      name: "email",
      type: "email",
      placeholder: "Ingiza barua pepe yako",
    },
    {
      label: "Neno la Siri",
      name: "password",
      type: "password",
      placeholder: "Ingiza neno la siri",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gray-100 flex flex-col justify-center items-center py-10">
      <h1 className="text-3xl font-semibold text-center text-primary mb-6">
        Usajili
      </h1>

      <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-6 space-y-6">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleRegister}>
          {inputFields.map(({ label, name, placeholder, type = "text" }) => (
            <InputField
              key={name}
              label={label}
              type={type}
              name={name}
              value={formData[name as keyof UserRegistrationData] || ""}
              onChange={handleChange}
              placeholder={placeholder}
            />
          ))}
          <div className="md:col-span-2">
            <InputField
              label="Rudia Neno la Siri"
              type="password"
              name="confirmPassword"
              value={""} // Optional: Implement confirm logic
              onChange={() => {}}
              placeholder="Rudia neno lako la siri"
            />
          </div>

          <div className="md:col-span-2">
            <SelectField
              label="Aina ya Mtumiaji"
              name="role"
              value={formData.role}
              onChange={(e) =>
                setFormData({ ...formData, role: e.target.value as UserRole })
              }
              options={[
                { label: "Mnunuzi", value: "buyer" },
                { label: "Muuzaji", value: "seller" },
              ]}
            />
          </div>

          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full py-2 px-4 bg-primary text-white rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
            >
              Jisajili
            </button>
          </div>
        </form>

        <div className="text-center">
          <p className="text-sm text-gray-600">
            Tayari una akaunti?{" "}
            <a href="/login" className="text-primary hover:underline">
              Ingia hapa
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
