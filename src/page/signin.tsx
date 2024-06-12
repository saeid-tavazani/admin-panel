import Layout from "@/components/ui/layout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
const SignIn = () => {
  return (
    <Layout className="items-center justify-center h-screen flex">
      <article className="w-96 border shadow rounded-md p-5 bg-secondary flex flex-col gap-4">
        <Input type="email" placeholder="ایمیل" />
        <Input type="password" placeholder="رمزعبور" />
        <div className=" flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Checkbox id="terms" className="rounded" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none cursor-pointer peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              مرا بخاطر بسبار
            </label>
          </div>
          <Button variant="ghost" className="hover:text-primary transition-all">
            رمز عبور را فراموش کرده اید؟
          </Button>
        </div>
        <Button>ورود</Button>
      </article>
    </Layout>
  );
};
export default SignIn;
