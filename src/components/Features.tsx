import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Features = () => {
  const featureList = [
    {
      title: "Real-time Collaboration",
      description:
        "Collaborate with fellow developers in real-time, share your screen and code together on the same project.",
    },
    {
      title: "Instant Pairing",
      description:
        "Quickly find a development partner with the skills you need and start coding without delay.",
    },
    {
      title: "Community Driven",
      description:
        "Join a community of developers eager to share knowledge, experience, and best practices.",
    },
  ];
  return (
    <div className="flex flex-col gap-2 sm:flex-row">
      {featureList.map(({ title, description }) => {
        return (
          <FeatureCard key={title} title={title} description={description} />
        );
      })}
    </div>
  );
};

export default Features;

const FeatureCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{description}</p>
        </CardContent>
      </Card>
    </>
  );
};
