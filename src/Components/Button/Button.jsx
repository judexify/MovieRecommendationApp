import "./Button.css";

export default function Button({ padding, children }) {
  return (
    <button style={{ padding }} className="recommend-btn">
      {children}
    </button>
  );
}
