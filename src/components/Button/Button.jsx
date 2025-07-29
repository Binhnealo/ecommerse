    import button from './button.module.scss';
    import classNames from 'classnames';
    
    function Buttton({ content, isPrimary = true }) {
        const {btn, primaryBtn, secondaryBtn} = button;
    return (
        
        <button className={classNames(btn, {
            [primaryBtn]: isPrimary,
            [secondaryBtn]: !isPrimary
        })}>
        {content}
        </button>
    );
    }

    export default Buttton;
