export default function Sidebar({listOfSelectedServices}) {
    return (
        <aside>
            <h2>
                Services
            </h2>
            <ul>
                {listOfSelectedServices.map(service=>
                    <li key={service.id} >
                    <span>{service.name}</span>
                    <span>{'$' + service.price}</span>
                    </li>
                )}
            </ul>
        </aside>
    )
}