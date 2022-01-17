

function Footer(){
    return(
        <footer className="bg-gray-800  text-4xl items-center text-white w-full flex justify-left h-20 fixed bottom-0 left-0 right-0"> 
            <ul className="ml-14 flex">
                <li><a href= "https://www.facebook.com/"><img className="h-12 ml-8 hover:h-14" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png"/></a></li>
                <li><a href= "https://www.instagram.com/"><img className="h-12 ml-10 hover:h-14" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png"/></a></li>
                <li><a href= "https://www.twitter.com/"><img className="h-12 ml-9 hover:h-14  " src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/2491px-Twitter-logo.svg.png"/></a></li>
                <li><a href= "https://www.youtube.com/"><img className="h-12 ml-7 hover:h-14  "  src="https://www.iconpacks.net/icons/2/free-youtube-logo-icon-2431-thumb.png"/></a></li>
            </ul>   
            <p className="justify-center  ml-auto text-xl">We make use of cookies to improve our user experience. By using this website, you agree with our Cookies Policy. </p>               
            <img className="h-16 mr-0 fixed right-4 " src="https://upload.wikimedia.org/wikipedia/commons/3/34/Gmod_logo.png"/>            
            <span className="font-mono justify-right font-black text-white ml-auto mr-20" > Film Finder  </span>                  
        </footer>   
        )}

export default Footer;