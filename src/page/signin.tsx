import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import Layout from "@/components/ui/layout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { signIn } from "@/services/userServices";
import AlertError from "@/components/ui/alertError";
import { useUserContext } from "@/context/userContext";
type formData = {
  Email: string;
  Password: string;
  Remember: boolean;
};
const SignIn = () => {
  const navigate = useNavigate();
  const { setUser, user } = useUserContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formData>();

  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);

  const { data, error, isLoading } = signIn(email!, password!);
  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, []);
  useEffect(() => {
    if (data?.length && email) {
      setUser(data[0]);
      navigate("/dashboard");
    }
  }, [data]);

  const onSubmit = ({ Email, Password }: formData) => {
    setEmail(Email);
    setPassword(Password);
  };

  return (
    <Layout className="items-center justify-center h-screen flex flex-col">
      {error && <AlertError message={error.message} />}

      {!data?.length && email ? (
        <AlertError message="کاربری با این مشخصات پیدا نشد" />
      ) : null}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-96 border shadow rounded-md p-5 bg-secondary flex flex-col gap-4"
      >
        <Input
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
        <Button disabled={isLoading ? true : false} type="submit">
          {isLoading ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            "ورود"
          )}
        </Button>
      </form>
    </Layout>
  );
};
export default SignIn;
