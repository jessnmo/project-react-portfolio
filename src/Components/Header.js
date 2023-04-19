import React from 'react';
import {
	StyledHeader,
	HeaderText,
	IconWrapper,
	Profile,
	HeaderIMG,
} from 'StyledComponents/Header.style';
import { FaLinkedin, FaGithubSquare, FaStackOverflow } from 'react-icons/fa';

const Header = () => {
	return (
		<StyledHeader>
			<HeaderText fontSize="3rem" fontWeight="800">
				Jessica Mo
				<span
					className="animation"
					style={{
						fontWeight: '600',
						fontSize: '2rem',
					}}
				>
					FrontEnd Developer
				</span>
				<span
					style={{
						fontWeight: '600',
						fontSize: '1.5rem',
					}}
				>
					with experience in Operations
				</span>
			</HeaderText>
			<IconWrapper>
				<a
					className="icon-hover"
					href="https://www.linkedin.com/in/jessica-mo-29508a85/"
					target="blank"
				>
					<FaLinkedin size="2rem" color="whitesmoke" />
				</a>

				<a
					className="icon-hover"
					href="https://github.com/jessnmo"
					target="blank"
				>
					<FaGithubSquare size="2rem" color="whitesmoke" />
				</a>

				<a
					className="icon-hover"
					href="https://stackoverflow.com/users/19384341/jmo"
					target="blank"
				>
					<FaStackOverflow size="2rem" color="whitesmoke" />
				</a>
			</IconWrapper>
			<HeaderIMG src="img/header.png" alt="header img" />
			<Profile
				src="img/profile-large.jpg"
				/* srcSet="profile-small.jpg 480w, profile-medium.jpg 768w, profile-large.jpg 1024w"
				sizes="(max-width: 480px) 100vw,
            (max-width: 768px) 90vw,
            1024px" */
				alt="profile img"
			/>
		</StyledHeader>
	);
};

export default Header;
