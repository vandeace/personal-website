"use client";

import React from "react";
import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineTitle,
  TimelineIcon,
  TimelineDescription,
  TimelineContent,
  TimelineTime,
} from "@/components/timeline/timeline";
import { TimelineElement } from "@/lib/data-timeline";

interface TimelineLayoutProps {
  items: TimelineElement[]; // Replace any[] with the actual type of items.
}
export const TimelineLayout = ({ items }: TimelineLayoutProps) => {
  return (
    <Timeline>
      {items.map((item, index) => (
        <TimelineItem>
          {index + 1 === items.length ? null : <TimelineConnector />}
          <TimelineHeader>
            <TimelineTime className="sm:hidden md:block">
              {item.date}
            </TimelineTime>
            <TimelineIcon />
            <TimelineTitle>{item.title}</TimelineTitle>
          </TimelineHeader>
          <TimelineContent>
            <TimelineDescription className="text-left">
              {item.description}
            </TimelineDescription>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};
