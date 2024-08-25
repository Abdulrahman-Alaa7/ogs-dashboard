"use client";
import * as z from "zod";
import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFieldArray } from "react-hook-form";
import { ImagePlus, Plus, PlusIcon, Trash } from "lucide-react";
import { Input } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";
import { Switch } from "../../../components/ui/switch";
import { CloudUpload } from "lucide-react";
import { Separator } from "../../../components/ui/separator";
import { Editor } from "../../../components/editor/Editor";
import { ELEMENT_PARAGRAPH } from "@udecode/plate-paragraph";

type Props = {
  initialData?: any | null;
};
export const IMG_MAX_LIMIT = 10;

const ProductItem: React.FC<Props> = ({ initialData }) => {
  const [descEnData, setDescEnData] = useState<any[] | undefined>([""]);
  const [descArData, setDescArData] = useState<any[] | undefined>([""]);
  const typesSchema = z.object({
    title: z.string(),
  });

  const formSchema = z.object({
    name: z.string().min(3, { message: " Name must be at least 3 characters" }),
    mainImage: z.string().nonempty({ message: "Main image can't br empty! " }),
    images: z
      .array(z.string())
      .max(IMG_MAX_LIMIT, {
        message: `You can upload up to ${IMG_MAX_LIMIT} images`,
      })
      .optional(),
    descriptionEn: z.array(z.string().optional()),
    descriptionAr: z.array(z.string().optional()),
    price: z.coerce
      .number()
      .positive({ message: " Price must be greater than 0" }),
    estimatedPrice: z.coerce.number().optional(),
    category: z.string().min(1, { message: "Please select a category" }),
    offer: z.boolean().default(false).optional(),
    aiGen: z.boolean().default(false),
    soldOut: z.boolean().default(false),
    public: z.boolean().default(true),
  });

  type AddNewItemValues = z.infer<typeof formSchema>;

  const [dragging, setDragging] = useState(false);
  const [draggingMain, setDraggingMain] = useState(false);
  const [loading, setLoading] = useState(false);
  const action = initialData ? "Save changes" : "Create";

  const categories = [
    { id: "1215451456", title: "General" },
    { id: "4665485648", title: "Test Category 1" },
    { id: "4156114541", title: "Test Category 2" },
    { id: "0315121555", title: "Test Category 3" },
  ];

  const defaultValues = initialData
    ? initialData
    : {
        name: "",
        descriptionEn: [
          {
            id: "1",
            type: ELEMENT_PARAGRAPH,
            children: [{ text: "" }],
          },
        ],
        descriptionAr: [
          {
            id: "2",
            type: ELEMENT_PARAGRAPH,
            children: [{ text: "" }],
          },
        ],
        price: 0,
        estimatedPrice: 0,
        mainImage: "",
        images: [],
        category: "",
        offer: false,
        aiGen: false,
        soldOut: false,
        public: true,
      };

  const form = useForm<AddNewItemValues>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const { fields, append, remove } = useFieldArray<any>({
    control: form.control,
    name: "images",
  });

  const handleFileChange = (e: any) => {
    const file = e.target.files?.[0];

    if (file && fields.length < IMG_MAX_LIMIT) {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        if (reader.readyState === 2 && e.target.result) {
          append(e.target.result);
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

  const handleDrop = (e: any) => {
    e.preventDefault();
    setDragging(false);

    const file = e.dataTransfer.files?.[0];

    if (file && fields.length < IMG_MAX_LIMIT) {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        if (reader.readyState === 2 && e.target.result) {
          append(e.target.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFileChangeMainImage = (e: any, field: any) => {
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

  const handleDragOverMainImage = (e: any) => {
    e.preventDefault();
    setDraggingMain(true);
  };

  const handleDragLeaveMainImage = (e: any) => {
    e.preventDefault();
    setDraggingMain(false);
  };

  const handleDropMainImage = (e: any, field: any) => {
    e.preventDefault();
    setDraggingMain(false);

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

  const handleRemoveMainImage = (field: any) => {
    field.onChange("");
  };

  const onSubmit = async (data: AddNewItemValues) => {
    try {
      setLoading(true);
      if (initialData) {
        // await axios.post(`/api/products/edit-product/${initialData._id}`, data);
        console.log("success Updated", data);
      } else {
        // const res = await axios.post(`/api/products/create-product`, data);
        // console.log("product", res);
        const NewData = {
          descriptionEn: descEnData,
          descriptionAr: descArData,
          name: data.name,
          price: data.price,
          estimatedPrice: data.estimatedPrice,
          mainImage: data.mainImage,
          images: data.images,
          category: data.category,
          offer: data.offer,
          aiGen: data.aiGen,
          soldOut: data.soldOut,
          public: data.public,
        };
        console.log("success added", NewData);
      }
      // router.refresh();
      // router.push(`/dashboard/menu`);
      // console.log("Error");
    } catch (error: any) {
      console.log("Error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-full"
        >
          <FormField
            control={form.control}
            name={`mainImage`}
            render={({ field }) => (
              <FormItem>
                <FormLabel className=" text-muted-foreground ">
                  Main Image <span className="text-primary">(required)</span>
                </FormLabel>
                <FormControl>
                  <div className={`w-full relative`}>
                    <input
                      type="file"
                      id="mainImage"
                      accept="image/*"
                      className={`hidden`}
                      onChange={(e) => handleFileChangeMainImage(e, field)}
                    />
                    <label
                      htmlFor="mainImage"
                      className={`w-full min-h-[20vh] mb-4 border-dashed border-primary rounded-3xl p-3 border flex items-center justify-center ${
                        draggingMain
                          ? "bg-orange-500 text-white"
                          : "bg-transparent"
                      } cursor-pointer`}
                      onDragOver={handleDragOverMainImage}
                      onDragLeave={handleDragLeaveMainImage}
                      onDrop={(e) => handleDropMainImage(e, field)}
                    >
                      {field.value && field.value.length > 0 ? (
                        <img
                          src={field.value}
                          alt=""
                          className={`object-cover w-[300px] h-[300px]`}
                        />
                      ) : (
                        <div className="flex flex-col gap-4 justify-center items-center">
                          <CloudUpload
                            size={48}
                            className="bg-muted p-2 rounded-lg"
                          />
                          <span
                            className={`text-gray-500 font-semibold text-[14px]`}
                          >
                            Drag and drop your main image here or click to
                            browse
                          </span>
                        </div>
                      )}
                    </label>

                    {field.value && field.value.length > 0 && (
                      <Button
                        type="button"
                        onClick={() => handleRemoveMainImage(field)}
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
          <Separator />
          <FormField
            control={form.control}
            name="images"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-muted-foreground">
                  Additionals Images (optional)
                </FormLabel>
                <FormControl>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {field.value &&
                      field.value.length > 0 &&
                      field.value.map((item: any, index: any) => (
                        <div key={index} className="relative group">
                          <img
                            src={item}
                            alt={`Image ${index + 1}`}
                            className="object-cover w-full h-full"
                          />
                          <Button
                            size={`sm`}
                            type="button"
                            onClick={() => remove(index)}
                            className="absolute top-2 right-2 text-white lg:opacity-0 lg:group-hover:opacity-100"
                          >
                            <Trash size={20} />
                          </Button>
                        </div>
                      ))}
                    {fields.length < IMG_MAX_LIMIT && (
                      <label
                        htmlFor="file"
                        className={`w-full h-full border-dashed border-primary rounded-3xl p-3 border flex items-center justify-center cursor-pointer ${
                          dragging
                            ? "bg-orange-500 text-white"
                            : "bg-transparent"
                        }`}
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                      >
                        <Input
                          type="file"
                          id="file"
                          accept="image/*"
                          className="hidden"
                          onChange={handleFileChange}
                        />
                        <div className="flex flex-col gap-4 justify-center items-center p-2">
                          {fields.length > 0 ? (
                            <PlusIcon
                              size={48}
                              className="bg-muted p-2 rounded-lg"
                            />
                          ) : (
                            <ImagePlus
                              size={48}
                              className="bg-muted p-2 rounded-lg"
                            />
                          )}

                          <span className="text-gray-500 font-semibold text-[13px] ">
                            Drag and drop your image here or click to browse
                          </span>
                        </div>
                      </label>
                    )}
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Separator />
          <div className="md:grid md:grid-cols-3 gap-4 ">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="my-3">
                  <FormLabel className=" text-muted-foreground">
                    Name <span className="text-primary">(required)</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="Product Name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem className="my-3">
                  <FormLabel className=" text-muted-foreground">
                    Price <span className="text-primary">(required)</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      disabled={loading}
                      {...field}
                      placeholder="0"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="estimatedPrice"
              render={({ field }) => (
                <FormItem className="my-3">
                  <FormLabel className=" text-muted-foreground">
                    Estimated Price (optional)
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="0"
                      disabled={loading}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem className="my-3">
                  <FormLabel className=" text-muted-foreground">
                    Category <span className="text-primary">(required)</span>
                  </FormLabel>
                  <Select
                    disabled={loading}
                    onValueChange={field.onChange}
                    value={field.value}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue
                          defaultValue={field.value}
                          placeholder="Select a category (required)"
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {categories.map((category: any) => (
                        <SelectItem key={category.id} value={category.id}>
                          {category.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="offer"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border px-4 py-2 my-3">
                  <div className="space-y-0.5">
                    <FormLabel>Offer</FormLabel>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="aiGen"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border px-4 py-2 my-3">
                  <div className="space-y-0.5">
                    <FormLabel>AI Generated</FormLabel>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="soldOut"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border px-4 py-2 my-3">
                  <div className="space-y-0.5">
                    <FormLabel>Sold Out</FormLabel>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="public"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border px-4 py-2 my-3">
                  <div className="space-y-0.5">
                    <FormLabel className="">Public</FormLabel>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <br />
          </div>
          <Separator />
          <div className="flex flex-col items-center gap-4 w-full ">
            <FormField
              control={form.control}
              name="descriptionEn"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className=" text-muted-foreground mx-auto flex justify-center items-center mb-4">
                    Description & Rules (optional)
                  </FormLabel>
                  <FormControl>
                    <Editor
                      name={`english-desc`}
                      descEnData={descEnData}
                      setDescEnData={setDescEnData}
                      descArData={descArData}
                      setDescArData={setDescArData}
                      value={field.value}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Separator />

            <FormField
              control={form.control}
              name="descriptionAr"
              render={({ field }) => (
                <FormItem dir="" className="w-full">
                  <FormLabel className=" text-muted-foreground mx-auto flex justify-center items-center mb-4 text-[18px] my-6">
                    القواعد و الوصف (اختياري)
                  </FormLabel>
                  <FormControl>
                    <Editor
                      name={`arabic-desc`}
                      descArData={descArData}
                      setDescArData={setDescArData}
                      descEnData={descEnData}
                      setDescEnData={setDescEnData}
                      value={field.value}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Separator />

          <Button
            disabled={loading}
            className="mx-auto w-[250px] flex justify-center items-center"
            type="submit"
          >
            {action}
          </Button>
          <br />
          <br />
        </form>
      </Form>
    </>
  );
};

export default ProductItem;
