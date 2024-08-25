"use client";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "../../../components/ui/button";
import ProductComponent from "./ProductComponent";
import { HeadPage } from "../../../components/ui/HeadPage";
import { Plus } from "lucide-react";
import { Separator } from "../../../components/ui/separator";
import Link from "next/link";
import BreadCrumb from "../Breadcrumb";
export const products: any = [
  {
    id: "1",
    name: "Product 1",
    description:
      "Description for Product 1 Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available",
    mainImage: "/assets/product-1.png",
    moreImages: ["/assets/product.png", "/assets/product.jpg"],
    price: 155,
    estimatedPrice: 77,
    soldOut: true,
    aiGen: true,
    category: "general",
  },
  {
    id: "2",
    name: "Product 2",
    description: "Description for Product 2",
    mainImage: "/assets/product-1.png",
    price: 150,
    estimatedPrice: 0,
    soldOut: false,
    aiGen: false,
    category: "general",
  },
  {
    id: "3",
    name: "Product 3",
    description: "Description for Product 3",
    mainImage: "/assets/product-1.png",
    moreImages: ["/assets/product.png", "/assets/product.jpg"],
    price: 150,
    estimatedPrice: 120,
    soldOut: false,
    aiGen: true,
    category: "general",
  },
  {
    id: "4",
    name: "Product 4",
    description: "Description for Product 4",
    mainImage: "/assets/product-1.png",
    moreImages: ["/assets/product.png", "/assets/product.jpg"],
    price: 150,
    estimatedPrice: 120,
    soldOut: true,
    aiGen: true,
    category: "general",
  },
  {
    id: "5",
    name: "Product 5",
    description: "Description for Product 5",
    mainImage: "/assets/product-1.png",
    moreImages: ["/assets/product.png", "/assets/product.jpg"],
    price: 150,
    estimatedPrice: 120,
    soldOut: false,
    aiGen: false,
    category: "general",
  },
  {
    id: "6",
    name: "Product 6",
    description: "Description for Product 6",
    mainImage: "/assets/product-1.png",
    moreImages: ["/assets/product.png", "/assets/product.jpg"],
    price: 150,
    estimatedPrice: 120,
    soldOut: true,
    aiGen: true,
    category: "general",
  },
  {
    id: "7",
    name: "Product 7",
    description: "Description for Product 7",
    mainImage: "/assets/product-1.png",
    moreImages: ["/assets/product.png", "/assets/product.jpg"],
    price: 120,
    estimatedPrice: 100,
    soldOut: false,
    aiGen: false,
    category: "general",
  },
  {
    id: "8",
    name: "Product 8",
    description: "Description for Product 8",
    mainImage: "/assets/product-1.png",
    moreImages: ["/assets/product.png", "/assets/product.jpg"],
    price: 160,
    estimatedPrice: 140,
    soldOut: false,
    aiGen: true,
    category: "general",
  },
  {
    id: "9",
    name: "Product 9",
    description: "Description for Product 9",
    mainImage: "/assets/product-1.png",
    moreImages: ["/assets/product.png", "/assets/product.jpg"],
    price: 150,
    estimatedPrice: 100,
    soldOut: false,
    aiGen: true,
    category: "general",
  },
  {
    id: "10",
    name: "Product 10",
    description: "Description for Product 10",
    mainImage: "/assets/product-1.png",
    moreImages: ["/assets/product.png", "/assets/product.jpg"],
    price: 150,
    estimatedPrice: 50,
    soldOut: false,
    aiGen: true,
    category: "general",
  },
  {
    id: "11",
    name: "Product 11",
    description:
      "Description for Product 11 Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available",
    mainImage: "/assets/product-1.png",
    moreImages: ["/assets/product.png", "/assets/product.jpg"],
    price: 155,
    estimatedPrice: 77,
    soldOut: true,
    aiGen: true,
    category: "general",
  },
  {
    id: "12",
    name: "Product 12",
    description: "Description for Product 12",
    mainImage: "/assets/product-1.png",
    price: 150,
    estimatedPrice: 0,
    soldOut: false,
    aiGen: false,
    category: "general",
  },
  {
    id: "13",
    name: "Product 13",
    description: "Description for Product 13",
    mainImage: "/assets/product-1.png",
    moreImages: ["/assets/product.png", "/assets/product.jpg"],
    price: 150,
    estimatedPrice: 120,
    soldOut: false,
    aiGen: true,
    category: "general",
  },
  {
    id: "14",
    name: "Product 14",
    description: "Description for Product 14",
    mainImage: "/assets/product-1.png",
    moreImages: ["/assets/product.png", "/assets/product.jpg"],
    price: 150,
    estimatedPrice: 120,
    soldOut: true,
    aiGen: true,
    category: "general",
  },
  {
    id: "15",
    name: "Product 15",
    description: "Description for Product 15",
    mainImage: "/assets/product-1.png",
    moreImages: ["/assets/product.png", "/assets/product.jpg"],
    price: 150,
    estimatedPrice: 120,
    soldOut: false,
    aiGen: false,
    category: "general",
  },
  {
    id: "16",
    name: "Product 16",
    description: "Description for Product 16",
    mainImage: "/assets/product-1.png",
    moreImages: ["/assets/product.png", "/assets/product.jpg"],
    price: 150,
    estimatedPrice: 120,
    soldOut: true,
    aiGen: true,
    category: "general",
  },
  {
    id: "17",
    name: "Product 17",
    description: "Description for Product 17",
    mainImage: "/assets/product-1.png",
    moreImages: ["/assets/product.png", "/assets/product.jpg"],
    price: 120,
    estimatedPrice: 100,
    soldOut: false,
    aiGen: false,
    category: "general",
  },
];

const breadcrumbItems = [{ title: "Products", link: "/dashboard/products" }];

const ProductsList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;
  const totalPages = Math.ceil(products.length / productsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = products.slice(startIndex, endIndex);
  const mainRef = useRef<HTMLElement>(null); // Create a ref for the main element

  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [currentPage]);

  return (
    <main ref={mainRef}>
      <div className="fadeIn flex-1 space-y-4  p-4 md:p-8 pt-6">
        <BreadCrumb items={breadcrumbItems} />
        <div className="flex items-start justify-between">
          <HeadPage title={`Products`} description="Mange products from here" />
          <Link
            href={`/dashboard/products/new`}
            className={`h-10 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 `}
          >
            <Plus size={20} className="mr-2" /> Add New
          </Link>
        </div>
        <Separator />
        <div className="fadeIn">
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 transition-all`}
          >
            {currentProducts.map((product: any) => (
              <div className="fadeIn" key={product.id}>
                <ProductComponent item={product} />
              </div>
            ))}
          </div>
          {products.length > 10 && (
            <div
              className={`flex justify-between items-center  my-3 md:w-[50%] w-full mx-auto `}
            >
              <Button
                variant="default"
                type="button"
                onClick={handlePrevPage}
                disabled={currentPage === 1}
              >
                Prev
              </Button>
              <div
                className={` bg- border shadow text-black dark:text-white p-2 rounded-3xl font-semibold`}
              >
                {currentPage} / {totalPages}
              </div>
              <Button
                variant="default"
                type="button"
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
              >
                Next
              </Button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default ProductsList;
