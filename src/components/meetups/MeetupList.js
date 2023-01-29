import MeetupItem from './MeetupItem';
import classes from './MeetupList.module.css';

function MeetupList(props) {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
          description={meetup.description}

          // alternatively can be added in
          // meetup={meetup}
          // and then should be destuctured inside the meetup item comp.
        />
      ))}
    </ul>
  );
}

export default MeetupList;
