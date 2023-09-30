import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstname, lastname, filename) {
  return Promise
    .allSettled([
      signUpUser({ firstname, lastname }),
      uploadPhoto(filename),
    ])
    .then(
      (values) => (
        values.map((l) => ({
          status: l.status,
          value: l.status === 'fulfilled' ? l.value : String(l.reason),
        }))
      ),
    );
}
