import { uploadPhoto, createUser } from './utils';

function handleProfileSignup() {
  return new Promise(
    (resolve) => {
      const uploadPhotoPromise = uploadPhoto();
      const createUserPromise = createUser();
      resolve([uploadPhotoPromise, createUserPromise]);
    },
  ).then(
    (values) => {
      console.log(`${values[0].body} ${values[1].firstName} ${values[1].lastName}`);
    },
  ).catch(
    () => console.log('Signup system offline'),
  );
}

export default handleProfileSignup;
