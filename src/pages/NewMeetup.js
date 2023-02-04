import { useNavigate } from 'react-router-dom';
import NewMeetupForm from '../components/meetups/NewMeetupForm';

function NewMeetupPage() {
  const navigate = useNavigate();

  //to receive data from child component(NewMeetupForm)
  function addMeetupHandler(meetupData) {
    fetch(
      'https://go-2-explore-default-rtdb.firebaseio.com/meetups.json', //to send http request to database
      {
        method: 'POST', // to store the data in Firebase
        body: JSON.stringify(meetupData),
        headers: {
          'Content-Type': 'aplication/json',
        },
      }
    ).then(() => {
      navigate('/', { replace: true }); // will send us away of the page but wont allow us to use Back button via replace() instead push()
    });
  }

  return (
    <section>
      <h1>Add new meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}
// to send

export default NewMeetupPage;
