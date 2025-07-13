import Link from "next/link";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { ShoppingCart, Heart, Search } from "lucide-react";
import { Separator } from "./ui/separator";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 border-b bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500">
              <span className="text-sm font-bold text-white">Z</span>
            </div>
            <Link
              href="/"
              className="text-center text-2xl font-bold text-green-500 hover:text-green-600"
            >
              commercezone
            </Link>
          </div>

          <div className="mx-8 max-w-2xl flex-1">
            <div className="relative">
              <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
              <Input
                placeholder="Search for products..."
                className="w-full rounded-full border-gray-300 py-3 pr-4 pl-10 focus:border-transparent focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Button
                variant="ghost"
                size="sm"
                className="hover:bg-green-50 hover:text-green-600"
              >
                <Heart className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="hover:bg-green-50 hover:text-green-600"
              >
                <ShoppingCart className="h-5 w-5" />
              </Button>
            </div>

            <Separator orientation="vertical" className="h-6" />

            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                className="text-green-600 hover:bg-green-50 hover:text-green-700"
              >
                Log In
              </Button>
              <Button className="rounded-md bg-green-500 px-6 py-2 font-medium text-white hover:bg-green-600">
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
