"use client";

import DayView from "@/components/DayView";
import LoginPage from "@/components/LoginPage";
import Title from "@/components/Tittle";
import SignUpPage from "@/components/SignUpPage";
import { useEffect, useState } from "react";
import { DisplayName } from "@/types";

export default function Home() {
  const [displayName, setDisplayName] = useState<DisplayName>({
    displayName: null,
  });
  const [showSignUp, setShowSignUp] = useState<boolean>(false);

  useEffect(() => {}, [displayName]);

  return (
    <>
      {!displayName.displayName ? (
        !showSignUp ? (
          <LoginPage
            setDisplayName={setDisplayName}
            setShowSignUp={setShowSignUp}
          />
        ) : (
          <SignUpPage
            setDisplayName={setDisplayName}
            setShowSignUp={setShowSignUp}
          />
        )
      ) : (
        <>
          <Title />
          <DayView />
        </>
      )}
    </>
  );
}
