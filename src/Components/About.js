import React from 'react';
import GlobalStyle, {
	SectionContainer,
	SectionParagraph,
	Title,
} from 'StyledComponents/GlobalStyle';
const About = () => {
	return (
		<SectionContainer backgroundColor="rgb(238, 238, 238)">
			<Title>About</Title>
			<SectionParagraph>
				<strong>Hi there, </strong>I'm Jessica. An Upcoming Frontend Developer
				who recently finished studying at Technigo Coding Bootcamp 🎉. I have
				almost 6 years experience in Tech Talent Acquisition operations in major
				tech companies. Working with developers on a daily basis has inspired me
				to become a developer myself; not only because of my passion and
				curiosity for coding, but also the desire to explore the unknown,
				continuous learning and feeling supported by the tech community.
			</SectionParagraph>
			<GlobalStyle />
		</SectionContainer>
	);
};

export default About;
