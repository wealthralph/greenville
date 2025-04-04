// api/auth.js
import AxiosInstance from './AxiosInstance';

const SignUpApi = async (formData) => {
  const response = await AxiosInstance.post('/signup', formData);

  // Save token in localStorage (or use cookies)
  
  return response.data;
};

export default SignUpApi;

