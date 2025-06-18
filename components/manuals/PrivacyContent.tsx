import React from 'react';
import styles from './PrivacyContent.module.css';

export default function PrivacyContent() {
    return (
        <div className=" montserrat-regular text-white max-w-4xl mx-auto px-4 py-8">
            <section className="mb-8">
                <p className="mb-4">
                    Sightline Wealth Advisors LLC ("Sightline" or the "Advisor") is committed to safeguarding the use of personal information of our Clients (also referred to as "you" and "your") that we obtain as your Investment Advisor, as described here in our Privacy Policy ("Policy").
                </p>
                <p className="mb-4">
                    Our relationship with you is our most important asset. We understand that you have entrusted us with your private information, and we do everything that we can to maintain that trust. Sightline (also referred to as "we", "our" and "us") protects the security and confidentiality of the personal information we have and implements controls to ensure that such information is used for proper business purposes in connection with the management or servicing of our relationship with you.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl text-[#63a6ca] font-semibold mb-4">Information We Collect</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-50 p-4 rounded">
                        <h3 className="font-semibold text-[#63a6ca] mb-3">From You:</h3>
                        <ul className="list-disc pl-5 text-black space-y-2">
                            <li>Social security or taxpayer identification number</li>
                            <li>Name, address and phone number(s)</li>
                            <li>E-mail address(es)</li>
                            <li>Account information</li>
                            <li>Assets and liabilities</li>
                            <li>Income and expenses</li>
                            <li>Investment activity</li>
                            <li>Investment experience and goals</li>
                        </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded">
                        <h3 className="font-semibold mb-3 text-[#63a6ca]">From Other Sources:</h3>
                        <ul className="list-disc pl-5 text-black space-y-2">
                            <li>Custody, brokerage and advisory agreements</li>
                            <li>Other advisory agreements and legal documents</li>
                            <li>Account applications and forms</li>
                            <li>Investment questionnaires and suitability documents</li>
                            <li>Transactional information</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold text-[#63a6ca] mb-4">Information Sharing Practices</h2>
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-gray-100 text-[#63a6ca]">
                                <th className="border p-3 text-left">Basis For Sharing</th>
                                <th className="border p-3 text-left">Do we share?</th>
                                <th className="border p-3 text-left">Can you limit?</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border p-3">Servicing our Clients</td>
                                <td className="border p-3">Yes</td>
                                <td className="border p-3">No</td>
                            </tr>
                            <tr>
                                <td className="border p-3">Marketing Purposes</td>
                                <td className="border p-3">No</td>
                                <td className="border p-3">Not Shared</td>
                            </tr>
                            <tr>
                                <td className="border p-3">Authorized Users</td>
                                <td className="border p-3">Yes</td>
                                <td className="border p-3">Yes</td>
                            </tr>
                            <tr>
                                <td className="border p-3">Information About Former Clients</td>
                                <td className="border p-3">No</td>
                                <td className="border p-3">Not Shared</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
 <section className="mb-8">
                <h2 className="text-2xl font-semibold text-[#63a6ca] mb-4">Changes to our Privacy Policy</h2>
       
                    <p className="mb-4">
                    We will send you a copy of this Policy annually for as long as you maintain an ongoing relationship with us.

Periodically we may revise this Policy, and will provide you with a revised policy if the changes materially alter the previous Privacy Policy. We will not, however, revise our Privacy Policy to permit the sharing of non-public personal information other than as described in this notice unless we first notify you and provide you with an opportunity to prevent the information sharing.


                </p>
            </section>
           
        </div>
    );
}
