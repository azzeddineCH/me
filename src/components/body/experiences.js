import Experience from "./experince";

const experiences = [
  {
    company: "InstaDeep",
    position: "AI Research Engineer",
    period: "July 2020 - Present",
    place: "Tunisia",
    work: ["Working on DeepPCB™, AI based tool for PCB routing"],
    tools: ["Tensorflow", "Python", "Golang", "Docker"],
  },
  {
    company: "Systems Design Methods Laboratory (LMCS)",
    position: "Research Intern",
    period: "October 2019 - September 2020",
    place: "Algeria",
    work: [
      "Worked on a new hybrid fault-tolerant re-mapping approach using Deep Reinforcement Learning and Multi-objective optimisation techniques on Network on Chips.",
    ],
    tools: ["Pytorch", "Python"],
  },
  {
    company: "Zokadium",
    position: "Part-time Web Developer",
    period: "May 2019 - June 2020",
    place: "Algeria",
    work: ["Worked on an online driving license learning platform."],
    tools: ["Javascript", "ReactJS"],
  },
  {
    company:
      "Center for Research on Scientific and Technical Information (CERIST)",
    position: "Android Developer Intern",
    period: "June 2018",
    place: "Algeria",
    work: [
      "Worked on a virtual home voice assistant app that interacts with the user voice command to control home appliances using Bluetooth low energy.",
    ],
    tools: ["Android", "Bluetooth low energey", "DialogFlow "],
  },
];
export default function Experiences() {
  return (
    <div>
      <h1 className="text-3xl text-blue-700 font-bold mt-24 mb-4">
        Experience
      </h1>
      <hr />
      {experiences.map((e) => (
        <Experience data={e} />
      ))}
    </div>
  );
}
