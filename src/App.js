import { useState } from 'react';
import './css/App.css';

const services = [
  {
    id: 0,
    name: 'Locs',
    price: 80
  },
  {
    id: 1,
    name: 'Large Box Braids',
    price: 90
  },
  {
    id: 2,
    name: 'Small Box Braids',
    price: 70
  },
  {
    id: 3,
    name: 'Cornrolls',
    price: 45
  },
  {
    id: 4,
    name: 'Crochet',
    price: 45
  }
  ,{
    id: 5,
    name: 'Male Braids',
    price: 50
  }
];


const serviceList = services.map(service => 
    <li key={service.id}>
        <ServiceCard
          id={service.id}
          name={service.name}
          price={service.price}
        />
    </li>
    );

export default function App() {
const [userServices, setUserServices] = useState([]);

  return (
    <div className="App">
      <h1>
        Booking App
      </h1>
      <aside>
        <h2>Services</h2>

      </aside>
      <div className='service-option'>
        <h2>Pick Your Service</h2>
        <ul>
          {serviceList}
        </ul>
      </div>
    </div>
  );
}

function ServiceCard({id, name, price}) {
  const handleClick = () => {
    console.log('clicked');
  }
  return(
    <figure
        onClick={handleClick}
        name={name}
        test="donte"
        >
          <img
            src="https://via.placeholder.com/400x200"
            alt="Book service {service.name}"
          />
          <figcaption>
            <span>
              {name}
            </span>
            <span>
              ${price}
            </span>
          </figcaption>
        </figure>
  )
}
