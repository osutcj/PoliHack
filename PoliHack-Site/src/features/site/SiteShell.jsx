"use client";

import { useEffect, useState } from "react";
import Loading from "@/components/Loading";
import Navbar from "@/components/Navbar";

export default function SiteShell({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 700);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Loading isLoading={isLoading} />
      {!isLoading && <Navbar />}
      {children}
    </>
  );
}
