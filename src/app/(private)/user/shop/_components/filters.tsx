"use client";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { productCategories, productSortOptions } from "@/constants";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { IProduct } from "@/interfaces";

interface FiltersProps {
  products: IProduct[];
}

function Filters({ products }: FiltersProps) {
  const [searchText, setSearchText] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [sortBy, setSortBy] = React.useState("");

  const [filteredProducts, setFilteredProducts] = React.useState<IProduct[]>([]);
const [showDropdown, setShowDropdown] = React.useState(false);
  const router = useRouter();

  // const onApply = () => {
  //   router.push(
  //     `/user/shop?category=${category}&searchText=${searchText}&sortBy=${sortBy}`
  //   );
  // };

  const onReset = () => {
    setSearchText("");
    setCategory("");
    setSortBy("");
    router.push(`/user/shop`);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-end">
      <div>
        <Label className="mb-1">Search</Label>
        <Input
          placeholder="Search products"
          value={searchText}
          //onChange={(e) => setSearchText(e.target.value)}
          onChange={(e) => {
      const value = e.target.value;
      setSearchText(value);

      if (value.length > 0) {
        const filtered = products.filter((product) =>
          product.name.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredProducts(filtered.slice(0, 5)); // show top 5
        setShowDropdown(true);
        
      } else {
        setShowDropdown(false);
      }
    }}
        />
        {showDropdown && filteredProducts.length > 0 && (
    <div className="absolute bg-white border w-full mt-1 rounded shadow-lg z-50">
      {filteredProducts.map((product) => (
        <div
          key={product.id}
          className="p-2 hover:bg-gray-100 cursor-pointer text-sm"
          onClick={() => {
            setSearchText(product.name);
            setShowDropdown(false);
            //router.push(`/user/products/${product.id}`);
            router.push(`/user/shop?searchText=${searchText}`);
          }}
        >
          {product.name}
        </div>
      ))}
    </div>
  )}
      </div>

      <div>
        <Label className="mb-1">Category</Label>
        <Select
        
          onValueChange={(value) => {
            setCategory(value);
            router.push(`/user/shop?category=${value}`);

          }}
          defaultValue={category}
        >
          <SelectTrigger className="border border-primary">
            <SelectValue placeholder="Select category" />
          </SelectTrigger>

          <SelectContent>
            {productCategories.map((category) => (
              <SelectItem value={category.value} key={category.value}>
                {category.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label className="mb-1">Sort By</Label>
        <Select
          onValueChange={(value) => {
            setSortBy(value);
            router.push(`/user/shop?sortBy=${value}`);
          }}
          defaultValue={sortBy}
        >
          <SelectTrigger className="border border-primary">
            <SelectValue placeholder="Select category" />
          </SelectTrigger>

          <SelectContent>
            {productSortOptions.map((option) => (
              <SelectItem value={option.value} key={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-2 gap-5">
        <Button className="border border-primary" variant={"outline"} onClick={onReset}>
          Reset
        </Button>
        {/* <Button onClick={onApply}>Apply</Button> */}
      </div>
    </div>
  );
}

export default Filters;