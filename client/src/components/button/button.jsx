import "./button.css";

export function Button({ content, onClick, className }) {
    const element = (
        <div className={`custom-button button ${className}`} onClick={onClick}>
            {content}
        </div>
    );

    return element;
}
