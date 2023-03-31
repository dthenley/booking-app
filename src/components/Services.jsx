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


export default function Services({handleServices}) {

    return(
        <div>
            <h2>Pick Your Service</h2>
            <ul>
                {services.map(service=>
                    <li
                    key={service.id
                    }>
                        <figure
                            onClick={()=>handleServices({
                              id:service.id,
                              name:service.name,
                              price:service.price
                            })}
                            name={service.name}
                            test="donte"
                            >
                            <img
                                src="https://via.placeholder.com/400x200"
                                alt="Book service {service.name}"
                                />
                            <figcaption>
                                <span>
                                {service.name}
                                </span>
                                <span>
                                ${service.price}
                                </span>
                            </figcaption>
                        </figure>
                    </li>
                )}
            </ul>
        </div>
    )
}