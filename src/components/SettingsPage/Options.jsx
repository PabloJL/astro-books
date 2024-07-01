import { useTransition, useState } from "react";
import ProfileSettings from "./ProfileSettings.jsx";
import TabButton from "../UserProfile/TabButton.jsx";

const TAB_DATA = [
  {
    title: "Settings",
    id: "Settings",
    content: <ProfileSettings />,
  },
  //   {
  //     title: "Settings",
  //     id: "Settings",
  //     content: <ProfileSettings />,
  //   },
];

function Options() {
  const [tab, setTab] = useState("Current");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section
      className="text-black dark:text-white w-full h-full flex"
      id="about"
    >
      <div className="flex flex-col mt-8 gap-3 p-5">
        <TabButton
          selectTab={() => handleTabChange("Settings")}
          active={tab === "Settings"}
        >
          Settings
        </TabButton>
        <TabButton
          selectTab={() => handleTabChange("Settings")}
          active={tab === "Settings"}
        >
          Settings
        </TabButton>
      </div>
      <div className="mt-8 w-full">
        {TAB_DATA.find((t) => t.id === tab)?.content}
      </div>
    </section>
  );
}

export default Options;
