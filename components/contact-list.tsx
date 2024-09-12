import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faFileAlt } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faGithub,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import MotionList from "./motion-list";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
type Contact = {
  name: string;
  className: string;
  href: string;
  icon: any;
};
const contacts: Contact[] = [
  {
    name: "Email",
    className: "bg-yellow-500 hover:bg-yellow-600",
    href: "mailto:mjafarashsiddiq@gmail.com",
    icon: faEnvelope,
  },
  {
    name: "LinkedIn",
    className: "bg-blue-600 hover:bg-gray-800/90",
    href: "https://www.linkedin.com/in/muhammad-jafar-ash-siddiq/",
    icon: faLinkedin,
  },
  {
    name: "Resume",
    className: "bg-black hover:bg-gray-800/90",
    href: "https://drive.google.com/file/d/1jQENlZvsuc5qiAlNfPH0lJdp91lYbJ_5/view?usp=sharing",
    icon: faFileAlt,
  },
  {
    name: "Github",
    className: "bg-black hover:bg-gray-800/90",
    href: "https://github.com/vandeace",
    icon: faGithub,
  },
  {
    name: "X",
    className: "bg-black hover:bg-gray-800/90",
    href: "https://twitter.com/VirgaceAce",
    icon: faXTwitter,
  },

  {
    name: "Instagram",
    className: "bg-pink-500 hover:bg-pink-600",
    href: "https://instagram.com/mjafarashs",
    icon: faInstagram,
  },
];
export default function ContactList({
  delayOffset = 0,
  showWhenInView = true,
}: {
  delayOffset?: number;
  showWhenInView?: boolean;
}) {
  return (
    <MotionList delayOffset={delayOffset} showWhenInView={showWhenInView}>
      {contacts.map((contact, index) => (
        <TooltipProvider delayDuration={0} key={index}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                className={cn(
                  "flex h-11 w-11 items-center justify-center rounded-full p-3 md:h-12 md:w-12 bg",
                  contact.className
                )}
                asChild
                aria-label={contact.name}
              >
                <a
                  href={contact.href}
                  target="_blank"
                  aria-label={contact.name}
                >
                  <FontAwesomeIcon icon={contact.icon} className="w-fit" />
                </a>
              </Button>
            </TooltipTrigger>
            <TooltipContent sideOffset={6}>
              <p>{contact.name}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ))}
    </MotionList>
  );
}
