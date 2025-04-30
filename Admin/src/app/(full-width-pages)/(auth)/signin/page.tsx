import SignInForm from "@/components/auth/SignInForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Langford College | Admin",
  description: "Online Degrees Without The High Fees",
};
export default function SignIn() {
  return <SignInForm />;
}
