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

export default function App() {
  const [userServices, setUserServices] = useState([]);
  const serviceList = services.map(service => 
    <li key={service.id}>
        <ServiceCard
          id={service.id}
          name={service.name}
          price={service.price}
          addService={()=>
            setUserServices([
              ...userServices,
              {
                id:service.id,
                name:service.name,
                price:service.price
              }
            ])
          }
        />
    </li>
    );

  return (
    <div className="App">
      <h1>
        Booking App 
      </h1>
      <aside>
        <h2>Services</h2>
        <ul>
          {userServices.map(service=>
            <li key={service.id} >
              {service.name}
            </li>
          )}
        </ul>
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

function ServiceCard({id, name, price,addService}) {
  return(
    <figure
        onClick={addService}
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
