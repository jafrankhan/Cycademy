import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

import Footer from "components/footers/FiveColumnWithInputForm.js";
import { SectionHeading } from "components/misc/Headings";
import TwoColContactUsWithIllustration from "components/forms/TwoColContactUsWithIllustration";
import TwoColumnWithInput from "components/hero/TwoColumnWithInput";
import TwoColumnWithVideo from "components/hero/TwoColumnWithVideo";

import SettingParaphrasesComp from "components/hero/Setting ParaphrasesComp";
import CloudSecurityHero from "components/hero/Technical/CloudSecurityHero";

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
			<CloudSecurityHero></CloudSecurityHero>
			<Container>
				<ContentWithPaddingXl>
					<HeadingRow>
						<Heading></Heading>
					</HeadingRow>
					<Text>
						<h1>Introduction</h1>
						<p>
							Cloud computing offers potential benefits, including cost savings
							and better business outcomes for organisations. However, there are
							many information security risks that need to be carefully
							considered. The risks vary depending on the sensitivity of the
							data being stored or processed and how the selected cloud provider
							(also known as a cloud service provider) has implemented specific
							cloud services.
						</p>

						<h1>Overview of Cloud Computing</h1>
						<p>
							Cloud computing as an IT service delivery model is defined by the
							National Institute of Standards and Technology (NIST) as "a model
							that provides convenient, on-demand network access into a a shared
							pool of configurable computing resources (e.g., networks, servers,
							storage, applications, and services) that can be rapidly
							provisioned and released with an interactive or management effort
							with minimal service providers”. NIST specifies five
							characteristics of cloud computing:
						</p>
						<br></br>
						<img
							src="https://imgur.com/eB4ikg8.png"
							alt="On-Demand Self-Service"
						/>
						<h2>On-Demand Self-Service</h2>
						<p>
							Involves customers using a website or similar control panel
							interface to provide computing resources such as additional
							computers, network bandwidth, or user email accounts without
							requiring human interaction between the customers and the
							suppliers.
						</p>
						<br></br>
						<img
							src="https://imgur.com/bkbLSaJ.png"
							alt="Broad Network Access"
						/>
						<h2>Broad Network Access</h2>
						<p>
							Allows customers to access computing resources on networks such as
							the Internet from a variety of computing devices such as laptops
							and smartphones.
						</p>
						<br></br>
						<img src="https://imgur.com/7dvCYdo.png" alt="Resource Pooling" />
						<h2>Resource Pooling</h2>
						<p>
							Involves vendors using shared computing resources to provide cloud
							services to multiple customers. Virtualisation and multi-tenant
							mechanisms are often used to isolate and protect individual
							customers and their data from other customers, and to trick
							customers into believing they are the only users of the shared
							computer or software applications.
						</p>
						<br></br>
						<img src="https://imgur.com/Mbew3A4.png" alt="Rapid Elasticity" />
						<h2>Rapid Elasticity</h2>
						<p>
							Allows the amount of compute processing, storage, and available
							network bandwidth to be rapidly and automatically increased and
							decreased based on customers needs.
						</p>
						<br></br>
						<img
							src="https://imgur.com/zI0TB0r.png"
							alt="Pay-Per-Use Measured Service"
						/>
						<h2>Pay-Per-Use Measured Service</h2>
						<p>
							Customers only pay for the computing resources they actually use
							and that they can monitor their usage. This is similar to using
							domestic utilities such as electricity and the usage of water.
						</p>

						<h1>Cloud Computing Services</h1>
						<p>
							Cloud Computing refers to the process of accessing resources,
							software, and databases over the Internet and outside the
							boundaries of local hardware restrictions. This technology gives
							organisations the flexibility to scale their operations by
							offloading some, if not most, of the management of their
							infrastructure to third-party hosting services. The more popular
							and widely adopted cloud computing services are:
						</p>
						<br></br>
						<img
							src="https://imgur.com/1rQwsuh.png"
							alt="Remain Vigilant and Informed"
						/>
						<h2>Infrastructure-as-a-Service (Iaas)</h2>
						<p>
							It refers to the provider that provides the physical computer
							hardware, including CPU processing, memory, data storage, and
							networking. Vendors can then share their hardware among many
							so-called “multi-tenant” customers using virtualisation software.
							IaaS allows customers to run operating systems and software
							applications of their choice. Normally, the vendor controls and
							maintains the physical hardware of the computer, while the
							customer controls and maintains the operating systems and software
							applications. An example of an IaaS provider's service is Amazon
							Elastic Compute Cloud (EC2).
						</p>
						<br></br>
						<img
							src="https://imgur.com/xBwzt3t.png"
							alt="Remain Vigilant and Informed"
						/>
						<h2>Platform-as-a-Service (Paas)</h2>
						<p>
							It refers to a provider that provides the infrastructure as a
							service, on top of operating systems and server applications such
							as web servers. PaaS allows customers to use a provider's cloud
							infrastructure to deploy web applications and other software
							developed by customers using a vendor-supported programming
							language. Typically, the vendor controls and maintains the
							physical computer hardware, the operating system, and the server
							application, while the customers control and maintain only the
							software applications developed by themselves.
						</p>
						<br></br>
						<img
							src="https://imgur.com/DeM7WO9.png"
							alt="Remain Vigilant and Informed"
						/>
						<h2>Software-as-a-Service (Saas)</h2>
						<p>
							It refers to vendors using its cloud infrastructure and cloud
							platform to deliver software applications to the customers. Sample
							applications include email and an environment for users to
							collaborate on developing and sharing files such as documents and
							spreadsheets. These end-user applications are typically accessed
							by the user through a web browser, eliminating the need for the
							user to install or maintain additional software. Vendors control
							and maintain the physical computer hardware, operating systems,
							and software applications. Customers only control and manage
							user-specific application configuration settings, such as creating
							distribution lists of email addresses. Examples of SaaS provider
							services include Salesforce.com Customer Relationship Management
							(CRM), Google Docs, Google Gmail, and Microsoft 365.
						</p>

						<h1>
							Cloud Computing Security Consideration for Small and Medium
							Enterprises (SMEs)
						</h1>
						<p>
							Cloud security is of utmost importance to protect sensitive data
							and ensure the integrity of services hosted in cloud environments.
							Here are some common practices to enhance cloud security:
						</p>
						<h2>Multi-Factor Authentication (MFA)</h2>
						<p>
							Implement MFA for all user accounts accessing cloud resources.
							This extra layer of authentication reduces the risk of
							unauthorized access, even if credentials are compromised.
						</p>
						<h2>Encryption</h2>
						<p>
							Use strong encryption methods to protect data both at rest and in
							transit within the cloud. This ensures that data remains secure
							even if unauthorized users gain access to the cloud
							infrastructure.
						</p>
						<h2>Identity and Access Management (IAM)</h2>
						<p>
							Establish granular access controls to restrict permissions and
							limit user access to only what is necessary. Regularly review and
							revoke unnecessary privileges to reduce the attack surface.
						</p>
						<h2>Regular Auditing and Monitoring</h2>
						<p>
							Implement continuous monitoring and auditing of cloud resources to
							identify suspicious activities or potential security breaches
							promptly.
						</p>
						<h2>Secure API Usage</h2>
						<p>
							If your applications use APIs to communicate with the cloud,
							ensure that API access is restricted and properly authenticated to
							prevent unauthorized access and data exposure.
						</p>
						<h2>Data Backup and Recovery</h2>
						<p>
							Regularly backup critical data in the cloud and test the recovery
							process to ensure that data can be restored in case of any data
							loss or ransomware attack.
						</p>
						<h2>Vendor Security Assessment</h2>
						<p>
							If using a third-party cloud service provider, conduct thorough
							security assessments to ensure they adhere to industry best
							practices and compliance standards.
						</p>
						<h2>Employee Training</h2>
						<p>
							Educate employees about cloud security best practices, including
							recognizing phishing attempts and handling sensitive data
							securely.
						</p>
						<h2>Incident Response Plan</h2>
						<p>
							Develop and practice an incident response plan specifically
							tailored for cloud-related security incidents to ensure a swift
							and effective response.
						</p>

						<h1>Moving Forward</h1>
						<p>
							Cloud security is an ongoing effort, and organizations must remain
							vigilant against evolving threats. By implementing robust security
							measures and staying up-to-date with cloud security best
							practices, you can create a secure and resilient cloud environment
							for your data and applications.
						</p>	
						<br></br>
						<br></br>
						<br></br>
						<h1> Game</h1>
						<iframe
							src="https://rmcloudsecurityincident.web.app"
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
