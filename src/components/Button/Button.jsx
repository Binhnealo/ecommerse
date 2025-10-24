    import button from './button.module.scss';
    import classNames from 'classnames';

    function Button({ content, isPrimary = true, width, height, padding, fontSize, border, customClassname=false, ...props }) {
        const {btn, primaryBtn, secondaryBtn} = button;
    return (
        
        <button className={classNames(btn, {
            [primaryBtn]: isPrimary,
            [secondaryBtn]: !isPrimary,
            [customClassname]: customClassname

        })}
        style={{ width, height, padding, fontSize, border }} 
        {...props}
        >
        {content}
        </button>
    );
    }

    export default Button;
