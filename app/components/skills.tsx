import dockerIcon from "@/assets/icons/docker.png";
import ExpoIcon from "@/assets/icons/expo.png";
import expressjsIcon from "@/assets/icons/express-js.png";
import gitIcon from "@/assets/icons/git.png";
import githubActionsIcon from "@/assets/icons/github-actions.png";
import graphql from "@/assets/icons/graphql.svg";
import html5Icon from "@/assets/icons/html5.png";
import javascriptIcon from "@/assets/icons/javascript.png";
import macosIcon from "@/assets/icons/macos.png";
import nextjsIcon from "@/assets/icons/next-js.png";
import nodejsIcon from "@/assets/icons/nodejs.png";
import pnpmIcon from "@/assets/icons/pnpm.png";
import postgresIcon from "@/assets/icons/postgres.png";
import postmanIcon from "@/assets/icons/postman.svg";
import prettierIcon from "@/assets/icons/prettier.png";
import prismaIcon from "@/assets/icons/prisma.png";
import reactHookForm from "@/assets/icons/react-hook-form.png";
import reactQuery from "@/assets/icons/react-query.svg";
import reactIcon from "@/assets/icons/react.png";
import shadcnuiIcon from "@/assets/icons/shadcn-ui.png";
import tailwindcssIcon from "@/assets/icons/tailwindcss.png";
import typescriptIcon from "@/assets/icons/typescript.png";
import ubuntuIcon from "@/assets/icons/ubuntu.svg";
import vscodeIcon from "@/assets/icons/vscode.png";
import cypress from "@/assets/icons/cypress.png";
import browserstack from "@/assets/icons/browserstack.svg";
import warpIcon from "@/assets/icons/warp.webp";
import zod from "@/assets/icons/zod.png";
import MotionDiv from "@/components/motion-div";
import MotionList from "@/components/motion-list";
import Image from "next/image";

export default function Skills() {
  const data = [
    {
      title: "Web Development",
      skills: [
        {
          name: "React.js",
          icon: reactIcon,
        },
        {
          name: "Next.js",
          icon: nextjsIcon,
        },
        {
          name: "TypeScript",
          icon: typescriptIcon,
        },
        {
          name: "JavaScript",
          icon: javascriptIcon,
        },
        {
          name: "HTML5",
          icon: html5Icon,
        },
        {
          name: "Tailwind CSS",
          icon: tailwindcssIcon,
        },

        {
          name: "shadcn/ui",
          icon: shadcnuiIcon,
        },
        {
          name: "PNPM",
          icon: pnpmIcon,
        },
        {
          name: "Prettier",
          icon: prettierIcon,
        },
        {
          name: "React Hook Form",
          icon: reactHookForm,
        },
        {
          name: "React Query",
          icon: reactQuery,
        },
        {
          name: "Graphql",
          icon: graphql,
        },
        {
          name: "Zod",
          icon: zod,
        },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        {
          name: "Express.js",
          icon: expressjsIcon,
        },
        {
          name: "Node.js",
          icon: nodejsIcon,
        },
        {
          name: "Prisma ORM",
          icon: prismaIcon,
        },
        {
          name: "PostgreSQL",
          icon: postgresIcon,
        },
      ],
    },
    {
      title: "Mobile Development",
      skills: [
        {
          name: "React Native",
          icon: reactIcon,
        },
        {
          name: "Expo",
          icon: ExpoIcon,
        },
      ],
    },
    {
      title: "DevOps",
      skills: [
        {
          name: "Git",
          icon: gitIcon,
        },
        {
          name: "GitHub Actions",
          icon: githubActionsIcon,
        },
        {
          name: "Docker",
          icon: dockerIcon,
        },
        {
          name: "Ubuntu",
          icon: ubuntuIcon,
        },
      ],
    },
    {
      title: "Languages",
      skills: [
        {
          name: "TypeScript",
          icon: typescriptIcon,
        },
        {
          name: "JavaScript",
          icon: javascriptIcon,
        },
      ],
    },
    {
      title: "Tools & Environment",
      skills: [
        {
          name: "macOS",
          icon: macosIcon,
        },
        {
          name: "VS Code",
          icon: vscodeIcon,
        },
        {
          name: "Warp Terminal",
          icon: warpIcon,
        },
        {
          name: "Postman",
          icon: postmanIcon,
        },
        {
          name: "Cypress",
          icon: cypress,
        },
        {
          name: "Browser Stack",
          icon: browserstack,
        },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="flex w-full flex-col items-center text-center"
    >
      <MotionDiv>
        <h2 className="mb-4">My Skills</h2>
      </MotionDiv>
      <div className="flex flex-wrap justify-center">
        {data.map((item, index) => (
          <MotionDiv key={index}>
            <div className="mb-6 md:px-2">
              <h3>{item.title}</h3>
              <MotionList className="flex flex-wrap justify-evenly gap-0 md:gap-5 md:px-6 lg:justify-center">
                {item.skills.map((skill) => (
                  <SkillCard key={skill.name} {...skill} />
                ))}
              </MotionList>
            </div>
          </MotionDiv>
        ))}
      </div>
    </section>
  );
}

function SkillCard({ icon, name }: { icon: string; name: string }) {
  return (
    <div className="group rounded-xl border-none p-5 text-center shadow-none transition-all duration-200 ease-linear hover:scale-110 hover:drop-shadow-xl">
      <div className="flex flex-col items-center gap-2">
        <div className="flex h-16 w-16 items-center justify-center">
          <Image src={icon} alt={name} priority />
        </div>
        <p>{name}</p>
      </div>
    </div>
  );
}
