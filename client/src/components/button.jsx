// import "./button.css";

export function Button({ content, onClick, className, children }) {
  const element = (
    <div
      className={`custom-button button flex items-center justify-center text-white bg-color-2 px-4 py-2 cursor-pointer active:scale-[0.99] hover:scale-[1.01] ${className}`}
      onClick={onClick}
    >
      {content}
      {children}
    </div>
  );

  return element;
}
