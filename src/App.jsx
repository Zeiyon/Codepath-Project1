
import './App.css'
import Card from './Card';
import first from './assets/1.jpg'
import second from './assets/2.jpg'
import third from './assets/3.jpg'
import fourth from './assets/4.jpg'
import fifth from './assets/5.jpg'
import sixth from './assets/6.jpg'
import seventh from './assets/7.jpg'
import eighth from './assets/8.jpg'
import ninth from './assets/9.jpg'
import tenth from './assets/10.jpg'

function App() {
  const movies = [
    {
      imageUrl: first,
      description: "Avengers: Infinity War"
    },
    {
      imageUrl: second,
      description: "Moonligh"
    },
    {
      imageUrl: third,
      description: "Jurrasic Park"
    },
    {
      imageUrl: fourth,
      description: "Demon Slayer"
    },
    {
      imageUrl: fifth,
      description: "Back to the Future"
    },
    {
      imageUrl: sixth,
      description: "Scream"
    },
    {
      imageUrl: seventh,
      description: "Black Widow"
    },
    {
      imageUrl: eighth,
      description: "Black Panther"
    },
    {
      imageUrl: ninth,
      description: "Bohemian Rhapsody"
    },
    {
      imageUrl: tenth,
      description: "Star Wars"
    }
  ];

  return (
    <div className="main">
      
    <h1>Your Favorite Movies List</h1>

    <div className="card-list">
        {movies.map((item, index) => (
          <Card
            key={index}
            imageUrl={item.imageUrl}
            description={item.description}
          />
        ))}
      </div>
    </div>
  )
}

export default App
