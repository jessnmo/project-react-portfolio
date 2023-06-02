import styled from 'styled-components';

export const StyledHeader = styled.div`
	background: lightblue;
	position: relative;
	height: 40vh;
`;

export const Profile = styled.img`
	height: 200px;
	width: 200px;
	position: absolute;
	right: 100px;
	top: 60%;
	border: 2px solid whitesmoke;
	border-radius: 50%;
	object-fit: cover;
	@media (max-width: 768px) {
		display: none;
	}
`;

export const HeaderIMGWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	//position: relative;
`;

export const HeaderIMG = styled.img`
	position: absolute;
	height: 400px;
	width: 400px;
	right: 50%;
	top: 50%;
	transform: translate(50%, -50%);

	@media (max-width: 768px) {
		position: absolute;
		height: 300px;
		width: 300px;
		right: 20%;
		top: 60%;
	}

	@media (max-width: 627px) {
		display: none;
	}
`;

export const HeaderText = styled.div`
	font-size: ${(props) => props.fontSize};
	position: absolute;
	top: 5rem;
	left: 4rem;
	color: whitesmoke;
	font-weight: ${(props) => props.fontWeight};
	display: flex;
	flex-direction: column;
	gap: 5px;

	@media (max-width: 576px) {
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;

export const IconWrapper = styled.div`
	display: flex;
	flex-wrap: nowrap;
	justify-content: flex-end;
	gap: 10px;
	padding-top: 5rem;
	padding-right: 5rem;

	@media (max-width: 576px) {
		display: flex;
		align-items: center;
		justify-content: center;
		padding-top: 2rem;
	}

	@media (max-width: 768px) {
		padding-top: 2rem;
	}
`;
