import "./button.css";

export function Button({ content, onClick }) {
    return (
        <div className="custom-button button" onClick={onClick}>
            {content}
        </div>
    );
}
