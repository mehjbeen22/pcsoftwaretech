import React from 'react';

const TermsOfUse = () => {
  return (
    <div className="bg-white text-black p-8">
      {termsOfUseContent.map((section, index) => (
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

export default TermsOfUse;

const termsOfUseContent = [
  {
    sectionTitle: 'Terms of Use',
    content: [
      'Please read these Terms of Use (“Terms”, “Terms of Use”) carefully before using the https://pcsoftwaretech.com/ website (the “Service”) operated by Pcsoftwaretech (“us”, “we”, or “our”).',
      'Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Service.',
      'By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.',
    ],
  },
  {
    sectionTitle: 'Accounts',
    content: [
      'When you create an account with us, you must provide us with information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.',
      'You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password, whether your password is with our Service or a third-party service.',
      'You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.',
    ],
  },
  {
    sectionTitle: 'Intellectual Property',
    content: [
      'The Service and its original content, features, and functionality are and will remain the exclusive property of Pcsoftwaretech and its licensors.',
    ],
  },
  {
    sectionTitle: 'Links To Other Web Sites',
    content: [
      'Our Service may contain links to third-party web sites or services that are not owned or controlled by Pcsoftwaretech.',
      'Pcsoftwaretech has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that Pcsoftwaretech shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.',
      'We strongly advise you to read the terms and conditions and privacy policies of any third-party web sites or services that you visit.',
    ],
  },
  {
    sectionTitle: 'Termination',
    content: [
      'We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.',
      'All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.',
      'We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.',
      'Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may simply discontinue using the Service.',
      'All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.',
    ],
  },
  {
    sectionTitle: 'Disclaimer',
    content: [
      'Your use of the Service is at your sole risk. The Service is provided on an “AS IS” and “AS AVAILABLE” basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement or course of performance.',
    ],
  },
  {
    sectionTitle: 'Governing Law',
    content: [
      'These Terms shall be governed and construed in accordance with the laws of the United States without regard to its conflict of law provisions.',
      'Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service, and supersede and replace any prior agreements we might have between us regarding the Service.',
    ],
  },
  {
    sectionTitle: 'Changes',
    content: [
      'We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.',
      'By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.',
    ],
  },
  {
    sectionTitle: 'Contact Us',
    content: [
      'If you have any questions about these Terms, please contact us.',
    ],
  },
];
