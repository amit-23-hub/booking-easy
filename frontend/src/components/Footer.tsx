import { FaFacebook, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-slate-800">
      <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <img src="#" className="mr-5 h-6 sm:h-9" alt="logo" />
            <p className="max-w-xs mt-4 text-sm text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, accusantium.
            </p>
            <div className="flex mt-8 space-x-6 text-gray-400">
              <a className="hover:opacity-75" href="#" target="_blank" rel="noreferrer">
                <span className="sr-only">Facebook</span>
                <FaFacebook className="w-6 h-6" />
              </a>
              <a className="hover:opacity-75" href="#" target="_blank" rel="noreferrer">
                <span className="sr-only">GitHub</span>
                <FaGithub className="w-6 h-6" />
              </a>
              <a className="hover:opacity-75" href="#" target="_blank" rel="noreferrer">
                <span className="sr-only">Twitter</span>
                <FaTwitter className="w-6 h-6" />
              </a>
              <a className="hover:opacity-75" href="#" target="_blank" rel="noreferrer">
                <span className="sr-only">Instagram</span>
                <FaInstagram className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="font-medium">COMPANY</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                <a className="hover:opacity-75" href="#">About Us</a>
                <a className="hover:opacity-75" href="#">Meet the Team</a>
                <a className="hover:opacity-75" href="#">History</a>
                <a className="hover:opacity-75" href="#">Careers</a>
              </nav>
            </div>
           
            <div>
              <p className="font-medium">CONSUMER DISCLOUSER</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                <a className="hover:opacity-75" href="#">Privacy Policy</a>
                <a className="hover:opacity-75" href="#">Terms & Condtion</a>
                <a className="hover:opacity-75" href="#">Contact Us</a>
                <a className="hover:opacity-75" href="#">Careers</a>
              </nav>
            </div>
            <div>
              <p className="font-medium">COMMUNITY</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                <a className="hover:opacity-75" href="#">Blog</a>
                <a className="hover:opacity-75" href="#">Community</a>
                <a className="hover:opacity-75" href="#">Ideas</a>
                <a className="hover:opacity-75" href="#">Developers</a>
              </nav>
            </div>
            <div>
              <p className="font-medium">USEFUL LINKS</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                <a className="hover:opacity-75" href="#">Cookie Policy </a>
                <a className="hover:opacity-75" href="#">Cookie Settings</a>
                <a className="hover:opacity-75" href="#">Media</a>
                <a className="hover:opacity-75" href="#">Influencer</a>
              </nav>
            </div>
          </div>
        </div>
        <p className="mt-8 text-xs text-gray-300">
          © 2022 Booking Easy 
        </p>
      </div>
    </footer>
  );
};

export default Footer;
