import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "../../components/ui/input";
import { Link } from "react-router-dom";
import { defaultStyles } from "@/data/defaultStyles/DefaultStyles";
import { formSchema, onSubmit } from "./data/formSchema";
import { useMutation } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { login } from "@/supabase/auth";

export default function SignIn() {
  const { t } = useTranslation();
  const [loginPayload, setLoginPayload] = useState({
    email: "",
    password: "",
  });

  const { mutate } = useMutation({
    mutationKey: ["login"],
    mutationFn: login,
  });

  const handleSubmitLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!!loginPayload.email && !!loginPayload.password) {
      mutate(loginPayload);
    }
    form.handleSubmit(onSubmit);
};

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  return (
    <section className="flex h-[100vh] items-center justify-center">
      <Form {...form}>
        <form
          onSubmit={handleSubmitLogin}
          className="w-[500px] space-y-8 rounded-xl border-[1px] border-[#5f5a5a2c] p-[40px] shadow-xl"
        >
          <div className="text-center">
            <h1 className="text-[25px] font-[700]">{t("sign-in-title")}</h1>
            <p className="text-[14px] text-[#7c7878]">
              {t("sign-in-description")}
            </p>
          </div>

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Email"
                    type="text"
                    {...field}
                    value={loginPayload.email}
                    onChange={(e) => {
                      setLoginPayload({
                        email: e.target.value,
                        password: loginPayload.password,
                      });
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Password"
                    type="password"
                    {...field}
                    value={loginPayload.password}
                    onChange={(e) => {
                      setLoginPayload({
                        email: loginPayload.email,
                        password: e.target.value,
                      });
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className={`w-[100%] ${defaultStyles.button}`}>
            Submit
          </Button>
          <div className="flex justify-between text-[13px]">
            <span className="text-[#0000ff]">{t("form-forgot-password")}</span>
            <div>
              {t("form-dont-have-an-account")}{" "}
              <Link className="text-[#0000ff]" to={"/signup"}>
                {t("form-sign-up")}
              </Link>
            </div>
          </div>
        </form>
      </Form>
    </section>
  );
}
