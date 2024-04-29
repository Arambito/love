import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartBroken } from '@fortawesome/free-solid-svg-icons';

const NoButton = () => {

  return (
    <>
      <button
        className={`focus:outline-none items-center justify-center w-16 h-16 rounded-full bg-[#282424] text-#282424`}
        >
        <FontAwesomeIcon icon={faHeartBroken} className="text-white text-3xl" />
      </button>
    </>
  );
}

export default NoButton;
