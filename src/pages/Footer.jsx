import React from 'react';
import { FaCreditCard, FaPaypal, FaShieldAlt } from 'react-icons/fa'; // Example icons for secure payments
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-white p-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">About pcsoftwaretech</h2>
          <p>
            pcsoftwaretech is a leading security and online store to keep you
            the ease of buying PC security products online. The online store
            provides several kinds of software including antivirus, internet
            security, and virus protection software.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4 ml-6">Resources</h2>
          <ul className="space-y-2 ">
            <Link to="/" className="hover:text-gray-500">
              Antivirus Shop
            </Link>{' '}
            <br />
            <Link to="/privacypolicy" className="hover:text-gray-500">
              Privacy Policy
            </Link>{' '}
            <br />
            <Link to="/refund&return" className="hover:text-gray-500">
              Refund and Returns Policy
            </Link>{' '}
            <br />
            <Link to="/t&c" className="hover:text-gray-500">
              Terms & Conditions
            </Link>{' '}
            <br />
            <Link to="/disclaimer" className="hover:text-gray-500">
              Disclaimer
            </Link>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Contact Details</h2>
          <p>Address: 2399 Howard Street, Kentwood MI 49512</p>
          <p>Contact: +1(855)-200-0658</p>
          <p>E-mail: support@pcsoftwaretech.com</p>
          <div className="mt-4">
            <h3 className="text-xl font-bold mb-2">Secure Payments</h3>
            <div className="flex space-x-2 text-xl">
              <FaCreditCard />
              <FaPaypal />
              <FaShieldAlt />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
