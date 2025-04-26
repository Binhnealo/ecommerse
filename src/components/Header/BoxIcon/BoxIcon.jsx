    import fbicon from "@icons/svgs/fbicon.svg";
    import instaIcon from "@icons/svgs/instaIcon.svg";
    import youtubeIcon from "@icons/svgs/youtubeIcon.svg";


    

    function BoxIcon({ type, href }) {
        

        const handleRenderIcon = (type) => {
            switch (type){
                case "fb":
                    return fbicon
                case "insta":
                    return instaIcon
                case "ytb":
                    return youtubeIcon
            }

        }
    return <div className="w-6 h-6 rounded-[50%] bg-primaryColor flex items-center justify-center"> <img src={handleRenderIcon(type)} alt={type}/></div>;
    }

    export default BoxIcon;
