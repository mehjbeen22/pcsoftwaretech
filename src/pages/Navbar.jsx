import { Link } from 'react-router-dom'; // Import Link component from react-router-dom
import SearchIcon from '@mui/icons-material/Search';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import { categoryArr } from './products';

const Navbar = ({ setSelectedCategory }) => {
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <nav>
      <section className="bg-black text-yellow-400 p-1 flex justify-between items-center">
        <Link to="/" className="text-[2rem] font-bold no-underline">
          <p className="text-yellow-400 mt-3">pcsoftwaretech</p>
        </Link>
        <div className="flex items-center space-x-2 bg-yellow-300 w-1/2 rounded">
          <input
            type="text"
            placeholder="Search..."
            className="p-2 text-black placeholder-black bg-transparent focus:outline-none w-[90%]"
          />
          <SearchIcon className="text-black " />
        </div>
        <div className="flex  items-center mr-8  gap-2"></div>
      </section>

      <section className="flex justify-around bg-yellow-400 items-center">
        <div className="relative w-[15%]">
          <select
            className="p-2 w-[100%] rounded outline-none"
            onChange={(e) => handleCategoryChange(e.target.value)}
          >
            <option value="">All Categories</option>
            {categoryArr.map((value, index) => (
              <option
                key={index}
                value={value}
                className="hover:bg-gray-100 p-2 rounded"
              >
                {value}
              </option>
            ))}
          </select>
        </div>

        {/* Navigation Links */}
        <ul className="flex justify-center items-center">
          <Link
            to="/"
            className="text-black py-1 px-2  no-underline  rounded mt-3 mr-3"
          >
            Antivirus Shop
          </Link>
          <Link
            to="/privacypolicy"
            className="text-black py-1 px-2  no-underline  rounded hover:bg-gray-200 mt-3 mr-3"
          >
            Privacy Policy
          </Link>
          <Link
            to="/refund&return"
            className="text-black py-1 px-2  no-underline  rounded hover:bg-gray-200 mt-3 mr-3"
          >
            Refund and Returns Policy
          </Link>
          <Link
            to="/t&c"
            className="text-black py-1 px-2  no-underline  rounded hover:bg-gray-200 mt-3 mr-3"
          >
            Terms & Conditions
          </Link>
          <Link
            to="/disclaimer"
            className="text-black py-1 px-2  no-underline  rounded hover:bg-gray-200 mt-3 mr-3"
          >
            Disclaimer
          </Link>

          <Link
            to="/blog"
            className="text-black py-1 px-2  no-underline  rounded hover:bg-gray-200 mt-3 mr-3"
          >
            Blog
          </Link>
        </ul>
      </section>
    </nav>
  );
};

export default Navbar;
