"use client";

import DayView from "@/components/DayView";
import LoginPage from "@/components/LoginPage";
import Title from "@/components/Tittle";
import { useEffect, useState } from "react";
import { DisplayName } from "@/types";

export default function Home() {
  const [displayName, setDisplayName] = useState<DisplayName>({
    displayName: null,
  });

  useEffect(() => {}, [displayName]);

  return (
    <>
      {!displayName.displayName ? (
        <LoginPage setDisplayName={setDisplayName} />
      ) : (
        <>
          <Title />
          <DayView />
        </>
      )}
    </>
  );
}
