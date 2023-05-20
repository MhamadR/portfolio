import "../assets/room.css";

function Room() {
  return (
    <>
      <div className="wall wall--ceil"></div>

      <div className="wall wall--floor"></div>

      <div className="wall wall--right"></div>

      <div className="wall wall--left"></div>

      <div className="wall wall--back"></div>

      <div className="wall wall--front"></div>
    </>
  );
}

export default Room;
