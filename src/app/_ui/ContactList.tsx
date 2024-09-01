
type Contact = 'LinkedIn' | 'Github' | 'Email'
type ContactListProps = {
    contacts: {
        [C in Contact]?: string
    }
}

export default function ContactList({ contacts }: ContactListProps){
    console.log(contacts);
    
    return(
        <ul className="w-full">
            {Object.entries(contacts).map(([k,v], idx) => (
                <>
                <li className="py-2 hover:underline w-full hidden md:inline-block md:w-full"><a className="w-fit" href={`${k === 'Email' ? 'mailto:'+v : v}`}>{v}</a></li>
                <li className="py-2 text-center hover:underline w-full inline-block md:hidden md:w-full"><a className="w-fit" href={`${k === 'Email' ? 'mailto:'+v : v}`}>{k}</a></li></>
            ))}
        </ul>
    ) 
}