import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="bg-white text-black p-8">
      {privacyPolicyContent.map((section, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{section.sectionTitle}</h2>
          {section.content.map((paragraph, idx) => (
            <p key={idx} className="mb-2">
              {paragraph}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default PrivacyPolicy;
const privacyPolicyContent = [
  {
    sectionTitle: 'Introduction',
    content: [
      'Pcsoftwaretech (“us”, “we”, or “our”) operates the Pcsoftwaretech website (the “Service”).',
      'This page informs you of our policies regarding the collection, use and disclosure of Personal Information when you use our Service.',
      'We will not use or share your information with anyone except as described in this Privacy Policy.',
      'We use your Personal Information for providing and improving the Service. By using the Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, accessible at https://avsoftwareshop.com/',
    ],
  },
  {
    sectionTitle: 'Information Collection And Use',
    content: [
      'While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information (“Personal Information”) may include, but is not limited to:',
      '• Name',
      '• Email address',
      '• Telephone number',
      '• Address',
    ],
  },
  {
    sectionTitle: 'Log Data',
    content: [
      'We collect information that your browser sends whenever you visit our Service (“Log Data”). This Log Data may include information such as your computer’s Internet Protocol (“IP”) address, browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages and other statistics.',
    ],
  },
  {
    sectionTitle: 'Cookies',
    content: [
      'Cookies are files with small amount of data, which may include an anonymous unique identifier. Cookies are sent to your browser from a web site and stored on your computer’s hard drive.',
      'We use “cookies” to collect information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.',
    ],
  },
  {
    sectionTitle: 'Service Providers',
    content: [
      'We may employ third party companies and individuals to facilitate our Service, to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used.',
      'These third parties have access to your Personal Information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.',
    ],
  },
  {
    sectionTitle: 'Security',
    content: [
      'The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.',
    ],
  },
  {
    sectionTitle: 'Links To Other Sites',
    content: [
      'Our Service may contain links to other sites that are not operated by us. If you click on a third party link, you will be directed to that third party’s site. We strongly advise you to review the Privacy Policy of every site you visit.',
      'We have no control over, and assume no responsibility for the content, privacy policies or practices of any third party sites or services.',
    ],
  },
  {
    sectionTitle: 'Children’s Privacy',
    content: [
      'Our Service does not address anyone under the age of 18 (“Children”).',
      'We do not knowingly collect personally identifiable information from children under 18. If you are a parent or guardian and you are aware that your child has provided us with Personal Information, please contact us. If we discover that a child under 18 has provided us with Personal Information, we will delete such information from our servers immediately.',
    ],
  },
  {
    sectionTitle: 'Compliance With Laws',
    content: [
      'We will disclose your Personal Information where required to do so by law or subpoena.',
    ],
  },
  {
    sectionTitle: 'Changes To This Privacy Policy',
    content: [
      'We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.',
      'You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.',
    ],
  },
  {
    sectionTitle: 'Contact Us',
    content: [
      'If you have any questions about this Privacy Policy, please contact us.',
    ],
  },
];