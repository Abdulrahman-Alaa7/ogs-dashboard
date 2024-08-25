"use client";
import React, { useState } from "react";
import { Rating } from "@smastrom/react-rating";
import { Button } from "../../../components/ui/button";
import { FaRankingStar } from "react-icons/fa6";
import "@smastrom/react-rating/style.css";
import { AlertModal } from "../alert-modal";
import { Eye, EyeOff, Trash2 } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "../../../components/ui/form";
import { Switch } from "../../../components/ui/switch";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

type Props = {
  id: any;
};

const ReviewsCard = ({ id }: Props) => {
  const reviews = [
    {
      id: "15214545",
      rating: 5,
      name: "Ahmed",
      date: "07/31/2024",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      productId: "1",
      public: false,
    },
    {
      id: "15214547",
      rating: 4.5,
      name: "Mohamed",
      date: "07/8/2024",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, qui. Assumenda omnis accusantium iste eum repellat saep numquam ipsa incidu!",
      productId: "7",
      public: true,
    },
    {
      id: "17514545",
      rating: 3,
      name: "Salma",
      date: "10/6/2024",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. eum repellat saep numquam ipsa incidunt! ",
      productId: "1",
      public: true,
    },
    {
      id: "12541548",
      rating: 3,
      name: "Salma",
      date: "10/6/2024",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. eum repellat saep numquam ipsa incidunt! Expedita rem doloremque rerum vero aspernatur dolorum quidem tenetur? Nesciunt.",
      productId: "4",
      public: true,
    },
    {
      id: "15485485",
      rating: 4,
      name: "Salma",
      date: "10/6/2024",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. eum repellat saep numquam ipsa incidunt! Expedita rem doloremque rerum vero aspernatur dolorum quidem tenetur? Nesciunt.",
      productId: "11",
      public: true,
    },
    {
      id: "545645847",
      rating: 3,
      name: "Salma",
      date: "10/6/2024",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. eum repellat saep numquam ipsa incidunt! Expedita rem doloremque rerum vero aspernatur dolorum quidem tenetur? Nesciunt.",
      productId: "1",
      public: true,
    },
    {
      id: "215484869",
      rating: 2,
      name: "Ahmed",
      date: "07/31/2024",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      productId: "4",
      public: true,
    },
    {
      id: "54854882",
      rating: 4,
      name: "Mohamed",
      date: "07/8/2024",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, qui. Assumenda omnis accusantium iste eum repellat saep numquam ipsa incidunt! Expedita rem doloremque rerum vero aspernatur dolorum quidem tenetur? Nesciunt.",
      productId: "8",
      public: true,
    },
    {
      id: "2541658489",
      rating: 1,
      name: "Salma",
      date: "10/6/2024",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. eum repellat saep numquam ipsa incidunt! Expedita rem doloremque rerum vero aspernatur dolorum quidem tenetur? Nesciunt.",
      productId: "1",
      public: true,
    },
    {
      id: "0264864779",
      rating: 3,
      name: "Salma",
      date: "10/6/2024",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. eum repellat saep numquam ipsa incidunt! Expedita rem doloremque rerum vero aspernatur dolorum quidem tenetur? Nesciunt.",
      productId: "1",
      public: true,
    },
    {
      id: "15214545218",
      rating: 4,
      name: "Salma",
      date: "10/6/2024",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. eum repellat saep numquam ipsa incidunt! Expedita rem doloremque rerum vero aspernatur dolorum quidem tenetur? Nesciunt.",
      productId: "1",
      public: true,
    },
    {
      id: "1564854789",
      rating: 4.5,
      name: "Salma",
      date: "10/6/2024",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. eum repellat saep numquam ipsa incidunt! Expedita rem doloremque rerum vero aspernatur dolorum quidem tenetur? Nesciunt.",
      productId: "1",
      public: true,
    },
    {
      id: "898798",
      rating: 5,
      name: "Ahmed",
      date: "07/31/2024",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      productId: "1",
      public: true,
    },
    {
      id: "527745774",
      rating: 4,
      name: "Mohamed",
      date: "07/8/2024",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, qui. Assumenda omnis accusantium iste eum repellat saep numquam ipsa incidunt! Expedita rem doloremque rerum vero aspernatur dolorum quidem tenetur? Nesciunt.",
      productId: "1",
      public: true,
    },
    {
      id: "52537538",
      rating: 5,
      name: "Salma",
      date: "10/6/2024",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. eum repellat saep numquam ipsa incidunt! Expedita rem doloremque rerum vero aspernatur dolorum quidem tenetur? Nesciunt.",
      productId: "10",
      public: true,
    },
    {
      id: "554747574",
      rating: 3,
      name: "Salma",
      date: "10/6/2024",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. eum repellat saep numquam ipsa incidunt! Expedita rem doloremque rerum vero aspernatur dolorum quidem tenetur? Nesciunt.",
      productId: "3",
      public: true,
    },
    {
      id: "52504455",
      rating: 4,
      name: "Salma",
      date: "10/6/2024",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. eum repellat saep numquam ipsa incidunt! Expedita rem doloremque rerum vero aspernatur dolorum quidem tenetur? Nesciunt.",
      productId: "4",
      public: true,
    },
    {
      id: "5474745477",
      rating: 3,
      name: "Salma",
      date: "10/6/2024",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. eum repellat saep numquam ipsa incidunt! Expedita rem doloremque rerum vero aspernatur dolorum quidem tenetur? Nesciunt.",
      productId: "5",
      public: true,
    },
  ];

  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);

  const [switchStates, setSwitchStates] = useState(
    reviews.reduce((acc, review) => {
      acc[review.id] = review.public;
      return acc;
    }, {} as Record<string, boolean>)
  );

  const onConfirm = async () => {};

  const showMoreReviews = () => {
    setVisibleCount(visibleCount + 3);
  };

  const itemReviews =
    reviews && reviews.filter((el: any) => el.productId === id);

  const FormSchema = z.object({
    public: z.boolean().default(false),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      public: false,
    },
  });

  const handleSwitchChange = (reviewId: string, value: boolean) => {
    setSwitchStates({
      ...switchStates,
      [reviewId]: value,
    });

    toast.success("Visibility updated successfully");
  };

  return (
    <>
      {itemReviews.length > 0 ? (
        <>
          <div className="fadeIn grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 transition-all">
            {itemReviews.slice(0, visibleCount).map((item: any, index: any) => (
              <div
                key={index}
                className="fadeIn relative flex flex-col gap-2 bg-secondary p-2 rounded-md justify-center items-center"
              >
                <Rating
                  style={{ maxWidth: 180 }}
                  value={item.rating}
                  readOnly
                />
                <h5 className="text-md text-[#666] leading-loose dark:text-[#939db6] ">
                  {item.name}, {item.date}
                </h5>
                <p className="text-md leading-loose text-center">{item.text}</p>
                <div
                  className={`absolute top-3 right-2 transition-all z-50 flex justify-center items-center gap-2  flex-col `}
                >
                  <div className="flex justify-center   flex-col-reverse items-center gap-2">
                    <Button
                      type="button"
                      className={`border border-primary shadow-xl  bg-gradient-to-r from-orange-600 via-orange-700 to-orange-700 flex items-center gap-1 px-2 py-2 transition-all md:hover:scale-110`}
                      onClick={() => setOpen(true)}
                      size={`sm`}
                    >
                      <Trash2 size={18} />
                    </Button>
                  </div>
                </div>
                <div
                  className={`absolute top-3 left-4 transition-all z-50 flex justify-center items-center gap-2  flex-col `}
                >
                  <div
                    className={` text-white    gap-1 px-2 py-2  md:hover:scale-110 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 `}
                  >
                    {switchStates[item.id] ? (
                      <Eye size={20} className="text-green-500 fadeIn" />
                    ) : (
                      <EyeOff size={20} className="text-red-500 fadeIn" />
                    )}
                  </div>
                </div>
                <Form {...form}>
                  <form className="w-full my-6">
                    <div>
                      <div className="">
                        <FormField
                          name={`public-${item.id}`}
                          render={() => (
                            <FormItem className="flex items-center justify-center space-x-2 ">
                              <div className="flex items-center justify-center gap-4">
                                <FormLabel className="text-base">
                                  Private
                                </FormLabel>
                                <FormControl>
                                  <Switch
                                    checked={switchStates[item.id]}
                                    onCheckedChange={(value) =>
                                      handleSwitchChange(item.id, value)
                                    }
                                    className="data-[state=unchecked]:dark:bg-gray-500"
                                  />
                                </FormControl>
                                <FormLabel className="text-base ">
                                  Public
                                </FormLabel>
                              </div>
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                  </form>
                </Form>
              </div>
            ))}
          </div>
          {visibleCount < itemReviews.length && (
            <div className="flex justify-center my-4">
              <Button
                variant={`outline`}
                type="button"
                className={` w-full  border border-primary text-primary`}
                onClick={showMoreReviews}
              >
                View More
              </Button>
              <br />
              <br />
              <br />
            </div>
          )}{" "}
          <AlertModal
            isOpen={open}
            onClose={() => setOpen(false)}
            onConfirm={onConfirm}
            loading={loading}
          />
        </>
      ) : (
        <>
          <FaRankingStar
            size={120}
            className="text-muted-foreground flex justify-center  items-center mx-auto"
          />
          <p className="flex justify-center  items-center mx-auto text-[25px] my-12 font-bold text-muted-foreground">
            No Reviews yet
          </p>
          <br />
          <br />
        </>
      )}
    </>
  );
};

export default ReviewsCard;
