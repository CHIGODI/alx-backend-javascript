import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.all([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((res) => ({
      status: 'resolved',
      value: `${res[0].firstName} ${res[0].lastName} ${res[1].body}`,
    }))
    .catch(() => ({
      status: 'rejected',
      error: 'Signup system offline',
    }));
}
