import React from 'react';

const WarrantyPolicy = () => {
  return (
    <div className="bg-white text-black p-8">
      {warrantyPolicyContent.map((section, index) => (
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

export default WarrantyPolicy;

const warrantyPolicyContent = [
  {
    sectionTitle: 'Pcsoftwaretech 30-day Limited Warranty',
    content: [
      'Pcsoftwaretech 30-day limited warranty is a defective exchange policy that provides for replacement (at our sole discretion) of software that has been confirmed as defective by either the manufacturer or Pcsoftwaretech. Due to licensing and copyright laws, we do not accept returns on software once a package has been opened or downloaded and installed in the case on products sent via electronic delivery. Defective software will be exchanged for the same title only according to Pcsoftwaretech limited 30-day warranty described above. Terms and conditions may vary by product or manufacturer. Pcsoftwaretech will assist customers whenever possible in gaining satisfaction with product manufacturers.',
      'Products returned for exchange must be in new condition, original packaging and include all disks, registration cards, packing materials, and other accessories and be received within 30 days of the invoice date. We reserve the right to refuse for return or charge a restocking fee for damaged or incomplete returns.',
    ],
  },
  {
    sectionTitle: 'Order Confirmation Number',
    content: [
      'All returns require an Order Confirmation Number. Please obtain an OCN number by sending an e-mail to info@pcsoftwaretech.com. In your e-mail, please include your original order number, the title of the product you wish to return, the condition of the products you would like to send back, and the reason for the return. Please DO NOT ship the product back without an OCN number. We WILL NOT be responsible for the product that is returned to us without an OCN number. For all returns, shipping is pre-paid by the customer.',
      'If your return or exchange appears to be within our guidelines, we will then issue you an OCN number and ship-to address via e-mail within a week of your request. All OCN numbers must be clearly written on the outside of the package and must be returned to us within 15 days of the order date. Please note: issuance of an OCN number does not guarantee acceptance of your return or exchange. We cannot accept opened, non-defective merchandise for credit or exchange. OEM and DSP software cannot be returned.',
    ],
  },
  {
    sectionTitle: 'Return and Exchange Conditions',
    content: [
      'Products for return or exchange must be in new condition with all accessories, packing materials, disks, key codes, cards, manuals, and any other materials included. Returns should be sent freight prepaid by ground service. We will only reimburse the freight charges if we deem that the return was caused by our error, i.e., incorrect product, defective product, etc. All non-defective returns will incur a 15% restocking fee on the line item amount.',
    ],
  },
  {
    sectionTitle: 'Download Products',
    content: [
      'All software products delivered electronically are final sale once the Product Activation Code has been delivered, except in the case of defective items. For more information please contact us at info@pcsoftwaretech.com.',
      'It is your responsibility to ensure that you have the computer knowledge to download and install a software program on your machine.',
      'All the software products offered as “Download” have very simple download and installation instructions, directly from the manufacturer. If you are having difficulty installing the software purchased, we will do everything in our power to troubleshoot with you in order to help you get started. If necessary, we will put you directly in contact with the manufacturer for further support.',
      "We do not offer exchanges or give refunds for wrongful purchases as it is the buyer's responsibility to check the system requirements of any product prior to purchase.",
    ],
  },
];
