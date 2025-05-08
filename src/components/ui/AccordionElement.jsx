import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

export default function   AccordionElement({ children, title }) {
  return (
    <Accordion.Root type="single" collapsible className="w-full  px-3 md:max-w-xl">
      <Accordion.Item value="item-1" className="mb-4 border-b-2 border-slate-200">
        <Accordion.Header>
          <Accordion.Trigger className="group w-full text-left flex justify-between py-3 font-semibold hover:underline transition">
            {title}
            <ChevronDown className="transition-transform duration-200 group-data-[state=open]:rotate-180" />
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="text-gray-600">
          {children}
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
}
