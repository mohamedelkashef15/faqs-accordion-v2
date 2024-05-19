import { useState } from "react";
import "./global.scss";

interface IProps {
  title: string;
  text: string;
  description?: string;
}

const data = [
  {
    title: "What is Frontend Mentor, and how will it help me?",
    text: "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
  },

  {
    title: "Is Frontend Mentor free?",
    text: "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
  },
  {
    title: "Can I use Frontend Mentor projects in my portfolio?",
    text: "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
  },
  {
    title: "How can I get help if I'm stuck on a challenge?",
    text: "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
  },
];

function App() {
  return (
    <main>
      <section id="accordion">
        <div className="container">
          <Card />
        </div>
      </section>
    </main>
  );
}

function Card() {
  return (
    <div className="card">
      <h1>
        <img src="images/icon-star.svg" alt="icon star" />
        FAQs
      </h1>
      {data.map((ele) => {
        return <Item title={ele.title} text={ele.text} key={ele.title} />;
      })}
    </div>
  );
}

function Item({ title, text }: IProps) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    return setIsOpen((isOpen) => !isOpen);
  }

  return (
    <div className="items">
      <div className="item" onClick={handleToggle}>
        <div>
          <h2>{title}</h2>
          {isOpen && <p>{text}</p>}
        </div>
        {isOpen ? (
          <img src="images/icon-minus.svg" className="icon" alt="icon-plus" />
        ) : (
          <img src="images/icon-plus.svg" className="icon" alt="icon-minus" />
        )}
      </div>
    </div>
  );
}
export default App;
