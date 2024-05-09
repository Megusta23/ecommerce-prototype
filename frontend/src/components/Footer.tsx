import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <div className="flex items-center justify-between p-16 bg-slate-900 text-white">
      <h1>Footer</h1>
      <div className="flex">
        <div className="flex flex-col mr-24">
          <p className=" font-semibold">Company</p>
          <Link to="/">About</Link>
          <Link to="/">Contact us</Link>
          <Link to="/">Support</Link>
          <Link to="/">Carriers</Link>
        </div>
        <div className="flex flex-col mr-24">
          <p className=" font-semibold">Quick links</p>
          <Link to="/">Share location</Link>
          <Link to="/">Track your order</Link>
          <Link to="/">Size guide</Link>
          <Link to="/">FAQs</Link>
        </div>
        <div className="flex flex-col">
          <p className=" font-semibold">Legal</p>
          <Link to="/">Terms & conditions</Link>
          <Link to="/">Privacy Policy</Link>
        </div>
      </div>

      <div>
        <h4 className=" mb-4">Consider joining our newsletter</h4>
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input type="email" placeholder="Email" />
          <Button
            type="submit"
            className=" bg-slate-500 hover:bg-slate-700 hover:text-white"
          >
            Subscribe
          </Button>
        </div>
        <p className="text-sm leading-none mt-2 text-slate-500">
          Enter your email address
        </p>
      </div>
    </div>
  );
};

export default Footer;
