import React from "react";

const AboutMe: React.FC = () => {
  return (
    <section className={`flex flex-col bg-white py-20 text-3xl md:text-4xl`}>
      <div className="container mx-auto px-11">
        <p className="leading-tight max-w-5xl mx-auto text-4xl lg:text-4xl tracking-tight">
          <strong>I will help you ship better apps, faster.</strong> Lorem
          ipsum, dolor sit amet consectetur adipisicing elit. Molestiae
          necessitatibus ipsa repellat asperiores rem culpa ipsum quos, sed
          doloribus exercitationem quae quibusdam commodi tempora, nam eveniet
          earum dolor, placeat labore?
        </p>
      </div>
      <div className="container mx-auto px-11 text-center mt-28">
        <h2>About me</h2>
        <div className="mt-2">the &ldquo;spec-ops&rdquo;</div>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 lg:gap-20">
          <div>info</div>
          <div>info</div>
          <div>info</div>
          <div>info</div>
          <div>info</div>
          <div>info</div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
