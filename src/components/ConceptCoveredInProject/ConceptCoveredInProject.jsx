import React from "react";

const ConceptCoveredInProject = () => {
  return (
    <section className="flex justify-start items-top my-10 h-[100vh]">
      <div className="md:block form-right hidden px-2">
        <h1 className="font-semibold text-4xl text-sky-400">
          Concept Covered in Project
        </h1>
        <ol
          className="text-sky-600 leading-8"
          style={{ listStyleType: "lower-roman" }}
        >
          <li>React Routing</li>
          <li>Modal Popup</li>
          <li>Create Portal</li>
          <li>Lazy Loading</li>
          <li>Tailwind CSS</li>
        </ol>
      </div>
    </section>
  );
};

export default ConceptCoveredInProject;
