import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { about_image } from "../assets/images";
import { Experiences } from "../constants/Experiences";
import { Skills } from "../constants/Skills";
import "react-vertical-timeline-component/style.min.css";
import { Cta } from "../components/Cta/Cta";

const About = () => {
  return (
    <section className=" max-container">
      <h1 className="head-text px-4">
        Hello, I&apos;m{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Robert Medina
        </span>{" "}
        👋
      </h1>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:max-w-screen-xl">
        <div className="w-full h-[420px] flex items-center justify-center">
          <div className="w-[275px] h-[340px] bg-gradient-to-r from-[#00c6ff] to-[#0072ff] rounded-md relative">
            <img
              className="w-full h-full rounded-lg absolute -left-4 -top-4 object-cover drop-shadow-2xl"
              src={about_image}
              alt="photo_me"
            />
          </div>
        </div>
        <div className="w-full h-320 flex flex-col items-center justify-center text-slate-500">
          <p className="text-left px-4">
            Experienced Full Stack Developer with a strong background in dynamic
            web project development. Proficient in all stages of the development
            cycle, with expertise in utilizing frameworks such as React.js and
            Express.js to create robust and efficient web applications. Skilled
            in front-end and back-end technologies, including JavaScript,
            Node.js, HTML/CSS, and SQL. Committed to continuous learning and
            staying updated with the latest industry trends and best practices.
          </p>
        </div>
        <div className="w-full h-320 flex flex-col items-center justify-center text-slate-500 px-4">
          <p className="text-left">
            With 4 years of expertise in React.js, I bring in-depth knowledge
            and hands-on experience in developing interactive user interfaces
            and scalable web applications. My proficiency in React.js allows me
            to architect complex frontend systems and integrate them seamlessly
            with backend technologies, ensuring optimal performance and user
            experience.
          </p>
        </div>
        <div className="w-full h-320 flex flex-col items-center text-slate-500 px-4">
          <p className="text-left">
            Passionate about extreme sports and video games, I leverage my
            creativity and technical knowledge to create engaging video content
            that combines code explanations with gaming experiences. Seeking
            opportunities to contribute to innovative projects and collaborate
            with like-minded professionals in the tech industry.
          </p>
        </div>
      </div>
      <div className="p-4 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>
        <div className="mt-16 flex flex-wrap gap-8 ">
          {Skills.map((skill, index) => (
            <div key={index} className="block-container w-20 h-20">
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="py-16">
        <h3 className="subhead-text">Work Experience</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            I&apos;ve worked with all sort companies, leveling up my skills and
            teaming up with smart people. Here&apos;s the rundown:
          </p>
        </div>
        <div className="mt-12 flex">
          <VerticalTimeline>
            {Experiences.map((experience) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className="w-[60%] h-[60%] object-contain"
                    />
                  </div>
                }
                iconStyle={{ background: experience.iconBg }}
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <h3 className="text-black text-xl font-poppins">
                  {experience.title}
                </h3>
                <p
                  className="text-black-500 font-medium font-base"
                  style={{ margin: 0 }}
                >
                  {experience.company_name}
                </p>
                <p className="text-black-500/50 text-sm" style={{ margin: 0 }}>
                  {experience.country}
                </p>
                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className="text-black-500/50 font-normal pl-1 text-sm"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
      <hr className="border-slate-200" />
      <Cta />
    </section>
  );
};

export default About;
