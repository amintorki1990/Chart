import { useDispatch } from "react-redux";
import { selectChart } from "../features/chartSlice";
import { useNavigate } from "react-router-dom";

const ChartCard = ({ img, name }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(selectChart(name));
    navigate("dashboard");
  };

  return (
    <div
      onClick={handleClick}
      className="border-2 border-blue-300 rounded-xl overflow-hidden p-4 m-4 max-w-sm cursor-pointer
      shadow-lg transition duration-200 hover:scale-95"
    >
      <div className="flex flex-col items-center justify-center">
        <img src={img} alt={name} />
        <span className="mt-2 px-3 py-1 rounded-2xl text-white font-ubuntu bg-purple-500">
          {name}
        </span>
      </div>
    </div>
  );
};

export default ChartCard;
