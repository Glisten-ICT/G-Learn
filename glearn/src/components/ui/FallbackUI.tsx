import React from "react";

// Fallback Card Component
export const Card = ({
  children,
  className = "",
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { children: React.ReactNode }) => (
  <div
    className={`bg-white shadow-md rounded-lg p-4 sm:p-6 md:p-8 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl ${className}`}
    {...props}
  >
    {children}
  </div>
);


// Fallback CardContent Component
export const CardContent = ({
  children,
  className = "",
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { children: React.ReactNode }) => (
  <div className={`p-4 sm:p-6 md:p-8 ${className}`} {...props}>
    {children}
  </div>
);


// Fallback Button Component
export const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" |  "key" | "btn" |"ghost";
}) => {
  const baseStyles = "px-4 py-2 rounded-lg transition";
  const variants = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-700",
    secondary: "bg-gray-200 text-gray-700 hover:bg-gray-300",
    key: "bg-transparent text-gray-600 hover:text-red-600 hover:bg-gray-100",
    btn: "w-full border bg-slate-500 border-gray-300 text-gray-100 hover:bg-gray-50 py-2 rounded-md",
    ghost: "border border-indigo-600 bg-transparent text-indigo-600 hover:bg-indigo-100",
  };

  return (
    <button {...props} className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};


// Fallback Input Component
export const Input = ({
  label,
  error,
  className = "",
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
}) => (
  <div className={`flex flex-col gap-2 w-full max-w-md ${className}`}>
    {label && <label className="text-sm font-medium text-gray-700">{label}</label>}
    <input
      {...props}
      className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
        error ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-indigo-500"
      }`}
    />
    {error && <span className="text-sm text-red-500">{error}</span>}
  </div>
);

