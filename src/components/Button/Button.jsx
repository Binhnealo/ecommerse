    import button from './button.module.scss';
    import classNames from 'classnames';
    
    function Button({ content, isPrimary = true, ...props }) {
        const {btn, primaryBtn, secondaryBtn} = button;
    return (
        
        <button className={classNames(btn, {
            [primaryBtn]: isPrimary,
            [secondaryBtn]: !isPrimary
        })}
        {...props}
        >
        {content}
        </button>
    );
    }

    export default Button;
