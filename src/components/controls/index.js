import PropTypes from "prop-types";
import "./style.scss";

const Controls = ({ inputValue, onChange, onClick }) => (
  <div className="controls">
    <input
      placeholder="Please enter the city..."
      value={inputValue}
      onChange={({ currentTarget: { value } }) => onChange(value)}
      className="controls__input"
      type="text"
    />
    <button onClick={onClick} className="controls__submit">
      Get city temperature
    </button>
  </div>
);

Controls.propTypes = {
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
};

export default Controls;
