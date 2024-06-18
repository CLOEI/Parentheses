import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const SecondDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          Second Homework
          <ChevronDown />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Which student?</DialogTitle>
          <DialogDescription>
            Please give us a good score :D - Cendy
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-1">
          <Link href="/cendy">
            <DialogClose asChild>
              <Button className="block mx-auto w-full">Cendy - 2331156</Button>
            </DialogClose>
          </Link>
          <Link href="/beri">
            <DialogClose asChild>
              <Button className="block mx-auto w-full">
                Beri Mesyanti - 2331074
              </Button>
            </DialogClose>
          </Link>
          <Link href="/benaya">
            <DialogClose asChild>
              <Button className="block mx-auto w-full">
                Benaya Jakob Kerubim - 2331096
              </Button>
            </DialogClose>
          </Link>
          <Link href="/nicholas">
            <DialogClose asChild>
              <Button className="block mx-auto w-full">
                Nicholas Kisu Candra - 2331182
              </Button>
            </DialogClose>
          </Link>
          <Link href="/baihaqi">
            <DialogClose asChild>
              <Button className="block mx-auto w-full">
                Baihaqi Ridho Pahlevi - 2331185
              </Button>
            </DialogClose>
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  );
};
export default SecondDialog;
