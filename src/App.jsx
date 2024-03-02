import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card';
import first from './assets/1.jpg'
import second from './assets/2.jpg'
import third from './assets/3.jpg'
import fourth from './assets/4.jpg'

function App() {
  const [count, setCount] = useState(0)

  const dummyArray = [
    {
      imageUrl: first,
      description: "Description 1",
      buttonText: "Click Here"
    },
    {
      imageUrl: second,
      description: "Description 2",
      buttonText: "Click Here"
    },
    {
      imageUrl: third,
      description: "Description 3",
      buttonText: "Click Here"
    },
    {
      imageUrl: fourth,
      description: "Description 4",
      buttonText: "Click Here"
    },
    {
      imageUrl: first,
      description: "Description 5",
      buttonText: "Click Here"
    },
    {
      imageUrl: second,
      description: "Description 6",
      buttonText: "Click Here"
    },
    {
      imageUrl: third,
      description: "Description 7",
      buttonText: "Click Here"
    },
    {
      imageUrl: fourth,
      description: "Description 8",
      buttonText: "Click Here"
    },
    {
      imageUrl: first,
      description: "Description 9",
      buttonText: "Click Here"
    },
    {
      imageUrl: second,
      description: "Description 10",
      buttonText: "Click Here"
    }
  ];

  return (
    <div className="main">
      
    <h1>Your Favorite Movies</h1>

    <div className="card-list">
        {dummyArray.map((item, index) => (
          <Card
            key={index}
            imageUrl={item.imageUrl}
            description={item.description}
            buttonText={item.buttonText}
          />
        ))}
      </div>
    </div>
  )
}

export default App
