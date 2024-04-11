import React from "react";
import CallToAction from "../components/CallToAction.jsx";

export default function Projects() {
  return (
    <div className="min-h-screen max-w-2xl mx-auto flex justify-center items-center flex-col gap-6 p-3">
      <h1 className="text-3xl font-semibold">Projects</h1>
      <p className="text-md text-gray-500">
        "Welcome to the Projects page of Aditya's Blog, your gateway to hands-on
        learning and practical application of technology. Here, you'll discover
        a curated collection of innovative projects spanning various domains,
        from web development to artificial intelligence. Each project is
        carefully selected to provide valuable insights, real-world challenges,
        and opportunities for experimentation. Whether you're a seasoned
        developer looking to expand your skills or a newcomer eager to dive into
        the world of coding, our projects offer a rich learning experience
        tailored to your needs. Explore, experiment, and embark on your coding
        journey with confidence as you tackle exciting projects and unlock your
        full potential with Aditya's Blog."
      </p>
      <CallToAction />
    </div>
  );
}
