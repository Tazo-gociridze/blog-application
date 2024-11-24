import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "../../components/ui/input";
import { Link } from "react-router-dom";
import { defaultStyles } from "@/data/defaultStyles/DefaultStyles";
import useSignUpForm from "@/customHooks/sign-up/useSignUpForm";

export default function SignUpForm() {
  const {
    t,
    registerPayload,
    setRegisterPayload,
    handleSubmitRegister,
    form,
  } = useSignUpForm();

  return (
    <section className="flex h-[100vh] items-center justify-center">
      <Form {...form}>
        <form
          onSubmit={handleSubmitRegister}
          className="w-[500px] space-y-8 rounded-xl border-[1px] border-[#5f5a5a1a] p-[40px] shadow-xl"
        >
          <div className="text-center">
            <h1 className="text-[25px] font-[700]">{t("sign-up-title")}</h1>
            <p className="text-[14px] text-[#7c7878]">
              {t("sign-up-description")}
            </p>
          </div>
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Name" type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

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
                    value={registerPayload.email}
                    onChange={(e) => {
                      setRegisterPayload({
                        email: e.target.value,
                        password: registerPayload.password,
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
                    value={registerPayload.password}
                    onChange={(e) => {
                      setRegisterPayload({
                        email: registerPayload.email,
                        password: e.target.value,
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
            name="repeatPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Repeat password</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Repeat password"
                    type="password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormDescription className="flex justify-between">
            <span>{t("form-have-an-account")}</span>
            <Link className="text-[blue]" to="/signin">
              {t("form-sign-in")}
            </Link>
          </FormDescription>

          <Button type="submit" className={`w-[100%] ${defaultStyles.button}`}>
            {t("form-submit-btn")}
          </Button>
        </form>
      </Form>
    </section>
  );
}
