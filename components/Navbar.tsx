import Link from "next/link";
import { Button } from "./ui/button";
import { ModeToggle } from "./ModeToggle";
export default function Navbar() {
  return (
    <div className="border-b h-[10vh] border-gray-600 flex items-center px-2">
      <div className="flex justify-between w-full">
        <div className="flex gap-2">
          <Link href={"/"}>
            <Button variant={"outline"}>Home</Button>
          </Link>
          <Link href={"#projects"}>
            <Button variant={"outline"}>Projects</Button>
          </Link>
        </div>

        <div className="flex gap-2">
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}
