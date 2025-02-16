import { ABeeZee } from "next/font/google";
import GoogleAuthButton from "@/modules/components/user-auth/google-button";
import FormSeparator from "@/modules/components/user-auth/form-separator";
import Image from "next/image";
import bookIcon from "@/assets/book.png";
import notebookIcon from "@/assets/notebook.png";

interface UserAuthLayout {
  children: React.ReactNode;
}

const abeezee = ABeeZee({ subsets: ["latin"], weight: ["400"] });

export default function UserAuthLayout({ children }: UserAuthLayout) {
  return (
    <div className={`${abeezee.className} flex justify-center h-screen`}>
      <div className="flex items-center gap-4">
        <Image
          className="hidden lg:block pt-[26rem]"
          src={notebookIcon}
          alt="book"
          width={198}
          height={198}
        />
        <div className="flex flex-col items-center">
          <p className="text-xl">Get started with</p>
          <p className="text-[40px]">InkReads</p>
          {children}
        </div>
        <Image
          className="hidden lg:block pb-96"
          src={bookIcon}
          alt="book"
          width={209}
          height={171}
        />
      </div>
    </div>
  )
}