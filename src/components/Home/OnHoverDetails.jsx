import { useNavigate } from "react-router-dom";

const OnHoverDetails = ({ id, title1, title2, episodeCount, jpTitle, description, status, dateAired,
  endDate }) => {

    const navigate = useNavigate();

  const formatDate = (dateParam) => {
    const dateObject = new Date(dateParam);
    const options = { month: "long", day: "numeric", year: "numeric" };
    const formattedDate = dateObject.toLocaleDateString("en-US", options);
    return formattedDate;
  }

  return (
    <div 
      className="hidden 2xl:block w-[400px] border-2 border-primaryBg bg-white top-[175px] left-[98px] 
      absolute rounded-md z-10 py-3 px-4 cursor-default"
      onClick={e => e.stopPropagation()}
    >
      <div className="flex justify-between">
        <div>
          <p className="font-bold">{title1 || title2}</p>
          <p className="text-[10px]">{jpTitle || title2}</p>
        </div>
        <div className="text-2xl font-bold">+</div>
      </div>
      <div className=" bg-gray-300 my-4 py-2 px-4 rounded-md flex justify-between items-center">
        <p className="text-sm">
          Ep { status === 'finished' ? `${episodeCount} / ${episodeCount}` : episodeCount }
        </p>
        <div className="bg-primaryBg px-3 py-[4px] rounded-md text-white text-xs">SUB</div>
      </div>
      <p className="text-sm line-clamp-3 mb-4">{description}</p>
      <div className="flex flex-col gap-y-1">
        <p 
          className="text-gray-600 text-xs">Scores: </p>
        <p 
          className="text-gray-600 text-xs"
        >
            Date aired: {formatDate(dateAired)} to {formatDate(endDate) || '?'}
        </p>
        <p className="text-gray-600 text-xs">Status: {status === 'finished' ? 'Finished' : 'Currently Airing'}</p>
      </div>
      <div 
        className="bg-primaryBg inset-x-0 bottom-0 py-2 flex items-center justify-center rounded-md mt-4 cursor-pointer"
        onClick={() => navigate(`/summary/${id}`)}
      >
        
        <p className="font-medium text-white text-lg">View</p>
      </div>
    </div>
  )
}

export default OnHoverDetails