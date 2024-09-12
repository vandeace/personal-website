export const timelineData = [
  {
    id: 1,
    title: "PT Triple One Global",
    date: "2020-08-01",
    description:
      "My First experience as frontend developer and work in startup, agile workflow and build app for client using react for web and react native for android",
  },
  {
    id: 2,
    title: "PT Collexe Consulting",
    date: "2021-02-01",
    description:
      "Work Remotely from Indonesia, Build an API with high-quality and reusable code using Node.js and Mysql for Database",
  },
  {
    id: 3,
    title: "PT ILCS",
    date: "2021-07-01",
    description:
      "Building an CMS for Pelindo Port that handle users,ship, ship schedule",
  },
  {
    id: 4,
    title: "PT Telkom (Tribe EWZ)",
    date: "2022-02-01",
    description: "Build an Application for show sales data for internal telkom",
  },
  {
    id: 5,
    title: "Govtech LKPP (Tribe GTP)",
    date: "2023-01-01",
    description:
      "Build an e-commerce for government e-procurement using nextjs 14 and typescript,enhance web perform using SSR and build various input with various validation using react hook form and zod",
  },
];

export type TimelineData = (typeof timelineData)[number];

export interface TimelineElement {
  id: number;
  title: string;
  date: string;
  description: string;
}
