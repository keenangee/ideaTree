import DayView from "@/components/DayView";
import SignUpPage from "@/components/SignUpPage";
import { FunctionComponent } from "react";

interface pageProps {}

const page: FunctionComponent<pageProps> = () => {
  return (
    <>
      <SignUpPage />
    </>
  );
};

export default page;
