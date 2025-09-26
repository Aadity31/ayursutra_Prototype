// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { getTheme } from "../../constants/themeSelect";
// import Header from "../../components/doctor/header";

// const LoginPage = () => {
//   const [mounted, setMounted] = useState(false);
//   const [colors, setColors] = useState(getTheme());

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   useEffect(() => {
//     setMounted(true);

//     const interval = setInterval(() => {
//       const currentTheme = getTheme();
//       setColors((prev) => {
//         if (prev !== currentTheme) return currentTheme;
//         return prev;
//       });
//     }, 100);

//     return () => clearInterval(interval);
//   }, []);

//   if (!mounted) return null;

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log({ email, password });
//   };

//   if (!mounted) return null; 

//   return (
//     <div className="min-h-screen flex flex-col">
//       <Header />

//       <div className="flex flex-1">
//         <div
//           className="flex-1 flex flex-col justify-center items-center px-8"
//           style={{ backgroundColor: colors.bg }}
//         >
//           <div className="w-full max-w-md">
//             <h1 className="text-3xl font-bold mb-2" style={{ color: colors.primary }}>
//               Welcome Back
//             </h1>
//             <p className="mb-6 text-sm" style={{ color: colors.textMuted }}>
//               Enter your email and password to sign in
//             </p>

//             <form onSubmit={handleSubmit} className="space-y-4">
//               <input
//                 type="email"
//                 placeholder="Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//                 className="w-full px-4 py-2 rounded-lg focus:outline-none"
//                 style={{
//                   backgroundColor: colors.bgLight,
//                   border: `1px solid ${colors.border}`,
//                   color: colors.text,
//                 }}
//               />
//               <input
//                 type="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//                 className="w-full px-4 py-2 rounded-lg focus:outline-none"
//                 style={{
//                   backgroundColor: colors.bgLight,
//                   border: `1px solid ${colors.border}`,
//                   color: colors.text,
//                 }}
//               />

//               <div className="flex items-center">
//                 <input
//                   type="checkbox"
//                   id="remember"
//                   className="mr-2"
//                   style={{ accentColor: colors.primary }}
//                 />
//                 <label htmlFor="remember" style={{ color: colors.textMuted }}>
//                   Remember me
//                 </label>
//               </div>

//               <button
//                 type="submit"
//                 className="w-full py-2 rounded-lg font-medium cursor-pointer hover:shadow-lg transition-all"
//                 style={{
//                   backgroundColor: colors.primary,
//                   color: colors.highlight,
//                 }}
//               >
//                 Sign In
//               </button>
//             </form>

//             <p className="mt-4 text-center text-sm" style={{ color: colors.textMuted }}>
//               Don't have an account?{" "}
//               <Link href="/hospital/signUp">
//                 <span style={{ color: colors.secondary, cursor: "pointer" }} className="hover:underline">
//                   Sign up
//                 </span>
//               </Link>
//             </p>
//           </div>
//         </div>

//         <div
//           className="flex-1 hidden md:block"
//           style={{
//             backgroundColor: colors.bgDark,
//             backgroundImage:
//               "linear-gradient(135deg, rgba(255,255,255,0.1) 25%, transparent 25%), linear-gradient(225deg, rgba(255,255,255,0.1) 25%, transparent 25%)",
//             backgroundSize: "50px 50px",
//             backgroundPosition: "0 0, 25px 25px",
//           }}
//         />
//       </div>
//     </div>
//   );
// };

// export default LoginPage;
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { getTheme } from "../../constants/themeSelect";
import Header from "../../components/doctor/header";
import { useRouter } from "next/navigation";


const LoginPage: React.FC = () => {
  const router = useRouter(); // for redirect
  const [mounted, setMounted] = useState(false);
  const [colors, setColors] = useState(getTheme());

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setMounted(true);

    const interval = setInterval(() => {
      const currentTheme = getTheme();
      setColors((prev) => (prev !== currentTheme ? currentTheme : prev));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // You can add API authentication here
    console.log({ email, password });

    // Redirect to dashboard after login
    router.push("/doctor/dashboard");
 // or /doctor/dashboard
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="flex flex-1">
        <div
          className="flex-1 flex flex-col justify-center items-center px-8"
          style={{ backgroundColor: colors.bg }}
        >
          <div className="w-full max-w-md">
            <h1
              className="text-3xl font-bold mb-2"
              style={{ color: colors.primary }}
            >
              Welcome Back
            </h1>
            <p className="mb-6 text-sm" style={{ color: colors.textMuted }}>
              Enter your email and password to sign in
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 rounded-lg focus:outline-none"
                style={{
                  backgroundColor: colors.bgLight,
                  border: `1px solid ${colors.border}`,
                  color: colors.text,
                }}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-2 rounded-lg focus:outline-none"
                style={{
                  backgroundColor: colors.bgLight,
                  border: `1px solid ${colors.border}`,
                  color: colors.text,
                }}
              />

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  className="mr-2"
                  style={{ accentColor: colors.primary }}
                />
                <label htmlFor="remember" style={{ color: colors.textMuted }}>
                  Remember me
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-2 rounded-lg font-medium cursor-pointer hover:shadow-lg transition-all"
                style={{
                  backgroundColor: colors.primary,
                  color: colors.highlight,
                }}
              >
                Sign In
              </button>
            </form>

            <p className="mt-4 text-center text-sm" style={{ color: colors.textMuted }}>
              Don't have an account?{" "}
              <Link href="/hospital/signUp">
                <span
                  style={{ color: colors.secondary, cursor: "pointer" }}
                  className="hover:underline"
                >
                  Sign up
                </span>
              </Link>
            </p>
          </div>
        </div>

        <div
          className="flex-1 hidden md:block"
          style={{
            backgroundColor: colors.bgDark,
            backgroundImage:
              "linear-gradient(135deg, rgba(255,255,255,0.1) 25%, transparent 25%), linear-gradient(225deg, rgba(255,255,255,0.1) 25%, transparent 25%)",
            backgroundSize: "50px 50px",
            backgroundPosition: "0 0, 25px 25px",
          }}
        />
      </div>
    </div>
  );
};

export default LoginPage;
