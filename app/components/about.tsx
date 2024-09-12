import CoolPortraitCard from "@/components/cool-portrait-card";
import MotionDiv from "@/components/motion-div";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto my-16 flex flex-col items-center justify-center gap-4 px-2 md:my-20  md:max-w-full lg:flex-row lg:items-start lg:gap-16 mb-6"
    >
      <div className="order-2 lg:order-1 lg:w-2/3">
        <MotionDiv delayOffset={0.2}>
          <h2 className="mb-3 w-full text-center md:mb-6">About Me</h2>
        </MotionDiv>
        <article className="flex flex-col gap-4">
          <MotionDiv delayOffset={0.4}>
            <p>
              Hello, I'm Muhammad Jafar Ash Siddiq a passionate Fullstack
              Developer based in Indonesia 🇮🇩. With a strong foundation in
              Computer Science and over four years of professional experience, I
              specialize in creating engaging and efficient web applications.
            </p>
          </MotionDiv>
          <MotionDiv delayOffset={0.5}>
            <p>
              As a technology enthusiast, I thrive on building dynamic user
              interfaces and robust frontend architectures. My expertise lies in
              TypeScript, React, Node.js and Next.js, and I'm always excited to
              explore new frameworks and design patterns that push the
              boundaries of web development. I believe in the power of clean,
              modular code to create scalable and maintainable applications that
              make a real difference in users' lives.
            </p>
          </MotionDiv>
          <MotionDiv delayOffset={0.5}>
            <p>
              Beyond the world of coding, I find balance and inspiration in
              running 🏃🏻, which keeps me energized, and playing games 🎮, which
              sharpens my problem-solving skills and intuition. This combination
              of technical expertise and diverse interests fuels my creativity
              and approach to tackling complex development challenges, allowing
              me to bring a unique perspective to every project I undertake.
            </p>
          </MotionDiv>
        </article>
      </div>
      <div className="lg:order-2 lg:w-1/3">
        <MotionDiv delayOffset={0.4}>
          <CoolPortraitCard className="hidden lg:block">
            <img
              src="/photo.jpeg"
              alt="photo"
              className="w-[300px] rounded-xl transition-all "
            />
          </CoolPortraitCard>
        </MotionDiv>
        <MotionDiv delayOffset={0.4}>
          <img
            src="/photo.jpeg"
            alt="photo"
            className="w-[300px] rounded-xl transition-all hover:rotate-3 hover:scale-105 lg:hidden"
          />
        </MotionDiv>
      </div>
    </section>
  );
}
