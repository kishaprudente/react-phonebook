const Contacts = ({ contacts }) => {
    return (
        <ul>
            {contacts.map((user, i) => (
                <li key={i}>{user.firstName} {user.lastName}: {user.phoneNumber}</li>
            ))}
        </ul>
    )
}

export default Contacts;