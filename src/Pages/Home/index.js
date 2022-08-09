import React from 'react';
import './home.css';
import { useNavigate } from 'react-router-dom';
import Images from '../../Assets/images';

function Home() {
  const data = [
    {
      id: 1,
      src: Images.firstCard,
      heading: 'Study Tips',
      content: 'It will be worth it in the end.',
    },
    {
      id: 2,
      src: Images.secondCard,
      heading: 'Beat Exam Stress',
      content: "Don't let what you cannot do interfere with what you can do.",
    },
    {
      id: 3,
      src: Images.thirdCard,
      heading: 'Growth Mindset',
      content: "Don't worry about failure.",
    },
    {
      id: 4,
      src: Images.fourthCard,
      heading: 'Best Time To Study',
      content: "Do it Now! sometimes 'LATER' become 'NEVER'.",
    },
    {
      id: 5,
      src: Images.fifthCard,
      heading: 'Learning By Teaching',
      content: 'To teach is to learn twice over.',
    },
    {
      id: 6,
      src: Images.sixthCard,
      heading: 'Exam Tips',
      content:
        "Don't expect the results without the work. “The only place where success comes before work is in the dictionary.”.",
    },
    {
      id: 7,
      src: Images.seventhCard,
      heading: 'Hard-work is the Key',
      content: 'Self-belief and hard work will always earn you success.',
    },
    {
      id: 8,
      src: Images.eighthCard,
      heading: 'Achieve Success',
      content: "If you want to achieve success then don't doubt your DREAMS.",
    },
  ];

  const navigate = useNavigate();
  return (
    <div className="margin-from-top">
      <section className="home-page">
        <div className="content absolute-center">
          <h1>Learn & Discover !!</h1>
          <p>Login to Online Exam Portal to continue...</p>
          <button className="btn" onClick={() => navigate('/login')}>
            Login Please!
          </button>
        </div>
      </section>

      <section className="cardSection">
        <h5 className="mb-4">EXAMINATION GUIDANCE</h5>
        <div className="container">
          <div className="row cardsRow">
            {data.map((item) => 
              <div className="col-md-3 col-sm-6 p-1 columns" key={item.id}>
                <div className="my-img">
                  <img src={item.src} alt="Cards" />
                </div>
                <div className="content absolute-center">
                  <h4>{item.heading}</h4>
                  <div className="hidden-Content">
                    <p>{item.content}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
