import MotionDiv from "@/components/motion-div";
import { TimelineLayout } from "@/components/timeline/timeline-layout";
import { timelineData } from "@/lib/data-timeline";

export default function Timeline() {
  return (
    <section
      className="my-4 flex flex-col items-center gap-5 text-center md:mt-8"
      id="work"
    >
      <MotionDiv>
        <h2 className="mb-4">My Work Experience</h2>
      </MotionDiv>
      <MotionDiv>
        <TimelineLayout items={timelineData} />
      </MotionDiv>
    </section>
  );
}
