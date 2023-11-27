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
import NetworkSecurityHero from "components/hero/Technical/NetworkSecurityHero";

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
			<NetworkSecurityHero></NetworkSecurityHero>
			<Container>
				<ContentWithPaddingXl>
					<HeadingRow>
						<Heading></Heading>
					</HeadingRow>
					<Text>
						<h1>Understanding Network Security</h1>
						<p>
							Network security is a crucial aspect of safeguarding sensitive
							information and preventing unauthorised access to systems and
							data. As technical users, it's essential to be aware of common
							threats and best practices in network security. Here are some key
							points to consider:
						</p>
						<br></br>
						<img src="https://imgur.com/VkuBBfW.png" alt="Network Perimeter Protection" />
						<h2>Network Perimeter Protection</h2>
						<p>
							Implementing firewalls and intrusion detection/prevention systems
							at the network perimeter can help filter and block malicious
							traffic, reducing the risk of unauthorized access and
							cyberattacks.
						</p>
						<h2>Secure Network Architecture</h2>
						<p>
							Designing a secure network architecture with the principle of
							least privilege in mind ensures that access to critical resources
							is limited only to authorized personnel, reducing the attack
							surface.
						</p>
						<br></br>
						<img src="https://imgur.com/gTNtCkU.png" alt="Network Segmentation & Segregation" />
						<h2>Network Segmentation & Segregation</h2>
						<p>
							Network segmentation and segregation is one of the most effective controls to prevent viruses from easily 
							spreading through networks after initial access is obtained. In order to achieve this, networks can be separated 
							into multiple network zones to protect servers, services, and data. For example, the administrative infrastructure 
							used to manage mission-critical, high-value, and regular servers should be segregated from each other. In addition, all 
							administrative infrastructure must be segregated from other network assets. 
						</p>
						<br></br>
						<img src="https://imgur.com/WcTKgEL.png" alt="Virtual Local Area Networks (VLANs)" />
						<h2>Virtual Local Area Networks (VLANs)</h2>
						<p>
							VLANs can be used to perform segmentation and isolation of networks as long as the networks belong to the same security domain. 
							In such cases, if a data spill occurs, the impact will be less if the spill occurs between two networks of different classifications or between an 
							organisation's network and public network. If an organisation chooses to manage the risk of deploying VLANs between networks in different security 
							domains, such as within the same classification, additional controls for network devices would apply. These include not sharing the VLAN backbone 
							and terminating VLANs on separate physical network interfaces. 
						</p>
						<h2>Patch Management</h2>
						<p>
							Regularly updating and patching network devices and software is
							crucial in addressing known vulnerabilities and reducing the risk
							of exploitation by attackers.
						</p>
						<h2>Network Monitoring and Logging</h2>
						<p>
							Implementing robust network monitoring and logging mechanisms
							helps detect suspicious activities and provides valuable data for
							incident response and forensic investigations.
						</p>
						<h2>Network Access Controls</h2>
						<p>
							If adversaries have lesser ability to physically connect unauthorised network devices to the network, they also have reduced chances to compromise the network. 
							Network access controls can not only prevent unauthorised physical access to the network, but also prevent employees from accidentally connecting one network 
							to another. In addition, network access controls can also be useful in restricting the flow of network traffic between the network segments. 
						</p>

						<img src="https://imgur.com/rZxdsaJ.png" alt="Network Security" />
						<h1>Key Tools of Network Security</h1>
						<p>
							A layered approach to network security deploys controls at multiple points in the network, to provide a comprehensive threat control and access control. 
							Here are some key tools to consider:
						</p>
						<h2>Firewall</h2>
						<p>
							Firewalls establish a barrier between trusted and untrusted areas of the network. Therefore, the firewall performs access control and macro segmentation based on the IP subnet. 
							The same firewall can also perform more granular segmentation and known as micro-segmentation. 
						</p>
						<h2>Load Balancer</h2>
						<p>
							The load balancer distributes the load based on metrics. By implementing specific mitigation techniques, load balancers can go beyond the traditional load balancing and provide the 
							ability to absorb certain attacks, such as a big volume of DDoS attacks.
						</p>
						<h2>Intrusion Detection System (IDS)/ Intrusion Prevention System (IPS)</h2>
						<p>
							IDS/IPS are deployed behind firewalls that provide protocol analysis and signature matching on different parts of the data packet. Protocol analysis is the testing of being compliant to 
							the stated specifications of a protocol. Signature matching helps to prevent known attacks like SQL injection, which is to send malicious SQL code to the backend database to access 
							sensitive information not meant for the public. 
						</p>
						<h2>Sandbox</h2>
						<p>
							A sandbox is comparative to an IDS/IPS, but that it does not depend on the signatures. A sandbox can imitate an end-system environment and decide if a malware is attempting, 
							to execute harbour filters. 
						</p>
						<h2>Network Traffic Analysis (NTA)/ Network Detention & Response (NDR)</h2>
						<p>
							NTA/NDR scans the traffic (or traffic records such as NetFlow) and utilises machine learning calculations and statistical techniques to assess peculiarities and decide in case a danger exists. 
							NTA/NDR begins by deciding a baseline. Using that baseline, it recognises peculiarities such as traffic spikes or sporadic communication. 
						</p>

						<h1>Moving Forward</h1>
						<p>
							As technical users, your understanding and implementation of
							network security measures play a vital role in protecting your
							organisation's infrastructure and sensitive data. Regularly review
							and update your network security policies and practices to adapt
							to evolving threats and ensure a robust defense against
							cyber attacks. Remember that a proactive approach to network
							security is key to mitigating risks and safeguarding your
							organisation's assets.
						</p>
			
						<br></br>
						<br></br>
						<br></br>
						<h1> Game</h1>
						<iframe
							src="https://rmnetworksecur.web.app"
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
