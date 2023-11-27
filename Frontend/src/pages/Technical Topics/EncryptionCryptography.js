import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import { SectionHeading } from "components/misc/Headings";
import TwoColContactUsWithIllustration from "components/forms/TwoColContactUsWithIllustration";
import TwoColumnWithInput from "components/hero/TwoColumnWithInput";
import TwoColumnWithVideo from "components/hero/TwoColumnWithVideo";

import SettingParaphrasesComp from "components/hero/Setting ParaphrasesComp";
import EncryptionCryptographyHero from "components/hero/Technical/EncryptionCryptographyHero";

const HeadingRow = tw.div`flex`;
const Heading = tw(SectionHeading)`text-gray-900 mb-10`;
const Text = styled.div`
	${tw`text-lg  text-gray-800`}
	p {
		${tw`mt-2 leading-loose`}
	}
	h1 {
		${tw`text-3xl font-bold mt-10`}
	}
	h2 {
		${tw`text-2xl font-bold mt-8`}
	}
	h3 {
		${tw`text-xl font-bold mt-6`}
	}
	ul {
		${tw`list-disc list-inside`}
		li {
			${tw`ml-2 mb-3`}
			p {
				${tw`mt-0 inline leading-normal`}
			}
		}
	}
`;

export default () => {
	return (
		<AnimationRevealPage>
			<EncryptionCryptographyHero></EncryptionCryptographyHero>
			<Container>
				<ContentWithPaddingXl>
					<HeadingRow>
						<Heading></Heading>
					</HeadingRow>
					<Text>
						<h1>Understanding Encryption and Cryptography</h1>
						<p>
							Encryption and cryptography play a crucial role in securing
							sensitive data and communications. As technical users, it's
							essential to grasp the fundamentals of encryption and how it works
							to safeguard information from unauthorised access. Below are key
							concepts to help you comprehend encryption and its practical
							applications:
						</p>

						<h2>Purpose of Cryptography</h2>
						<p>
							The purpose of cryptography is to provide confidentiality,
							integrity, authentication, and non-repudiation of data. In doing
							so, confidentiality protects data by making it unreadable by all
							except authorised entities, and integrity protects data from
							accidental or intentional manipulation by entities. Authentication
							ensures that an entity is who it claims to be, and the
							non-repudiation feature provides evidence that an entity has
							performed a particular action.
						</p>

						<br></br>
						<img src="https://imgur.com/PnHMwEO.png" alt="Cryptography" />
						<h2>Cryptographic Key Management Processes and Procedures</h2>
						<p>
							Well documented cryptographic key management processes and
							procedures can support the secure use and management of
							cryptographic keys and associated hardware and software. In doing
							so, cryptographic key management processes and procedures shall
							include generation, registration, distribution, installation, use,
							protection, storage, access, retrieval, and destruction of
							cryptographic keys.
						</p>

						<h2>Purpose of Encryption</h2>
						<p>
							Encryption is the process of converting plaintext data into
							ciphertext, making it unreadable to unauthorized users. The data
							can only be decrypted back to its original form using a secret key
							or password known as the decryption key.
						</p>
						<br></br>
						<img
							src="https://imgur.com/IN4oF0Y.png"
							alt="Symmetric vs. Asymmetric Encryption"
						/>
						<h2>Symmetric vs. Asymmetric Encryption</h2>
						<p>
							In symmetric encryption, the same key is used for both encryption
							and decryption. It offers fast encryption and decryption processes
							but requires secure key distribution to avoid compromise.
							Asymmetric encryption, on the other hand, uses a pair of keys – a
							public key for encryption and a private key for decryption. The
							public key can be shared openly, while the private key must be
							kept secret. This method provides better security for key
							management and is commonly used for secure communication and
							digital signatures.
						</p>
						<br></br>
						<img
							src="https://imgur.com/1WW9kFm.png"
							alt="Encrypting Data at Rest"
						/>
						<h2>Encrypting Data at Rest</h2>
						<p>
							When encryption is applied to data in storage, it provides an
							extra layer of protection against unauthorised access by enemies.
							In doing so, it is important that full disk encryption is used as
							it provides a higher level of protection than file-based
							encryption. This is because while file-based encryption can
							encrypt individual files, unencrypted copies of files can be left
							in temporary locations used by the operating system. When
							selecting cryptographic equipment or software for this purpose,
							the level of assurance required will depend on the sensitivity or
							classification of the data.
						</p>
						<br></br>
						<img
							src="https://imgur.com/CiolvFp.png"
							alt="Encrypting Data in Transit"
						/>
						<h2>Encrypting Data in Transit</h2>
						<p>
							When data is transferred across network infrastructure, encryption
							should be used to protect the data from unauthorised access or
							manipulation. When selecting cryptographic equipment or software
							for this purpose, the level of assurance required will depend on
							the sensitivity or classification of the data and the environment
							in which it is applied.
						</p>

						<h2>Applications of Encryption</h2>
						<p>Encryption is widely used in various applications, including:</p>
						<li>
							Secure Communications: Encrypting emails, instant messages, and
							other forms of digital communication to protect sensitive content
							from eavesdroppers.
						</li>
						<li>
							Secure Data Storage: Encrypting files, databases, or entire
							storage devices to prevent unauthorized access to stored data.
						</li>
						<li>
							Virtual Private Networks (VPNs): Utilizing encryption to establish
							secure connections between remote users and corporate networks.
						</li>
						<li>
							Transport Layer Security (TLS/SSL): Ensuring secure connections
							between web browsers and websites, safeguarding data during online
							transactions.
						</li>

						<h2>Public Key Infrastructure (PKI)</h2>
						<p>
							Public Key Infrastructure (PKI) is a framework that enables secure
							communication in asymmetric encryption. It involves the use of
							digital certificates issued by a trusted Certificate Authority
							(CA) to verify the authenticity of public keys and the identities
							of parties in communication.
						</p>

						<h2>Key Management</h2>
						<p>
							Proper key management is crucial in encryption. It involves
							generating, storing, distributing, and revoking encryption keys
							securely to prevent unauthorized access to sensitive data.
						</p>
						<h1>Moving Forward</h1>
						<p>
							As technical users, understanding encryption and cryptography
							empowers you to implement robust security measures for data
							protection and secure communication. Incorporating encryption in
							your applications, systems, and communication channels enhances
							the confidentiality and integrity of information, making it
							significantly harder for malicious actors to compromise sensitive
							data.
						</p>

				
				

						<br></br>
						<br></br>
						<br></br>
						<h1> Game</h1>
						<iframe
							src="https://rmencryption.web.app"
							title="Embedded Website"
							width="100%"
							height="800"
							style={{ border: "none" }} // Optional: Remove iframe border
						/>
					</Text>
				</ContentWithPaddingXl>
			</Container>
			<Footer />
		</AnimationRevealPage>
	);
};
