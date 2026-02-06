"use client";

import { useState, useEffect } from "react";

interface EmailButtonProps {
  email: string;
  label: string;
  className?: string;
}

export function EmailButton({ email, label, className = "" }: EmailButtonProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isMobile) {
      e.preventDefault();
      
      try {
        await navigator.clipboard.writeText(email);
        setCopied(true);
        
        setTimeout(() => {
          setCopied(false);
        }, 3000);
      } catch (err) {
        console.error("Failed to copy email:", err);
      }
    }
  };

  return (
    <a
      href={`mailto:${email}`}
      onClick={handleClick}
      className={className}
    >
      <span className="transition-opacity duration-200 inline-block md:min-w-[115px] text-center">
        {copied ? "Email copied!" : label}
      </span>
    </a>
  );
}
