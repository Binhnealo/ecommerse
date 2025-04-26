    import button from './button.module.scss';
    
    function Buttton({ content }) {
        const {btn} = button;
    return (
        
        <button className={btn}>
        {content}
        </button>
    );
    }

    export default Buttton;
