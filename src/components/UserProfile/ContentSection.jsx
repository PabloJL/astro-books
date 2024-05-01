"use client";
import { useTransition, useState } from "react";
import MyBooks from "../MyBooks";

import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Current",
    id: "Current",
    content: <MyBooks />,
  },
  {
    title: "Books",
    id: "Books",
    content: <MyBooks />,
  },
  {
    title: "Reviews",
    id: "Reviews",
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
  const [tab, setTab] = useState("Current");
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
          selectTab={() => handleTabChange("Current")}
          active={tab === "Current"}
        >
          Current
        </TabButton>
        <TabButton
          selectTab={() => handleTabChange("Books")}
          active={tab === "Books"}
        >
          Books
        </TabButton>
        <TabButton
          selectTab={() => handleTabChange("Reviews")}
          active={tab === "Reviews"}
        >
          Reviews
        </TabButton>
      </div>
      <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
    </section>
  );
}

export default ContentSection;
