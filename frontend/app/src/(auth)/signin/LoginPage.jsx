import { SigninForm } from "../../components/auth/signin-form";
import Logo from "../../components/ui/logo";

export default function LoginPage() {
  return (
    <div className="bg-red-900 w-full flex items-center h-dvh">
      <div className=" flex flex-col items-center justify-center max-w-lg mx-auto bg-teal-900 rounded-[40px] p-10">
        <Logo size={120} />
        <h1 className="mt-10 text-2xl text-white">Faça seu Login</h1>
        <div className="mt-5">
          <SigninForm className="flex-col" />
        </div>
      </div>
    </div>
  );
}
