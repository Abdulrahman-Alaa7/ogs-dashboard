"use client";
import React, { FC, useEffect, useState } from "react";
import { Switch } from "../../../components/ui/switch";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { Label } from "../../../components/ui/label";
import { Button } from "../../../components/ui/button";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../components/ui/form";
import { Input } from "../../../components/ui/input";
import { Separator } from "../../../components/ui/separator";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { toast } from "sonner";

type Props = {};

const Lock = (props: Props) => {
  const accountSchema = z.object({
    shippingEn: z
      .string()
      .min(8, {
        message: `Shipping text must be at least 8 characters`,
      })
      .max(150, {
        message: `Shipping text must not exceed 150 letter`,
      }),
    shippingAr: z
      .string()
      .min(8, {
        message: `جملة الشحن العربية لا يجب ان تقل عن 8 احرف`,
      })
      .max(150, {
        message: `جملة الشحن العربية لا يجب ان تزيد عن 150 حرف`,
      }),
    address: z
      .string()
      .min(3, { message: `Address  must be at least 3 characters` })
      .max(150, {
        message: `Address must not exceed 150 letter`,
      }),
    lock: z.boolean().default(false),
    shippingPrice: z.coerce.number(),
  });

  type accountValue = z.infer<typeof accountSchema>;

  // This can come from your database or API.
  const defaultValues: Partial<accountValue> = {
    shippingEn: "",
    shippingAr: "",
    address: "",
    shippingPrice: 0,
    lock: false,
  };

  const form = useForm<accountValue>({
    resolver: zodResolver(accountSchema),
    defaultValues,
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<accountValue> = async (data) => {
    try {
      console.log(data);

      toast.success("OGs Settings updated successfully");
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <div>
      <Card className="fadeRight">
        <CardHeader>
          <CardTitle className="text-[18px] md:text-[25px]">
            Lock & Shipping & Address
          </CardTitle>
          <CardDescription>Change settings from here. </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full space-y-6"
            >
              <div>
                <div className="space-y-4 ">
                  <FormField
                    control={form.control}
                    name="shippingPrice"
                    render={({ field }) => (
                      <FormItem className="w-full lg:w-[70%]  mx-auto">
                        <FormLabel>shipping Price</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder={`55`}
                            {...field}
                            className="py-6"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="shippingEn"
                    render={({ field }) => (
                      <FormItem className="w-full lg:w-[70%]  mx-auto">
                        <FormLabel>Free Shipping Desc </FormLabel>
                        <FormControl>
                          <Input
                            placeholder={`Write a Free Shipping Desc`}
                            {...field}
                            className="py-6"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="shippingAr"
                    render={({ field }) => (
                      <FormItem
                        className="w-full lg:w-[70%] text-right  mx-auto"
                        dir="rtl"
                      >
                        <FormLabel className="text-[18px]">
                          وصف الشحن{" "}
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder={`اكتب وصف للشحن المجاني `}
                            {...field}
                            className="py-6"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem className="w-full lg:w-[70%]  mx-auto">
                        <FormLabel>OGs&#39;s Address </FormLabel>
                        <FormControl>
                          <Input
                            placeholder={`Write a Address`}
                            {...field}
                            className="py-6"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="lock"
                    render={({ field }) => (
                      <FormItem className="w-full lg:w-[70%] mx-auto flex flex-row items-center justify-between rounded-lg border p-4">
                        <div className="space-y-0.5">
                          <FormLabel className="text-base">
                            Airplane mode
                          </FormLabel>
                          <FormDescription className="text-sm">
                            Open or lock receive orders from here.
                          </FormDescription>
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
                </div>
              </div>
              <Button
                className="mx-auto w-[250px] flex justify-center items-center"
                type="submit"
              >
                Save
              </Button>{" "}
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Lock;
