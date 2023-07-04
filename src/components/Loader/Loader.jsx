import { Audio } from 'react-loader-spinner';

const Loader = () => {
  return <Audio
    height="160"
    width="160"
    radius="9"
    color="blue"
    ariaLabel="loading"
    wrapperStyle={{
      margin: '80px auto'
    }}
  />
};

export default Loader;