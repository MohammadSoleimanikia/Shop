import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function MobileMenu() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="lg:hidden p-2">
          <Menu size={28} />
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />
        <Dialog.Content className="fixed top-0 left-0 w-3/4 h-full bg-white shadow-lg p-6 flex flex-col gap-6">
          <Dialog.Close className="self-end">
            <X size={28} />
          </Dialog.Close>

          <NavLink to="/" className="text-lg font-semibold">Home</NavLink>
          <NavLink to="/products" className="text-lg font-semibold">Products</NavLink>
          <NavLink to="/aboutus" className="text-lg font-semibold">About</NavLink>
          <NavLink to="/contact" className="text-lg font-semibold">Contact</NavLink>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}