import React from "react";
import Timeline from "./Timeline";

function Education() {
  return (
    <div className="hero my-8 bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Education</h1>
          <p className="py-6">
            My academic journey has been a foundation for my passion in
            technology and development. From building strong fundamentals in
            school to completing my B.Tech in Information Technology, each step
            has shaped my skills, discipline, and curiosity. Here’s a glimpse of
            my educational path.
          </p>
          <Timeline />
        </div>
      </div>
    </div>
  );
}

export default Education;
