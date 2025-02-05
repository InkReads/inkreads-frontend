import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Roboto } from "next/font/google";
import Logo from "@/assets/logo.png";

const roboto = Roboto({
  subsets: ["latin"],  
  weight: "500",
});

export default function TopNavBar() {
  return (
    <header className={`${roboto.className} px-4 border-b-[0.5px]`}>
      <div className="flex w-full h-14 justify-between items-center">
        <nav className="flex ">
        <Link href="/" className="flex item-center">
          <Image src={Logo} alt="logo" width={45} height={10}/>
        </Link>
        {[
            {"Community": ["Stories", "Authors", "Users"]}, 
            {"Browse": ["Novels", "Light Novels", "Comics", "Fanfiction"]},
          ].map((item, key) => (
            <DropdownMenu key={key}>
              <DropdownMenuTrigger asChild className="focus:outline-none w-fit h-full text-inherit">
                <Button variant={"ghost"}>
                  {Object.keys(item)}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <div className="flex flex-col">
                  {Object.values(item)[0].map((subItem: string, key: string) => (
                    <Button 
                      variant="link" 
                      asChild key={key}
                      className="px-4 py-2 hover:bg-muted"
                    >
                      <Link
                        href="/"
                      >
                        {subItem}
                      </Link>
                    </Button>
                  ))}
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          ))}
        </nav>

        <div className="flex gap-4 items-center">
          <Button variant="link" asChild><Link href="/">Login</Link></Button>
          <Button variant="link" asChild><Link href="/">Sign Up</Link></Button>
        </div>
      </div>
    </header>
  );
}
