import React from "react";
import Person from "./Person";

const PersonList = () => {
  const people = [
    {
      img: 22,
      name: "Shailendra",
      job: "developer"
    },
    {
      img: 34,
      name: "John",
      job: "product manager"
    },
    {
      img: 56,
      name: "Bob",
      job: "designer"
    }
  ];
  return (
    <section>
      <Person person={people[0]}>
        A Frontend developer working on various technologies mainly ReactJs as
        major framework. Along with it working on backend technologies like
        NodeJs, MongoDB and Express.js.
      </Person>
      ;
      <Person person={people[1]} />;
      <Person person={people[2]} />;
    </section>
  );
};
export default PersonList;
