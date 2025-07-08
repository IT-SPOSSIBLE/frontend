/* eslint-disable @typescript-eslint/no-unused-vars */
import { FaUser, FaPhone, FaEnvelope, FaLock } from "react-icons/fa";
import React, { useState } from "react";
import {
  UserRegistrationData,
  UserRole,
} from "../../types/UserRegistrationData";
import { register } from "../../api/services/Auth";
import InputField from "../../components/form/InputField";
import SelectField from "../../components/form/SelectField";
import { userRegistrationSchema } from "../../types/validationSchema";
import AppPromiseLoader from "../../AppPromiseLoader";
const Register = () => {
  const [formErrors, setFormErrors] = useState<{ [key: string]: string[] }>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const [formData, setFormData] = useState<
    UserRegistrationData & { confirmPassword: string }
  >({
    first_name: "",
    middle_name: "",
    last_name: "",
    phone_number: "",
    email: "",
    password: "",
    confirmPassword: "", // Added
    role: "",
  });

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setIsSubmitted(false);

    // Validate using Zod
    const result = userRegistrationSchema.safeParse(formData);
    console.log(result);
    if (!result.success) {
      const errors = result.error.flatten().fieldErrors;
      setFormErrors(errors);
      console.log("Validation Errors:", errors);
      setIsLoading(false);  // <-- FIX HERE
      return;
    }
    



    try {
      const { confirmPassword, ...validData } = result.data;
      await register(validData);
      setIsSubmitted(true);
      alert("Usajili umefanikiwa!");
      setFormData({
        first_name: "",
        middle_name: "",
        last_name: "",
        phone_number: "",
        email: "",
        password: "",
        confirmPassword: "",
        role: "",
      });

      setTimeout(() => {
        setIsSubmitted(false);
      });
    } catch (error) {
      alert("Kuna tatizo kwenye usajili. Tafadhali jaribu tena.");
    } finally {
      setIsLoading(false);
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const inputFields = [
    {
      label: "Jina la Kwanza",
      name: "first_name",
      placeholder: "Ingiza jina la kwanza",
      icon: <FaUser className="text-primary" />,
    },
    {
      label: "Jina la Kati",
      name: "middle_name",
      placeholder: "Ingiza jina la kati",
      icon: <FaUser className="text-primary" />,
    },
    {
      label: "Jina la Mwisho",
      name: "last_name",
      placeholder: "Ingiza jina la mwisho",
      icon: <FaUser className="text-primary" />,
    },
    {
      label: "Namba ya Simu",
      name: "phone_number",
      placeholder: "Ingiza namba ya simu",
      icon: <FaPhone className="text-primary" />,
    },
    {
      label: "Barua Pepe",
      name: "email",
      type: "email",
      placeholder: "Ingiza barua pepe yako",
      icon: <FaEnvelope className="text-primary" />,
    },
    {
      label: "Neno la Siri",
      name: "password",
      type: "password",
      placeholder: "Ingiza neno la siri",
      icon: <FaLock className="text-primary" />,
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gray-100 flex flex-col justify-center items-center py-10">
      <h1 className="text-3xl font-semibold text-center text-primary mb-6">
        Usajili
      </h1>

      <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-6 space-y-6 relative ">
        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
          onSubmit={handleRegister}
        >
          {inputFields.map(
            ({ label, name, placeholder, type = "text", icon }) => (
              <InputField
                key={name}
                label={label}
                type={type}
                name={name}
                value={formData[name as keyof UserRegistrationData] || ""}
                onChange={handleChange}
                placeholder={placeholder}
                error={formErrors[name]?.[0]}
                icon={icon}
              />
            )
          )}

          <div className="md:col-span-2">
            <InputField
              label="Rudia Neno la Siri"
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Rudia neno lako la siri"
              error={formErrors.confirmPassword?.[0]}
              icon={<FaLock className="text-primary" />}
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
                { label: "Chagua aina ya mtumiaji", value: "" },
                { label: "Mnunuzi", value: "buyer" },
                { label: "Muuzaji", value: "seller" },
              ]}
              error={formErrors.role?.[0]}
            />
          </div>

          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full py-2 px-4 bg-primary text-white rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 text-2xl"
            >
              Jisajili
            </button>
          </div>
        </form>

        <div className="text-center">
          <p className="text-2xl text-gray-600">
            Tayari una akaunti?{" "}
            <a href="/login" className="text-primary hover:underline">
              Ingia hapa
            </a>
          </p>
        </div>
        {(isLoading || isSubmitted) && (
          <div className="absolute inset-0 z-50 bg-white/70 backdrop-blur-sm flex items-center justify-center rounded-md text-2xl">
            <div className="flex flex-col items-center gap-4 text-center">
              {isLoading ? (
                <>
                  {/* <svg
                    className="animate-spin h-8 w-8 text-blue-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8z"
                    />
                  </svg>
                  <p className="text-blue-600 font-medium">
                    Tafadhali subiri...
                  </p> */}
                  <AppPromiseLoader/>
                </>
              ) : (
                <>
                  <svg
                    className="h-10 w-10 text-green-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <p className="text-green-700 font-semibold text-lg">
                    Umefanikiwa kusajiliwa!
                    <br />
                    Tafadhali angalia email yako ili kudhibitisha akaunti.
                  </p>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Register;
