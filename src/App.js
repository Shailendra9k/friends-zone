import React from "react";
import "./App.css";

const App = () => <PersonList />;

const PersonList = () => {
  const people = [
    {
      img: 22,
      name: "Shailendra",
      job: "developer"
    },
    {
      img: 34,
      name: "Dhiraj",
      job: "product manager"
    },
    {
      img: 56,
      name: "Dilip",
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
const Person = props => {
  const { img, name, job } = props.person;
  const { children } = props;
  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
  return (
    <div className="person">
      <img src={url} alt="person" />
      <div>
        <h4>{name}</h4>
        <h4>{job}</h4>
        {children}
      </div>
    </div>
  );
};

export default App;
