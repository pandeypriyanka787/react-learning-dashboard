function Card({ title, desc, done, onToggle }) {
  return (
    <div className={`card ${done ? "completed" : ""}`}>
      <h3>{title}</h3>
      <p>{desc}</p>

      <button onClick={onToggle}>
        {done ? "Undo" : "Mark Complete"}
      </button>

      {done && <p className="done-text">✅ Completed</p>}
    </div>
  );
}

export default Card;