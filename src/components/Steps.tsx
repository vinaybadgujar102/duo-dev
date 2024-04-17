import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Home, Keyboard, ScreenShare } from "lucide-react";

const Steps = () => {
  const stepList = [
    {
      title: "Create a project room",
      description: "Start your collaboration",
      icon: <Home />,
    },
    {
      title: "Find your perfect coding partner",
      description: "Connect with fellow developers",
      icon: <Keyboard />,
    },
    {
      title: "Start coding together",
      description: "Collaborate with fellow developers",
      icon: <ScreenShare />,
    },
  ];
  return (
    <div className="flex flex-col gap-2 sm:flex-row justify-center">
      {stepList.map(({ title, description, icon }) => {
        return (
          <StepCard
            key={title}
            title={title}
            description={description}
            icon={icon}
          />
        );
      })}
    </div>
  );
};

export default Steps;

const StepCard = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) => {
  return (
    <div className="flex">
      <Card className="w-96 h-64 flex flex-col justify-center items-center">
        <CardHeader>
          <div className="self-center h-10 w-10 mb-2">{icon}</div>
          <CardTitle className="text-center text-2xl">{title}</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p>{description}</p>
        </CardContent>
      </Card>
    </div>
  );
};
