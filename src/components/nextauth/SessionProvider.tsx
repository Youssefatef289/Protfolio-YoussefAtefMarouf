"use client";
import { SessionProvider } from "next-auth/react";
import React from "react";

export default function SessionProviderComp({
  children,
  session,
}: {
  children: React.ReactNode;
  session?: unknown;
}) {
  return (
    <>
      <SessionProvider session={session as any}>{children}</SessionProvider>
    </>
  );
}
