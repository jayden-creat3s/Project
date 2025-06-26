const [activeLink, setActiveLink] = useState('home');

  const handleLinkClick = (link) => {
    setActiveLink(link);
    const section = document.getElementById(link);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="flex flex-col items-center space-y-4 p-4 bg-black sticky top-0 z-50">
      <div className="flex space-x-4">
        <Link 
          to="#home" 
          className={`text-white ${activeLink === 'home' ? 'font-bold' : ''}`} 
          onClick={() => handleLinkClick('home')}
        >
          Home
        </Link>
        <Link 
          to="#latest-release" 
          className={`text-white ${activeLink === 'latest-release' ? 'font-bold' : ''}`} 
          onClick={() => handleLinkClick('latest-release')}
        >
          Latest Release
        </Link>
        <Link 
          to="#albums" 
          className={`text-white ${activeLink === 'albums' ? 'font-bold' : ''}`} 
          onClick={() => handleLinkClick('albums')}
        >
          Albums
        </Link>
      </div>
      <div className="flex space-x-4">
        <Link 
          to="#singles" 
          className={`text-white ${activeLink === 'singles' ? 'font-bold' : ''}`} 
          onClick={() => handleLinkClick('singles')}
        >
          Singles
        </Link>
        <Link 
          to="#collaborations" 
          className={`text-white ${activeLink === 'collaborations' ? 'font-bold' : ''}`} 
          onClick={() => handleLinkClick('collaborations')}
        >
          Collaborations
        </Link>
      </div>
    </nav>
  );;
export default Navigation;
