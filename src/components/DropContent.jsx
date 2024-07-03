import "./DropContent.css";

const DropContent = ({ content }) => {
  return (
    <div className="content">
      {content.map((item, index) => (
        <div key={index} className="content-card">
          <div className="content-left">
            <div>
              {item.type === "Veg" ? (
                <span>🥕</span>
              ) : item.type === "Egg" ? (
                <span>🥚</span>
              ) : (
                <span>🍗</span>
              )}
            </div>
            &nbsp;
            <div>{item.name}</div>
          </div>
          <div className="content-right">${item.price.toFixed(2)}</div>
        </div>
      ))}
    </div>
  );
};

export default DropContent;
