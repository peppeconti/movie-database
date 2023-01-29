import './FancyButton.css';

const FancyButton = (props) => {
    return (
        <button className="FancyButton">
            {props.children}
        </button>
    );
}

export default FancyButton;