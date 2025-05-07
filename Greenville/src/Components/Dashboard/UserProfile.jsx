import { MdKeyboardArrowDown } from "react-icons/md";
import { ctrash } from "../../assets";

export default function UserProfile({ name }) {
    return (
      <div>
        <p>{name}</p>
        <div className="avatar">
          <img src={ctrash} alt={`${name}'s avatar`} />
          <MdKeyboardArrowDown />
        </div>
      </div>
    );
  }
  