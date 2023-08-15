function Project({ id, content, title, latest_update, removeOneProject }) {
  return (
    <div className="card">
      <div className="cardInfo">
        <h2 className="cardTitle">{title}</h2>
        <h4 className="cardLastUpdate">{latest_update}</h4>
      </div>
      <p>{content}</p>
      <button
        className="cardDelete"
        onClick={() => {
          removeOneProject(id);
        }}
      >
        Sil
      </button>
    </div>
  );
}

export default Project;
