"use client";
import React, { FC, useState } from "react";
import { Plus, Trash } from "lucide-react";
import { Button } from "../../components/ui/button";
import { useForm, useFieldArray } from "react-hook-form";
import { Form, FormField } from "../../components/ui/form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";

type Props = {
  categories?: { title: string }[];
};
const CategoryItem: FC<Props> = ({ categories }) => {
  const [loading, setLoading] = useState(false);

  const categorySchema = z.object({
    title: z.string().nonempty({ message: "Title can't be empty!" }),
  });

  const formSchema = z.object({
    categories: z.array(categorySchema).optional(),
  });

  type AddNewItemValues = z.infer<typeof formSchema>;

  const defaultValues: AddNewItemValues = {
    categories: categories || [],
  };

  const form = useForm<AddNewItemValues>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "categories",
  });

  const onSubmit = async (data: AddNewItemValues) => {
    try {
      setLoading(true);
      if (categories) {
        // await axios.post(`/api/products/edit-product/${initialData._id}`, data);
        console.log("success Updated", data);
      } else {
        // const res = await axios.post(`/api/products/create-product`, data);
        // console.log('product', res);
        console.log("success added", data);
      }
      // router.refresh();
      // router.push(`/dashboard/menu`);
    } catch (error: any) {
      console.log("Error", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Button
        type="button"
        className="w-[120px] flex justify-center gap-2 items-center ml-auto"
        onClick={() => append({ title: "" })}
      >
        <Plus size={20} /> Add New
      </Button>
      <div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 w-full"
          >
            <div className="md:grid md:grid-cols-3 gap-2">
              {fields.map((item, index) => (
                <div className="fadeIn  block m p-2 rounded-lg" key={item.id}>
                  <div className="flex flex-col gap-2">
                    <Label
                      htmlFor={`category-${index}`}
                      className="text-muted-foreground"
                    >
                      Write a category
                    </Label>
                    <FormField
                      control={form.control}
                      name={`categories.${index}.title`}
                      render={({ field }) => (
                        <Input
                          type="text"
                          placeholder="Write a category"
                          {...field}
                        />
                      )}
                    />
                  </div>
                  <div className="w-full flex items-center justify-between my-3">
                    <label
                      htmlFor={`type-${index}`}
                      className="text-black dark:text-white text-[12px] px-2 font-medium"
                    >
                      Category {index + 1}
                    </label>
                    <Button
                      className="flex justify-center items-center gap-2"
                      onClick={() => {
                        if (fields.length > 1) {
                          remove(index);
                        }
                      }}
                      variant="ghost"
                    >
                      <Trash size={20} color="red" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <Button
              className="mx-auto w-[250px] flex justify-center items-center"
              type="submit"
            >
              Save
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default CategoryItem;
