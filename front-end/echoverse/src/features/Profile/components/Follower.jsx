import { useNavigate } from "react-router-dom";

function Follower({ follower }) {
    const navigate = useNavigate();

    return (
        <div
            className="flex h-10 cursor-pointer flex-col justify-between text-sm"
            onClick={() => navigate(`/${follower.username}`)}
        >
            <h4 className="h-4 font-semibold">{follower.username}</h4>
            <span className="h-4 text-gray-light">{follower.name}</span>
        </div>
    );
}

export default Follower;
