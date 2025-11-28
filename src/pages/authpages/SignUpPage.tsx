import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/commonUiComponents/Header";
import Footer from "@/components/commonUiComponents/Footer";

function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

type SignUpErrors = {
  name?: string;
  email?: string;
  password?: string;
  confirm?: string;
};

const SignUpPage: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [show, setShow] = useState(false);
  const [errors, setErrors] = useState<SignUpErrors>({});

  function passwordStrength(pw: string) {
    if (pw.length >= 12) return "Strong";
    if (pw.length >= 8) return "Good";
    if (pw.length > 0) return "Weak";
    return "";
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs: SignUpErrors = {};

    if (!name.trim()) errs.name = "Enter your full name.";
    if (!validateEmail(email)) errs.email = "Enter a valid email.";
    if (password.length < 8)
      errs.password = "Password must be at least 8 characters.";
    if (password !== confirm) errs.confirm = "Passwords do not match.";

    setErrors(errs);

    if (Object.keys(errs).length === 0) {
      console.log("SignUp mock", { name, email });
      alert("Signed up (mock)");
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white via-slate-50 to-white">
      <Header />

      <main className="flex-1 flex items-center justify-center px-6 py-10">
        <div className="w-full max-w-sm">
          <div className="rounded-2xl p-6 bg-white/90 border border-white/20 shadow-lg backdrop-blur-sm">
            <h2 className="text-2xl font-semibold text-slate-900">
              Create account
            </h2>
            <p className="text-sm text-slate-600 mt-1">Join NoteNest</p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
              {/* Full Name */}
              <div>
                <label className="text-xs font-medium text-slate-700">
                  Full name
                </label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className={`mt-1 w-full px-3 py-2 rounded-md border ${
                    errors.name ? "border-rose-400" : "border-slate-200"
                  } focus:outline-none focus:ring-2 focus:ring-slate-200`}
                />
                {errors.name && (
                  <p className="text-xs text-rose-500 mt-1">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="text-xs font-medium text-slate-700">
                  Email
                </label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@email.com"
                  type="email"
                  className={`mt-1 w-full px-3 py-2 rounded-md border ${
                    errors.email ? "border-rose-400" : "border-slate-200"
                  } focus:outline-none focus:ring-2 focus:ring-slate-200`}
                />
                {errors.email && (
                  <p className="text-xs text-rose-500 mt-1">{errors.email}</p>
                )}
              </div>

              {/* Password */}
              <div>
                <label className="text-xs font-medium text-slate-700">
                  Password
                </label>
                <div className="mt-1 relative">
                  <input
                    type={show ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="At least 8 characters"
                    className={`w-full px-3 py-2 rounded-md border ${
                      errors.password ? "border-rose-400" : "border-slate-200"
                    } focus:outline-none focus:ring-2 focus:ring-slate-200`}
                  />
                  <button
                    type="button"
                    onClick={() => setShow((s) => !s)}
                    className="absolute right-2 top-2 p-1"
                    aria-label="Toggle password"
                  >
                    {show ? (
                      <EyeOff className="w-4 h-4 text-slate-500" />
                    ) : (
                      <Eye className="w-4 h-4 text-slate-500" />
                    )}
                  </button>
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  Strength:{" "}
                  <span className="font-medium">
                    {passwordStrength(password)}
                  </span>
                </p>
                {errors.password && (
                  <p className="text-xs text-rose-500 mt-1">
                    {errors.password}
                  </p>
                )}
              </div>

              {/* Confirm Password */}
              <div>
                <label className="text-xs font-medium text-slate-700">
                  Confirm password
                </label>
                <input
                  type={show ? "text" : "password"}
                  value={confirm}
                  onChange={(e) => setConfirm(e.target.value)}
                  placeholder="Retype password"
                  className={`mt-1 w-full px-3 py-2 rounded-md border ${
                    errors.confirm ? "border-rose-400" : "border-slate-200"
                  } focus:outline-none focus:ring-2 focus:ring-slate-200`}
                />
                {errors.confirm && (
                  <p className="text-xs text-rose-500 mt-1">{errors.confirm}</p>
                )}
              </div>

              {/* Create account */}
              <button
                type="submit"
                className="w-full bg-slate-900 text-white py-2 rounded-md font-medium"
              >
                Create account
              </button>

              {/* Google Button */}
              <div className="pt-2 text-center text-sm text-slate-600">
                or continue with
              </div>

              <button
                type="button"
                className="w-full flex items-center justify-center gap-2 border rounded-md py-2 text-sm mt-2"
              >
                <svg width="18" height="18" viewBox="0 0 48 48">
                  <path
                    fill="#EA4335"
                    d="M24 9.5c3.8 0 7.1 1.3 9.7 3.5l7.2-7.2C36.6 2.7 30.6 0 24 0 14.7 0 6.6 5.6 2.6 13.7l8.9 6.9C12.8 14.1 17.9 9.5 24 9.5z"
                  ></path>
                  <path
                    fill="#34A853"
                    d="M46.5 24.5c0-1.6-.1-3.1-.4-4.5H24v8.6h12.6c-.5 2.8-2 5.2-4.3 6.8l7 5.4c4.1-3.8 6.6-9.3 6.6-16.3z"
                  ></path>
                  <path
                    fill="#4A90E2"
                    d="M10.7 28.6A14.9 14.9 0 0111 24c0-1.3.2-2.5.5-3.6L2.6 13.7C1 16.8 0 20.3 0 24s1 7.2 2.6 10.3l8.1-5.7z"
                  ></path>
                  <path
                    fill="#FBBC05"
                    d="M24 48c6.5 0 12-2.1 16-5.7l-7-5.4c-2.2 1.5-5 2.4-9 2.4-6.1 0-11.2-4.6-12.6-10.6l-8.9 6.9C6.6 42.4 14.7 48 24 48z"
                  ></path>
                </svg>
                Continue with Google
              </button>

              {/* Link */}
              <div className="text-center text-sm text-slate-600 mt-2">
                Already have an account?{" "}
                <Link
                  to="/signin"
                  className="text-slate-900 font-medium hover:underline"
                >
                  Sign in
                </Link>
              </div>
            </form>
          </div>

          <p className="text-center text-xs text-slate-500 mt-4">
            © {new Date().getFullYear()} NoteNest
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SignUpPage;
