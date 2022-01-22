function Footer(){
    return(
        <footer className="bg-gray-800 text-4xl items-center text-white w-full flex justify-left h-20 bottom-0 left-0 right-0 fixed"> 
            <ul className="ml-14 flex">
                <li><a href= "https://www.facebook.com/"><img className="h-12 ml-8 hover:h-14" alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png"/></a></li>
                <li><a href= "https://www.instagram.com/"><img className="h-12 ml-10 hover:h-14" alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png"/></a></li>
                <li><a href= "https://www.twitter.com/"><img className="h-12 ml-9 hover:h-14  " alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/2491px-Twitter-logo.svg.png"/></a></li>
                <li><a href= "https://www.youtube.com/"><img className="h-12 ml-7 hover:h-14  "  alt="" src="https://www.iconpacks.net/icons/2/free-youtube-logo-icon-2431-thumb.png"/></a></li>
            </ul>   
            <p className="justify-center text-center ml-auto text-xl flex">We make use of cookies to improve our user experience. By using this website, you agree with our Cookies Policy. </p>               

            <img alt="" className="h-16 fixed right-4" src="https://upload.wikimedia.org/wikipedia/commons/3/34/Gmod_logo.png"/>
           
            <span className="font-mono justify-right font-black text-yellow-500 ml-auto mr-20" > StatTracker  </span>                  
        </footer>   
        )}

export default Footer;