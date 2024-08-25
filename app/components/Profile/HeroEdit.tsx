"use client";
import React, { FC, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { Plus, Trash, CloudUpload } from "lucide-react";
import { useForm, useFieldArray } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../components/ui/form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import { Button } from "../../../components/ui/button";
import { Separator } from "../../../components/ui/separator";

type Props = {
  heros?: {
    titleEn: string;
    titleAr: string;
    pEn: string;
    pAr: string;
    fileUrl?: string;
  }[];
};

const HeroEdit: FC<Props> = ({ heros }) => {
  const [loading, setLoading] = useState(false);
  const [dragging, setDragging] = useState(false);

  const categorySchema = z.object({
    titleEn: z.string().nonempty({ message: "titleEn can't be empty!" }),
    titleAr: z.string().nonempty({ message: "titleAr can't be empty!" }),
    pEn: z.string().nonempty({ message: "pEn can't be empty!" }),
    pAr: z.string().nonempty({ message: "pAr can't be empty!" }),
    fileUrl: z.string().optional(),
  });

  const formSchema = z.object({
    heros: z.array(categorySchema).optional(),
  });

  type AddNewItemValues = z.infer<typeof formSchema>;

  const defaultValues: AddNewItemValues = {
    heros: heros || [],
  };

  const form = useForm<AddNewItemValues>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "heros",
  });

  const onSubmit = async (data: AddNewItemValues) => {
    try {
      setLoading(true);
      if (heros) {
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

  const handleFileChange = (e: any, field: any) => {
    const file = e.target.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        if (reader.readyState === 2) {
          field.onChange(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e: any) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = (e: any) => {
    e.preventDefault();
    setDragging(false);
  };

  const handleDrop = (e: any, field: any) => {
    e.preventDefault();
    setDragging(false);

    const file = e.dataTransfer.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        if (reader.readyState === 2) {
          field.onChange(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = (field: any) => {
    field.onChange("");
  };

  return (
    <div>
      <Card className="fadeRight">
        <CardHeader>
          <CardTitle>Edit Hero</CardTitle>
          <CardDescription>
            Make changes to your Hero section here. Click save when youre done.
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-2">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 w-full"
            >
              <div className="flex flex-col gap-2">
                {fields.map((item, index) => (
                  <div
                    className="fadeIn   p-2 rounded-lg flex flex-col gap-2"
                    key={item.id}
                  >
                    <FormField
                      control={form.control}
                      name={`heros.${index}.fileUrl`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className=" text-muted-foreground ">
                            Image / Video
                          </FormLabel>
                          <FormControl>
                            <div className={`w-full relative`}>
                              <input
                                type="file"
                                id="file"
                                accept="image/*,video/*"
                                className={`hidden`}
                                onChange={(e) => handleFileChange(e, field)}
                              />
                              <label
                                htmlFor="file"
                                className={`w-full min-h-[20vh] mb-4 border-dashed border-primary rounded-3xl p-3 border flex items-center justify-center ${
                                  dragging
                                    ? "bg-orange-500 text-white"
                                    : "bg-transparent"
                                } cursor-pointer`}
                                onDragOver={handleDragOver}
                                onDragLeave={handleDragLeave}
                                onDrop={(e) => handleDrop(e, field)}
                              >
                                {field.value && field.value.length > 0 ? (
                                  field.value.includes("image") ? (
                                    <img
                                      src={field.value}
                                      alt=""
                                      className={`object-cover w-[300px] h-[300px]`}
                                    />
                                  ) : (
                                    <video
                                      src={field.value}
                                      controls
                                      className={`object-cover w-[300px] h-[300px]`}
                                    />
                                  )
                                ) : (
                                  <div className="flex flex-col gap-4 justify-center items-center">
                                    <CloudUpload
                                      size={48}
                                      className="bg-muted p-2 rounded-lg"
                                    />
                                    <span
                                      className={`text-gray-500 font-semibold text-[14px]`}
                                    >
                                      Drag and drop your image/video here or
                                      click to browse
                                    </span>
                                  </div>
                                )}
                              </label>

                              {field.value && field.value.length > 0 && (
                                <Button
                                  type="button"
                                  onClick={() => handleRemoveImage(field)}
                                  className="absolute top-3 right-3 text-white"
                                >
                                  <Trash size={20} />
                                </Button>
                              )}
                            </div>
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="flex flex-col gap-3 mb-3">
                      <Label
                        htmlFor={`heros-${index}`}
                        className=" text-primary"
                      >
                        Write a title
                      </Label>
                      <FormField
                        control={form.control}
                        name={`heros.${index}.titleEn`}
                        render={({ field }) => (
                          <Input
                            type="text"
                            placeholder="Write a title "
                            {...field}
                          />
                        )}
                      />
                    </div>
                    <div
                      dir="rtl"
                      className="flex flex-col gap-3 mb-3 text-right "
                    >
                      {" "}
                      <Label
                        htmlFor={`heros-${index}`}
                        className="text-primary text-[18px]"
                      >
                        اكتب عنوان
                      </Label>
                      <FormField
                        control={form.control}
                        name={`heros.${index}.titleAr`}
                        render={({ field }) => (
                          <Input
                            type="text"
                            placeholder="اكتب عنوان"
                            {...field}
                          />
                        )}
                      />
                    </div>
                    <div className="flex flex-col gap-3 mb-3">
                      <Label
                        htmlFor={`heros-${index}`}
                        className="text-primary"
                      >
                        Write a description
                      </Label>
                      <FormField
                        control={form.control}
                        name={`heros.${index}.pEn`}
                        render={({ field }) => (
                          <Input
                            type="text"
                            placeholder="Write a description"
                            {...field}
                          />
                        )}
                      />
                    </div>
                    <div
                      dir="rtl"
                      className="flex flex-col gap-3 mb-3 text-right "
                    >
                      <Label
                        htmlFor={`heros-${index}.titleAr`}
                        className="text-primary text-[18px]"
                      >
                        اكتب وصف
                      </Label>
                      <FormField
                        control={form.control}
                        name={`heros.${index}.pAr`}
                        render={({ field }) => (
                          <Input
                            type="text"
                            placeholder="اكتب وصف"
                            {...field}
                          />
                        )}
                      />
                    </div>
                    <div className="w-full flex items-center justify-between mt-2 pb-3">
                      <label
                        htmlFor={`type-${index}`}
                        className="text-black dark:text-white text-[12px] px-2 font-medium"
                      >
                        Hero {index + 1}
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
                    <Separator />
                  </div>
                ))}
              </div>
              <Button
                type="button"
                variant={`secondary`}
                className="w-[120px] flex justify-center gap-2 items-center mx-auto"
                onClick={() =>
                  append({
                    fileUrl: "",
                    titleEn: "",
                    titleAr: "",
                    pEn: "",
                    pAr: "",
                  })
                }
              >
                <Plus size={20} /> Add New
              </Button>
              <Button
                className="mx-auto w-[250px] flex justify-center items-center"
                type="submit"
              >
                Save
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default HeroEdit;
