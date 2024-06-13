import { useForm } from "react-hook-form";
import Layout from "@/components/ui/layout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";
type formData = {
  Email: string;
  Password: string;
  Remember: boolean;
};
const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formData>();
  const onSubmit = (data: formData) => {
    console.log(data);
  };
  console.log(errors);

  return (
    <Layout className="items-center justify-center h-screen flex">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-96 border shadow rounded-md p-5 bg-secondary flex flex-col gap-4"
      >
        <Input
          // type="email"
          placeholder="ایمیل"
          {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        {errors.Email && (
          <span className="text-destructive font-bold">
            لطفاً یک ایمیل معتبر وارد کنید
          </span>
        )}
        <Input
          type="password"
          placeholder="رمزعبور"
          {...register("Password", {
            required: true,
            maxLength: 16,
            minLength: 8,
          })}
        />
        {errors.Password && (
          <span className="text-destructive font-bold">
            رمز عبور باید حداقل ۸ و حداکثر ۱۶ کاراکتر باشد
          </span>
        )}
        <div className=" flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Checkbox
              id="terms"
              className="rounded"
              {...register("Remember", { required: false })}
            />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none cursor-pointer peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              مرا بخاطر بسبار
            </label>
          </div>
          <Link to="/" className="hover:text-primary transition-all">
            رمز عبور را فراموش کرده اید؟
          </Link>
        </div>
        <Button type="submit">ورود</Button>
      </form>
    </Layout>
  );
};
export default SignIn;
