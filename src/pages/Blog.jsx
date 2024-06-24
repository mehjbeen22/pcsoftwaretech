import React from 'react';

const Blog = () => {
  return (
    <div className="container mx-auto p-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold">Blog</h1>
        <p className="text-lg mt-4">
          Explore our latest articles and insights on cybersecurity and more
        </p>
      </header>

      <section className="mb-12 ">
        <h2 className="text-2xl font-bold mb-4">Featured</h2>
        <div className="bg-yellow-400 p-6 shadow-md rounded-lg  mb-6">
          <h3 className="text-2xl font-semibold mb-2">
            How to clear cache and cookies in your browser
          </h3>
          <p className="text-gray-600">
            Published: March 21, 2024 · 6 min 25 sec read
          </p>
          <div className="mt-4">
            <img
              src="https://img.freepik.com/free-photo/sweet-oatmeal-cookies-plate_176420-6766.jpg?t=st=1718080706~exp=1718084306~hmac=6ef2ea17550a7c3a9b5059806118d86c3ab1dd6ba3db6c7f8d4fd22234e28127&w=826"
              alt="How to clear cache and cookies"
              className="w-full h-64 object-cover rounded-md mb-4"
            />
            <p>
              Pcsoftwaretech is a leading security and online store that offers
              you the ease of buying PC security products online. The online
              store provides several kinds of software including antivirus,
              internet security, and virus protection software. In addition to
              new products, we also sell products that have been restored to
              like-new condition and undergo rigorous inspection to meet our
              quality standards.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Editor's Picks</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h3 className="text-xl font-semibold mb-2">
              What 2024 holds for the future of cybersecurity
            </h3>
            <p className="text-gray-600">
              Published: December 20, 2023 · 8 min read
            </p>
            <div className="mt-4">
              <img
                src="https://img.freepik.com/free-photo/scene-with-business-person-working-futuristic-office-job_23-2151003744.jpg?t=st=1718080748~exp=1718084348~hmac=531bf3caeaa986e3b865d7e1e712f3f8e78b341c2d7ca152640d226ae6debb77&w=826"
                alt="Cybersecurity predictions"
                className="w-full h-64 object-cover rounded-md mb-4"
              />
              <p>
                Norton's researchers released their 2024 cybersecurity
                predictions. See how AI is predicted to impact the landscape of
                cybersecurity.
              </p>
            </div>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h3 className="text-xl font-semibold mb-2">
              Famous computer viruses: A historical look at notable cyberthreats
            </h3>
            <p className="text-gray-600">
              Published: March 22, 2024 · 6 min read
            </p>
            <div className="mt-4">
              <img
                src="https://img.freepik.com/free-photo/masked-hacker-wearing-hoodie-hide-his-identity-internet-criminal_482257-21751.jpg?t=st=1718080795~exp=1718084395~hmac=2ea48420f21efc557d99805bee256817daed9406158848eb4d9bbdfb3d0d1786&w=996"
                alt="Famous computer viruses"
                className="w-full h-64 object-cover rounded-md mb-4"
              />
              <p>
                Learn about the most famous computer viruses and their impact,
                including examples and the history of these cyberthreats.
              </p>
            </div>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h3 className="text-xl font-semibold mb-2">
              Everything you need to know about social engineering attacks
            </h3>
            <p className="text-gray-600">
              Published: March 14, 2022 · 4 min read
            </p>
            <div className="mt-4">
              <img
                src="https://img.freepik.com/free-photo/view-people-addicted-their-smartphone-looking-scrolling-through-screens_23-2151487162.jpg?t=st=1718080829~exp=1718084429~hmac=30a03a9514e8e0e9f81c29b80b180619354835f3179008e86a8ab3650aaba503&w=826"
                alt="Social engineering attacks"
                className="w-full h-64 object-cover rounded-md mb-4"
              />
              <p>
                Once you understand what social engineering is and how it works
                you can use that knowledge to defend yourself.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Most Popular</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h3 className="text-xl font-semibold mb-2">
              What is the dark web and how do you access it?
            </h3>
            <p className="text-gray-600">
              Published: December 14, 2023 · 3 min read
            </p>
            <div className="mt-4">
              <img
                src="https://img.freepik.com/free-photo/medium-shot-hacker-holding-laptop_23-2149101212.jpg?t=st=1718080865~exp=1718084465~hmac=93e0f8920b26ab26a8f931c424532bb102518b1bef3389bc2b62ffc25029a4a4&w=826"
                alt="Dark web"
                className="w-full h-64 object-cover rounded-md mb-4"
              />
              <p>
                The dark web sounds ominous, but many people use it for enhanced
                privacy and security. Learn how to access it plus tips to stay
                safe while browsing.
              </p>
            </div>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h3 className="text-xl font-semibold mb-2">
              How to find hidden cameras: 10 detection methods
            </h3>
            <p className="text-gray-600">
              Published: December 21, 2022 · 4 min read
            </p>
            <div className="mt-4">
              <img
                src="https://img.freepik.com/premium-photo/afraid-man-with-cameras-pointed-him_207634-4312.jpg?w=740"
                alt="Hidden cameras"
                className="w-full h-64 object-cover rounded-md mb-4"
              />
              <p>
                Be it a holiday rental or self-catering accommodation, you may
                wonder about hidden cameras. Follow this guide to learn how to
                find hidden cameras.
              </p>
            </div>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h3 className="text-xl font-semibold mb-2">
              13 WhatsApp scams to know and avoid in 2024
            </h3>
            <p className="text-gray-600">
              Published: December 22, 2023 · 11 min read
            </p>
            <div className="mt-4">
              <img
                src="https://img.freepik.com/free-photo/annoyed-young-brunette-caucasian-girl-looks-phone-holds-hand-open-isolated-green-background-with-copy-space_141793-67128.jpg?t=st=1718080934~exp=1718084534~hmac=2bb3971c3844a647190814960c4728010ea8c51ae865c1cfbc23fb510155dd3b&w=740"
                alt="WhatsApp scams"
                className="w-full h-64 object-cover rounded-md mb-4"
              />
              <p>
                Watch out for WhatsApp scams while you chat with family and
                friends online. Learn about common WhatsApp scams and how to
                avoid them.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Cyberthreat Protection</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h3 className="text-xl font-semibold mb-2">
              What is Boot Sector Virus & How to Prevent Them?
            </h3>
            <p className="text-gray-600">
              Published: August 08, 2018 · 3 min read
            </p>
            <div className="mt-4">
              <img
                src="https://img.freepik.com/premium-photo/concept-covid19-coronavirus-pandemic-with-falling-chain-like-domino-game-contagion-infection-progression-stopped-by-hand-doctor-cyan-wall_207634-237.jpg?w=826"
                alt="Boot Sector Virus"
                className="w-full h-64 object-cover rounded-md mb-4"
              />
              <p>
                Learn what Boot Sector Viruses are and how to prevent them from
                infecting your devices.
              </p>
            </div>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h3 className="text-xl font-semibold mb-2">
              6 Things We Can Learn From Gaming
            </h3>
            <p className="text-gray-600">
              Published: June 28, 2022 · 2 min read
            </p>
            <div className="mt-4">
              <img
                src="https://img.freepik.com/premium-photo/like-gesture-hipster-man-face-expression-happy_279525-31103.jpg?w=996"
                alt="Gaming lessons"
                className="w-full h-64 object-cover rounded-md mb-4"
              />
              <p>
                Do you think that video and computer games are a waste of time?
                Then read our article to find out why that might not be the
                case.
              </p>
            </div>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h3 className="text-xl font-semibold mb-2">
              Bank credential stealing Android malware is on the rise
            </h3>
            <p className="text-gray-600">
              Published: August 08, 2018 · 4 min read
            </p>
            <div className="mt-4">
              <img
                src="https://img.freepik.com/free-vector/steal-data-concept_23-2148549184.jpg?t=st=1718081041~exp=1718084641~hmac=e10ebc9340a6cfb1f6c32fc548cf5a1e911d356827d57283c1590b07b0bea112&w=740"
                alt="Android malware"
                className="w-full h-64 object-cover rounded-md mb-4"
              />
              <p>
                Cyber criminals are finding new ways to steal your money through
                your Android device. Lately, the use of Android malware that
                steals your banking credentials, with names such as Acecard or
                GMbot, is on the rise.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Online Privacy</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h3 className="text-xl font-semibold mb-2">What are cookies?</h3>
            <p className="text-gray-600">
              Published: August 08, 2018 · 4 min read
            </p>
            <div className="mt-4">
              <img
                src="https://img.freepik.com/free-photo/front-view-hands-holding-cookies_23-2150707209.jpg?t=st=1718081087~exp=1718084687~hmac=9ba18b31dc500fe8be92ddfadbde533318a3d7572299bc60159d14d6db090bac&w=826"
                alt="Cookies explanation"
                className="w-full h-64 object-cover rounded-md mb-4"
              />
              <p>
                Mention “cookies,” and most people expect a treat to appear.
                When talking about computers, however, cookies aren’t what’s on
                the dessert menu. In fact, they’re not even physical objects.
              </p>
            </div>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h3 className="text-xl font-semibold mb-2">
              5 tips for social media security and privacy
            </h3>
            <p className="text-gray-600">
              Published: August 08, 2018 · 3 min read
            </p>
            <div className="mt-4">
              <img
                src="https://img.freepik.com/free-vector/new-gdpr-concept-with-infographic-design_23-2147856375.jpg?t=st=1718081114~exp=1718084714~hmac=6f303f398196892c1f716dce30820e329fcb092a3173212e54e1be5a617df877&w=740"
                alt="Social media security"
                className="w-full h-64 object-cover rounded-md mb-4"
              />
              <p>
                Social media accounts are powerful tools in the wrong hands.
                We've recently seen hackers take over the Twitter accounts of
                media outlets and large corporations, using them for anything
                from basic spam to more malicious purposes.
              </p>
            </div>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h3 className="text-xl font-semibold mb-2">
              Are free VPNs safe? 7 things to know before using free VPNs
            </h3>
            <p className="text-gray-600">
              Published: August 08, 2018 · 2 min read
            </p>
            <div className="mt-4">
              <img
                src="https://img.freepik.com/free-vector/hand-drawn-vpn-illustration_23-2149229494.jpg?t=st=1718081148~exp=1718084748~hmac=21b8e124f35cf8bdc5c9fc5325ae86e19898799688fed79c814f6a05d88b5924&w=740"
                alt="Free VPNs"
                className="w-full h-64 object-cover rounded-md mb-4"
              />
              <p>
                You might be tempted to sign up for a free VPN service. But are
                free VPNs safe to use? Learn more about the potential risks and
                considerations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Device Security</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h3 className="text-xl font-semibold mb-2">
              Mobile pay is here to stay — and getting better and faster
            </h3>
            <p className="text-gray-600">
              Published: August 08, 2018 · 4 min read
            </p>
            <div className="mt-4">
              <img
                src="https://img.freepik.com/free-photo/easy-wireless-yechnology-payment_23-2149105177.jpg?t=st=1718081186~exp=1718084786~hmac=93753d88a6e567147e5ac9909d10f2f243c083be9a896a3c1243f82c878aea57&w=826"
                alt="Mobile pay"
                className="w-full h-64 object-cover rounded-md mb-4"
              />
              <p>
                Mobile payments are getting easier and faster. See what’s new
                and notable in payment apps, while learning how to make them
                more secure, too.
              </p>
            </div>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h3 className="text-xl font-semibold mb-2">
              8 cyber security tips for business travelers
            </h3>
            <p className="text-gray-600">
              Published: August 08, 2018 · 4 min read
            </p>
            <div className="mt-4">
              <img
                src="https://img.freepik.com/free-vector/laptop-with-gps-navigation-software_24877-51529.jpg?t=st=1718081219~exp=1718084819~hmac=a7cf88b184df46b6251d639414f1748efce0c47446f07a412a27aca155aab5a0&w=740"
                alt="Cyber security tips for travelers"
                className="w-full h-64 object-cover rounded-md mb-4"
              />
              <p>
                Whether you're a regular business traveler, or a high-tech
                adventure seeker, traveling particularly abroad poses unique
                cyber security threats. Business travelers are especially
                vulnerable because they often carry sensitive information.
              </p>
            </div>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h3 className="text-xl font-semibold mb-2">
              Connected toys and what you need to know about them
            </h3>
            <p className="text-gray-600">
              Published: August 08, 2018 · 2 min read
            </p>
            <div className="mt-4">
              <img
                src="https://img.freepik.com/free-photo/side-view-woman-with-laptop-old-items_23-2150323436.jpg?t=st=1718081253~exp=1718084853~hmac=962a88b7be917f0832fd28ce210c080c88d995273e94577f43a6a57500907e75&w=826"
                alt="Connected toys"
                className="w-full h-64 object-cover rounded-md mb-4"
              />
              <p>
                The Internet of Things (IoT) isn’t just some lofty concept about
                future integration of technology into the home. It is already
                here, and we’re already living it.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
