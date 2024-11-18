import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
import { formSchema, onSubmit } from "./data/formSchema";
import { useTranslation } from "react-i18next";

export default function ProfileForm() {
  const {t} = useTranslation()
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      repeatPassword: "",
    },
  });

  const formFields = [
    {
      name: "username",
      label: t("form-name"),
      placeholder: t("form-name"),
      type: "",
    },
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
    {
      name: "repeatPassword",
      label: t("form-repeat-password"),
      placeholder: t("form-repeat-password"),
      type: "password",
    },
  ];

  return (
    <section className="flex h-[100vh] items-center justify-center">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-[500px] space-y-8 rounded-xl border-[1px] border-[#5f5a5a1a] p-[40px] shadow-xl"
        >
          <div className="text-center">
            <h1 className="text-[25px] font-[700]">{t("sign-up-title")}</h1>
            <p className="text-[14px] text-[#7c7878]">
            {t("sign-up-description")}
            </p>
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
