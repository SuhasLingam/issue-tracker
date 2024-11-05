"use client";
import { TextField, Button } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { createIssueSchema } from "@/app/validationSchemas";
import { z } from "zod";

type IssueForm = z.infer<typeof createIssueSchema>;

const NewIssuePage = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IssueForm>({
    resolver: zodResolver(createIssueSchema),
  });
  const router = useRouter();

  return (
    <form
      className="max-w-xl space-y-3"
      onSubmit={handleSubmit(async (data) => {
        try {
          await axios.post("/api/issues", data);
          router.push("/issues");
        } catch (error) {
          console.log(error);
        }
      })}
    >
      <TextField.Root placeholder="Title" {...register("title")} />
      {errors.title && <p style={{ color: "red" }}>{errors.title.message}</p>}
      <Controller
        control={control}
        name="description"
        render={({ field }) => (
          <SimpleMDE placeholder="Description" {...field} />
        )}
      />
      {errors.description && (
        <p style={{ color: "red" }}>{errors.description.message}</p>
      )}
      <Button>Submit New Issue</Button>
    </form>
  );
};

export default NewIssuePage;
