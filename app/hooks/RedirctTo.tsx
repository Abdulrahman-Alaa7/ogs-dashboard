// "use client";
// import React from "react";
// import { redirect } from "next/navigation";
// import { useSelector } from "react-redux";

// interface ProtectedProps {
//   children: React.ReactNode;
// }

// export default function RedirctTo({ children }: ProtectedProps) {
//   const { user } = useSelector((state: any) => state.auth);

//   if (user) {
//     return redirect("/dashboard");
//   } else {
//     return children;
//   }
// }
