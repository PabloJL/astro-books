"use client";
import { useTransition, useState } from "react";
import MyBooks from "../MyBooks";

import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "Skills",
    content: <MyBooks />,
  },
  {
    title: "Education",
    id: "Education",
    content: (
      <ul className="  pl-2">
        <li className=" list-disc">Bachelors in Computer Science at </li>
        <li>Instituto Tecnologico de Saltillo</li>
        <li>2017-2022</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "Experience",
    content: (
      <ul className=" list-disc pl-2">
        <li>Lennox International</li>
        <li>Hexaware Technologies</li>
        <li>Eviden</li>
      </ul>
    ),
  },
];

function ContentSection() {
  const [tab, setTab] = useState("Skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className=" text-white w-full h-full" id="about">
      <div className="flex mt-8 gap-3 justify-evenly ">
        <TabButton
          selectTab={() => handleTabChange("Skills")}
          active={tab === "Skills"}
        >
          Skills
        </TabButton>
        <TabButton
          selectTab={() => handleTabChange("Education")}
          active={tab === "Education"}
        >
          Education
        </TabButton>
        <TabButton
          selectTab={() => handleTabChange("Experience")}
          active={tab === "Experience"}
        >
          Experience
        </TabButton>
      </div>
      <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
    </section>
  );
}

export default ContentSection;
