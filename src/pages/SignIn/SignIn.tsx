import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, } from "@/components/ui/form";
import { Input } from "../../components/ui/input";
import { Link } from "react-router-dom";
import { defaultStyles } from "@/data/defaultStyles/DefaultStyles";
import { formSchema, onSubmit } from "./data/formSchema";
import { useTranslation } from "react-i18next";

export default function SignIn() {
  const {t} = useTranslation()
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const formFields = [
    {
      name: "email",
      label: t("form-email"),
      placeholder: t("form-email"),
      type: "",
    },
    {
      name: "password",
      label: t("form-password"),
      placeholder: t("form-password"),
      type: "password",
    },
  ];

  return (
    <section className="flex h-[100vh] items-center justify-center">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-[500px] space-y-8 rounded-xl border-[1px] border-[#5f5a5a2c] p-[40px] shadow-xl"
        >
          <div className="text-center">
            <h1 className="text-[25px] font-[700]">{t("sign-in-title")}</h1>
            <p className="text-[#7c7878] text-[14px]">{t("sign-in-description")}</p>
          </div>

          {formFields.map((data) => (
            <FormField
              control={form.control}
              //@ts-ignore
              name={data.name}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{data.label}</FormLabel>
                  <FormControl>
                    <Input placeholder={data.placeholder} type={data.type} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}

          <Button type="submit" className={`w-[100%] ${defaultStyles.button}`}>
            Submit
          </Button>
          <div className="flex justify-between text-[13px]">
            <span className="text-[#0000ff]">{t("form-forgot-password")}</span>
            <div>{t("form-dont-have-an-account")} <Link className="text-[#0000ff]" to={'/signup'}>{t("form-sign-up")}</Link></div>
          </div>
        </form>
      </Form>
    </section>
  );
}
