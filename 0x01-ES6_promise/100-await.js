import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  return {
    photo: uploadPhoto(),
    user: createUser(),
  };
}
