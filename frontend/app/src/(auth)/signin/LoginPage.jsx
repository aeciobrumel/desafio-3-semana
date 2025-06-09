import { SigninForm } from "../../components/auth/signin-form";
import Logo from "../../components/ui/logo";


export default function LoginPage() {
  return (
    <div className={`bg-[url(../../../public/bg-login.png)] w-full h-[100vh] bg-cover flex items-center h-dv`}>
      <div className=" flex items-center justify-center bg-verde w-50 h-50 z-1 absolute top-0 left-0">
        <img src="/sesc-logo.png" alt="" />
      </div>
      <div className=" flex flex-col items-center justify-center max-w-lg mx-auto bg-verde/80 rounded-[40px] p-10">
        <Logo size={120} />
        <h1 className="mt-10 text-2xl text-white">Faça seu Login</h1>
        <div className="mt-5">
          <SigninForm className="flex-col" />
        </div>
      </div>
    </div>
  );
}
