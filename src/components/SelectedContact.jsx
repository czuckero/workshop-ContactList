import { useEffect, useState } from "react";

function SelectedContact({selectedContactId, setSelectedContactId}) {
  const [contact, setContact] = useState(null);
  useEffect(() => {
    async function fetchContact() {
      try {
        const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/1`);
        const json = await response.json();
        console.log(json);
        setContact(json);
      } catch (error) {
        console.error(error);
      }
    }
    fetchContact();
  }, []);
  console.log("Selected Contact: ", contact);

  return (
    <div>
    {contact && (
      <div>
        <h2>Contact Details</h2>
        <p>Name: {contact.name}</p>
        <p>Username: {contact.username}</p>
        <p>Email: {contact.email}</p>
        <p>Phone: {contact.phone}</p>
        <p>Website: {contact.website}</p>
      </div>)}
      <button onClick={() => setSelectedContactId(null)}>
        Return to Contact List
      </button>
    </div>
  )
}

export default SelectedContact