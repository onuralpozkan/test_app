import PropTypes from 'prop-types';
import './Button.css';
export const Button = ({ icon, isBlock, clsName, label, handleClick }) => (
  <button className={`button ${clsName} ${isBlock ? 'block' : ''}`} onClick={handleClick}>
    {icon && <img className={`button-icon ${label.length > 0 ? 'space' : ''}`} src={icon} alt={`${label} Button`}/>}
    <span>{label}</span>
  </button>
);
Button.defaultProps = {
  clsName: "primary",
  label: "",
  isBlock: false,
}
Button.propTypes = {
  clsName: PropTypes.oneOf(['primary','info','warning','danger', 'success', 'light']).isRequired,
  label: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
  isBlock: PropTypes.bool,
  icon: PropTypes.string
};
/*
<Button clsName="" label="" hanleClick={function} />
*/
