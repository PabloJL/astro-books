import { useTransition, useState } from "react";
import ProfileSettings from "./ProfileSettings.jsx";
import SettingsButton from "./SettingsButton.jsx";

const TAB_DATA = [
  {
    title: "Account",
    id: "Account",
    content: <ProfileSettings />,
  },
  {
    title: "Preferences",
    id: "Preferences",
    content: <ProfileSettings />,
  },
  {
    title: "Privacy",
    id: "Privacy",
    content: <ProfileSettings />,
  },
  {
    title: "Help-Center",
    id: "Help-Center",
    content: <ProfileSettings />,
  },
];

function Options() {
  const [tab, setTab] = useState("Account");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section
      className="text-black dark:text-white w-full h-full flex flex-col md:flex-row"
      id="about"
    >
      <div className="flex flex-row md:flex-col  gap-3  justify-evenly md:p-5">
        <SettingsButton
          selectTab={() => handleTabChange("Account")}
          active={tab === "Account"}
        >
          Account
        </SettingsButton>
        <SettingsButton
          selectTab={() => handleTabChange("Preferences")}
          active={tab === "Preferences"}
        >
          Preferences
        </SettingsButton>
        <SettingsButton
          selectTab={() => handleTabChange("Privacy")}
          active={tab === "Privacy"}
        >
          Privacy
        </SettingsButton>
        <SettingsButton
          selectTab={() => handleTabChange("Help-Center")}
          active={tab === "Help-Center"}
        >
          Help
        </SettingsButton>
      </div>
      <div className="mt-8 w-full">
        {TAB_DATA.find((t) => t.id === tab)?.content}
      </div>
    </section>
  );
}

export default Options;
