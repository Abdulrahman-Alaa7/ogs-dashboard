"use client";
import React, { FC, useState } from "react";
import Image from "next/image";
import { Button } from "../../../components/ui/button";
import { Pencil, Star, Trash2 } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "../../../components/ui/carousel";
import { AlertModal } from "../alert-modal";
import Link from "next/link";
import { DotButton, useDotButton } from "../EmblaCarouselDotButton";
import { Badge } from "@/components/ui/badge";

type Props = {
  item: any;
};

const ProductComponent: FC<Props> = ({ item }) => {
  const [api, setApi] = useState<CarouselApi>();
  const { selectedIndex, onDotButtonClick } = useDotButton(api);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const onConfirm = async () => {};

  const calculateDiscountPercentage = (price: any, estimatedPrice: any) => {
    const discountAmount = price - estimatedPrice;
    const discountPercentage = (discountAmount / price) * 100;
    return Math.round(discountPercentage);
  };

  return (
    <>
      <div className="mb-12">
        <div
          className={`relative bg-gradient-to-b from-orange-500 to-orange-600 shadow py-2 rounded-3xl transition-all md:hover:scale-105 `}
        >
          {item.moreImages ? (
            <Carousel className="relative" setApi={setApi}>
              <CarouselContent>
                <CarouselItem>
                  <div className="relative mx-auto w-full h-auto min-h-[24rem] transition-all flex justify-center items-center flex-col rounded-3xl font-semibold text-[15px] bg-transparent">
                    <Image
                      src={item.mainImage}
                      alt={item.name}
                      fill
                      className="absolute inset-0 object-contain rounded-t-3xl   z-10 cursor-grab"
                    />
                  </div>
                </CarouselItem>
                {item.moreImages.map((el: any, elIndex: number) => (
                  <CarouselItem key={elIndex}>
                    <div className="relative mx-auto w-full h-auto min-h-[24rem] transition-all p-[7px] flex justify-center items-center flex-col rounded-3xl font-semibold text-[15px] bg-transparent">
                      <Image
                        src={el}
                        alt={item.name}
                        fill
                        className="absolute inset-0 object-contain  rounded-t-3xl  z-10 cursor-grab"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-2 " />
              <CarouselNext className="absolute right-2 " />
              <div
                className={`mt-2 !flex justify-center items-center gap-2 mx-auto`}
              >
                <DotButton
                  onClick={() => onDotButtonClick(0)}
                  className={`${
                    0 === selectedIndex
                      ? "!bg-primary !w-4 !h-2 border border-[#fff] shadow rounded-full cursor-pointer scale-150 transition-all duration-300"
                      : "!w-2 !h-2 bg-white  shadow rounded-full cursor-pointer transition-all duration-300 hover:scale-150"
                  }`}
                />
                {item.moreImages.map((_: any, elIndex: number) => (
                  <DotButton
                    key={`dot-${elIndex + 1}`}
                    onClick={() => onDotButtonClick(elIndex + 1)}
                    className={`${
                      elIndex + 1 === selectedIndex
                        ? "!bg-primary !w-4 !h-2 border border-[#fff]  shadow rounded-full cursor-pointer scale-150 transition-all duration-300"
                        : "!w-2 !h-2 bg-white  border border-[#fff] shadow rounded-full cursor-pointer transition-all duration-300 hover:scale-150"
                    }`}
                  />
                ))}
              </div>
            </Carousel>
          ) : (
            <div className="relative mx-auto !mb-1  w-full h-auto min-h-[24rem] transition-all p-[7px] flex justify-center items-center flex-col rounded-3xl font-semibold text-[15px] bg-transparent">
              <Image
                src={item.mainImage}
                alt={item.name}
                fill
                className="absolute inset-0 object-contain rounded-t-3xl  z-10 "
              />
            </div>
          )}

          <div className="p-4 flex flex-col items-center justify-center">
            <h3 className="text-lg font-semibold text-white py-2 px-1 uppercase">
              {item.name}
            </h3>

            {item.estimatedPrice > 0 ? (
              <div className="prices flex justify-center items-center gap-3 mt-1 mb-2">
                <span className="font-semibold block line-through text-white/70">
                  LE {item.price}
                </span>
                <Badge
                  variant="secondary"
                  className="font-bold text-[16px] px-3"
                >
                  LE {item.estimatedPrice}
                </Badge>
                <Badge
                  variant="default"
                  className="text-white font-bold bg-orange-500 "
                >
                  {calculateDiscountPercentage(item.price, item.estimatedPrice)}
                  %
                </Badge>
              </div>
            ) : (
              <div className="prices flex justify-center items-center gap-3 my-3 ">
                <Badge
                  variant="secondary"
                  className="font-bold text-[16px] px-3 "
                >
                  LE {item.price}
                </Badge>
              </div>
            )}

            <Link
              href={`reviews/${item.id}`}
              className="h-10 px-4 py-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground gap-2 mt-3 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
            >
              <Badge variant={`default`}>7</Badge>
              <Star />
              Reviews
            </Link>

            <div
              className={`absolute top-3 right-4 transition-all z-50 flex justify-center items-center gap-2  flex-col `}
            >
              <Link
                href={`/dashboard/products/${item.id}`}
                className={` text-white border border-primary shadow-xl bg-gradient-to-r from-orange-600 via-orange-700 to-orange-700  gap-1 px-2 py-2  md:hover:scale-110 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 `}
              >
                <Pencil size={20} />
              </Link>
              <Button
                type="button"
                className={`border border-primary shadow-xl  bg-gradient-to-r from-orange-600 via-orange-700 to-orange-700 flex items-center gap-1 px-2 py-2 transition-all md:hover:scale-110`}
                onClick={() => setOpen(true)}
              >
                <Trash2 size={20} />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onConfirm}
        loading={loading}
      />
    </>
  );
};

export default ProductComponent;
