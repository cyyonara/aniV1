  import { useState } from "react"
import OnHoverDetails from "./OnHoverDetails"
import { BsPlayCircle as PlayIcon } from 'react-icons/bs';
import { useNavigate } from "react-router-dom";

const ShowCard = ({ id, cardImage, title1, title2, episodeCount, jpTitle, description, status, dateAired, endDate }) => {

  const navigate = useNavigate();
  const [ isHovered, setIsHovered ] = useState(false);

  const onClick = () => {
     navigate(`/summary/${id}`)
  }; 

  return (
    <section className="relative flex flex-col cursor-pointer overflow-visible rounded-md"
      onPointerEnter={() => setIsHovered(true)}
      onPointerLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <div className="relative rounded-lg">
        <img src={cardImage} alt={title1 || title2} className="rounded-tl-md rounded-tr-md" />
        <div className="bg-[#1e1e1e99] text-white text-sm absolute right-0 bottom-0 py-1 px-3 rounded-tl-[4px]">
          Ep { status === 'finished' ? `${episodeCount} / ${episodeCount}` : episodeCount }
        </div>
      </div>
      {isHovered && 
        <div className=" absolute bg-hoverBg inset-0 flex items-center justify-center">
          <PlayIcon className="playBtn text-6xl text-white"/>
          <OnHoverDetails 
            id={id}
            title1={title1}
            title2={title2}
            jpTitle={jpTitle}
            description={description}
            episodeCount={episodeCount}
            setIsHovered={setIsHovered}
            status={status}
            dateAired={dateAired}
            endDate={endDate}
            onClick={onClick}
          />  
        </div>
      }
      <div className="bg-primaryBg flex items-center justify-center px-3 py-2 rounded-bl-md rounded-br-md">
        <p className="truncate text-center text-white">
          {title1 || title2 || description || 'no title'}
        </p>
      </div>
    </section>
  )
}

export default ShowCard