"use client";
import React, { FC, useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Badge } from "../../../../components/ui/badge";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../components/ui/table";
import { Trash2 } from "lucide-react";
import { orders } from "../data/orders";
import { Separator } from "../../../../components/ui/separator";
import { ScrollArea } from "../../../../components/ui/scroll-area";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../../components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";
import {
  CheckCircledIcon,
  CrossCircledIcon,
  StopwatchIcon,
} from "@radix-ui/react-icons";
import { CircleDotDashed } from "lucide-react";
import { AlertModal } from "../../alert-modal";

type Props = {
  id: any;
};

const ViewOrder: FC<Props> = ({ id }) => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const onConfirm = async () => {};
  const viewData = orders && orders.find((i: any) => i.id === id);

  const orderInfo: any = viewData && viewData.order?.map((item: any) => item);

  const sumPrice = (order: any) => {
    let TotalPrice = 0;
    for (let i = 0; i < order?.length; i++) {
      TotalPrice += order[i].price * order[i].quantity;
    }
    return TotalPrice;
  };

  const formatPhoneNumber = (phoneNumberString: any) => {
    const cleanedPhoneNumber = phoneNumberString.replace(/\D/g, "");

    const match = cleanedPhoneNumber.match(/^(\d{3})(\d{4})(\d{4})$/);
    if (match) {
      return `${match[1]} ${match[2]} ${match[3]}`;
    } else {
      return phoneNumberString;
    }
  };

  const statusSchema = z.object({
    status: z.string(),
  });

  const form = useForm<z.infer<typeof statusSchema>>({
    resolver: zodResolver(statusSchema),
  });

  function onSubmit(data: z.infer<typeof statusSchema>) {
    console.log(data);
  }

  return (
    <div className=" flex-1 space-y-2  pt-4 flex-col justify-center items-center">
      <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onConfirm}
        loading={loading}
      />
      <h2
        className={`bg-muted font-semibold mx-auto px-6 py-2 w-fit mb-3 rounded-3xl flex items-center gap-2 text-[16px] md:text-[20px]`}
      >
        Shipping Information & Contact
      </h2>
      <ScrollArea className=" w-[100%]  md:w-[70%] overflow-auto mx-auto border rounded-md">
        <Table className=" w-full overflow-auto mx-auto ">
          <TableHeader>
            <TableRow className="">
              <TableHead className="px-2 border-r flex justify-center items-center mx-auto ">
                Name
              </TableHead>
              <TableHead className="text-center">Value</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="mx-auto w-[100%]  overflow-auto">
            <TableRow>
              <TableCell className="font-bold  w-[150px] px-2 border-r">
                <Badge
                  variant={`default`}
                  className="px-2 font-bold text-[12px] md:text-[14px] w-[110px] md:!w-[130px] flex justify-center items-center mx-auto"
                >
                  Full Name
                </Badge>
              </TableCell>
              <TableCell
                style={{
                  whiteSpace: "pre-wrap",
                  wordBreak: "break-word",
                }}
                className=" font-semibold text-start text-[14px] md:text-[16px] px-1 flex justify-center items-center mx-auto"
              >
                {viewData?.fullName}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-bold  w-[150px] px-2 border-r">
                <Badge
                  variant={`default`}
                  className="px-2 font-bold text-[12px] md:text-[14px] w-[110px] md:!w-[130px] flex justify-center items-center mx-auto"
                >
                  Phone Number
                </Badge>
              </TableCell>
              <TableCell
                style={{
                  whiteSpace: "pre-wrap",
                  wordBreak: "break-word",
                }}
                className=" font-semibold text-start text-[14px] md:text-[16px] px-1 flex justify-center items-center mx-auto"
              >
                {formatPhoneNumber(viewData?.phone_number)}
              </TableCell>
            </TableRow>
            {viewData?.secPhone_number && (
              <TableRow>
                <TableCell className="font-bold  w-[150px] px-2 border-r">
                  <Badge
                    variant={`outline`}
                    className="px-2 font-bold text-[12px] md:text-[14px] w-[140px] md:!w-[150px] flex justify-center items-center mx-auto"
                  >
                    Sec Phone Number
                  </Badge>
                </TableCell>
                <TableCell
                  style={{
                    whiteSpace: "pre-wrap",
                    wordBreak: "break-word",
                  }}
                  className="font-semibold text-start text-[14px] md:text-[16px] px-1 flex justify-center items-center mx-auto"
                >
                  {formatPhoneNumber(viewData?.secPhone_number)}
                </TableCell>
              </TableRow>
            )}
            <TableRow>
              <TableCell className="font-bold  w-[150px] px-2 border-r">
                <Badge
                  variant={`default`}
                  className="px-2 font-bold text-[12px] md:text-[14px] w-[110px] md:!w-[130px] flex justify-center items-center mx-auto"
                >
                  Email
                </Badge>
              </TableCell>
              <TableCell
                style={{
                  whiteSpace: "pre-wrap",
                  wordBreak: "break-word",
                }}
                className=" font-semibold text-start text-[14px] md:text-[16px] px-1 flex justify-center items-center mx-auto"
              >
                {viewData?.email}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-bold  w-[150px] px-2 border-r">
                <Badge
                  variant={`default`}
                  className="px-2 font-bold text-[12px] md:text-[14px] w-[110px] md:!w-[130px] flex justify-center items-center mx-auto"
                >
                  Governorate
                </Badge>
              </TableCell>
              <TableCell
                style={{
                  whiteSpace: "pre-wrap",
                  wordBreak: "break-word",
                }}
                className=" font-semibold text-start text-[14px] md:text-[16px] px-1 flex justify-center items-center mx-auto"
              >
                {viewData?.governorate}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-bold  w-[150px] px-2 border-r">
                <Badge
                  variant={`default`}
                  className="px-2 font-bold text-[12px] md:text-[14px] w-[110px] md:!w-[130px] flex justify-center items-center mx-auto"
                >
                  City
                </Badge>
              </TableCell>
              <TableCell
                style={{
                  whiteSpace: "pre-wrap",
                  wordBreak: "break-word",
                }}
                className=" font-semibold text-start text-[14px] md:text-[16px] px-1 flex justify-center items-center mx-auto"
              >
                {viewData?.city}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-bold  w-[150px] px-2 border-r">
                <Badge
                  variant={`default`}
                  className="px-2 font-bold text-[12px] md:text-[14px] w-[110px] md:!w-[130px] flex justify-center items-center mx-auto"
                >
                  Address
                </Badge>
              </TableCell>
              <TableCell
                style={{
                  whiteSpace: "pre-wrap",
                  wordBreak: "break-word",
                }}
                className=" font-semibold text-start text-[14px] md:text-[16px] px-1 flex justify-center items-center mx-auto"
              >
                {viewData?.address}
              </TableCell>
            </TableRow>
            {viewData?.secGovernorate && (
              <TableRow>
                <TableCell className="font-bold  w-[150px] px-2 border-r">
                  <Badge
                    variant={`outline`}
                    className="px-2 font-bold text-[12px] md:text-[14px] w-[140px] md:!w-[150px] flex justify-center items-center mx-auto"
                  >
                    Sec Governorate
                  </Badge>
                </TableCell>
                <TableCell
                  style={{
                    whiteSpace: "pre-wrap",
                    wordBreak: "break-word",
                  }}
                  className="font-semibold text-start text-[14px] md:text-[16px] px-1 flex justify-center items-center mx-auto"
                >
                  {viewData?.secGovernorate}
                </TableCell>
              </TableRow>
            )}
            {viewData?.secCity && (
              <TableRow>
                <TableCell className="font-bold  w-[150px] px-2 border-r">
                  <Badge
                    variant={`outline`}
                    className="px-2 font-bold text-[12px] md:text-[14px] w-[140px] md:!w-[150px] flex justify-center items-center mx-auto"
                  >
                    Sec City
                  </Badge>
                </TableCell>
                <TableCell
                  style={{
                    whiteSpace: "pre-wrap",
                    wordBreak: "break-word",
                  }}
                  className="font-semibold text-start text-[14px] md:text-[16px] px-1 flex justify-center items-center mx-auto"
                >
                  {viewData?.secCity}
                </TableCell>
              </TableRow>
            )}
            {viewData?.secAddress && (
              <TableRow>
                <TableCell className="font-bold  w-[150px] px-2 border-r">
                  <Badge
                    variant={`outline`}
                    className="px-2 font-bold text-[12px] md:text-[14px] w-[140px] md:!w-[150px] flex justify-center items-center mx-auto"
                  >
                    Sec Address
                  </Badge>
                </TableCell>
                <TableCell
                  style={{
                    whiteSpace: "pre-wrap",
                    wordBreak: "break-word",
                  }}
                  className="font-semibold text-start text-[14px] md:text-[16px] px-1 flex justify-center items-center mx-auto"
                >
                  {viewData?.secAddress}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </ScrollArea>

      <br />
      <Separator />
      <br />
      <h2
        className={`bg-muted font-semibold mx-auto px-6 py-2 w-fit mb-3 rounded-3xl flex items-center gap-2 text-[20px]`}
      >
        Order Details
      </h2>
      <ScrollArea className="rounded-md border pb-2 w-full md:w-[70%] mx-auto">
        <Table className="w-full mx-auto">
          <TableCaption>A list of this order.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Quantity</TableHead>
              <TableHead>Name</TableHead>
              <TableHead className="text-right">Price</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="">
            {orderInfo?.map((item: any, index: number) => (
              <TableRow key={index}>
                <TableCell className="font-bold flex justify-center items-center">
                  <Badge variant={`default`}>{item.quantity}</Badge>
                </TableCell>
                <TableCell
                  style={{
                    whiteSpace: "pre-wrap",
                    wordBreak: "break-word",
                  }}
                  className=" font-semibold text-start"
                >
                  {item.name}
                </TableCell>
                <TableCell className="text-right font-meduim">
                  EGP {item.price * item.quantity}
                </TableCell>
              </TableRow>
            ))}

            <TableRow>
              <TableCell colSpan={2} className="text-left font-bold">
                Total
              </TableCell>
              <TableCell className="text-right font-bold">
                EGP {sumPrice(orderInfo)}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </ScrollArea>
      <br />
      {viewData?.note && (
        <div
          className={`min-h-auto max-h-[200px] md:w-[70%]  rounded-md border p-4 flex flex-col overflow-auto text-center mx-auto `}
        >
          <Badge
            variant={`outline`}
            className="text-[17px] block mx-auto w-fit !mb-6"
          >
            Note
          </Badge>
          <p
            className={`font- text-[18px] tracking-wide text-muted-foreground`}
          >
            {viewData?.note}
          </p>
        </div>
      )}
      <br />
      <Separator />
      <br />

      <h2
        className={`bg-muted font-semibold mx-auto px-6 py-2 w-fit mb-3 rounded-3xl flex items-center gap-2 text-[20px]`}
      >
        Mange status
      </h2>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="rounded-md space-y-6 w-full md:w-[70%] mx-auto  my-12"
        >
          <FormField
            control={form.control}
            name="status"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Status</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={viewData?.status}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Status to display" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem
                      value="pending"
                      className="text-yellow-600 hover:!text-yellow-500"
                    >
                      <div className="flex justify-center items-center gap-2">
                        <CircleDotDashed size={18} />
                        <span>Pending</span>
                      </div>
                    </SelectItem>
                    <SelectItem
                      value="in progress"
                      className="text-blue-600  hover:!text-blue-500 "
                    >
                      <div className="flex justify-center items-center gap-2">
                        <StopwatchIcon fontSize={18} />
                        <span> In progress</span>
                      </div>
                    </SelectItem>
                    <SelectItem
                      value="done"
                      className="text-green-600 hover:!text-green-500 "
                    >
                      <div className="flex justify-center items-center gap-2">
                        <CheckCircledIcon fontSize={18} />
                        <span>Done</span>
                      </div>
                    </SelectItem>
                    <SelectItem
                      value="canceled"
                      className="text-red-600 hover:!text-red-500"
                    >
                      <div className="flex justify-center items-center gap-2">
                        <CrossCircledIcon fontSize={18} />
                        <span>Canceled</span>
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
                <FormDescription>
                  You can manage order&#39;s status
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="mx-auto px-6 flex justify-center items-center"
          >
            Save
          </Button>
        </form>
      </Form>
      <br />
      <Separator />
      <br />

      <Button
        variant={`destructive`}
        className={`!mx-auto px-6 rounded-full my-6 sm:w-[30%] w-[100%] flex justify-center items-center gap-2 `}
        onClick={() => setOpen(true)}
      >
        <Trash2 size={18} />
        Delete Order
      </Button>
      <br />
      <br />
    </div>
  );
};

export default ViewOrder;
