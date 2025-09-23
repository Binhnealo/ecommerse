    import button from './button.module.scss';
    import classNames from 'classnames';

    function Button({ content, isPrimary = true, width, height, padding, fontSize, border, ...props }) {
        const {btn, primaryBtn, secondaryBtn} = button;
    return (
        
        <button className={classNames(btn, {
            [primaryBtn]: isPrimary,
            [secondaryBtn]: !isPrimary
        })}
        style={{ width, height, padding, fontSize, border }} 
        {...props}
        >
        {content}
        </button>
    );
    }

    export default Button;
