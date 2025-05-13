import { FaStar, FaRegStar } from "react-icons/fa";

const Rating = ({rating}:{rating:number}) => {
  const stars = Array.from({length:5}, (_,i)=> i + 1 <= rating)
  return <div className="flex items-center gap-x-1">
    {stars.map((isField, i)=>{
      const className = `w-3 h-3 ${isField? 'text-primary': 'text-grey-400' }`
      return isField ? (
        <FaStar className={className} key={i} />
      ) : (
        <FaRegStar className={className} key={i} />
      );
    })}
  </div>;
};
export default Rating;
