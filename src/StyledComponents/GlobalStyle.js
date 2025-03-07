import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    padding:0;
    margin:0;
}
body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
}

`;

export const SectionContainer = styled.section`
	background-color: ${(props) => props.backgroundColor};
	width: 100vw;
	height: auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 25px 80px 25px 80px;
	overflow: auto;
`;

export const SectionParagraph = styled.p`
	color: #21130d;
	font-size: 1rem;
	font-weight: 400;
	line-height: 150%;
	align-items: center;
	padding: 2rem;
	height: auto;
	padding-left: 10px;
	padding-right: 10px;

	@media (min-width: 768px) {
		height: 200px;
		padding: none;
	}
`;

export const Title = styled.h1`
	/* background-color: #0008c1;
	color: #e6cba8;
	font-size: 1.5rem;
	font-weight: 700;
	align-self: center;
	padding: 0.8rem;
	border-radius: 10px;
	 */
	font-size: 1.5rem;
	font-weight: 700;
	color: rgb(86, 64, 61);
	margin-bottom: 20px;
`;

export const SubTitle = styled.h2`
	font-size: 1rem;
	margin: 20px;
`;

export const ProjectDesc = styled.a`
	color: grey;
	text-align: center;
	text-decoration: none;
	font-weight: 550;
	line-height: 150%;
	padding: 20px;
	cursor: pointer;

	&:hover {
		color: #5f9df7;
	}
`;

export const TagWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin: 10px;
`;
export const Tags = styled.p`
	color: #fdf0e0;
	font-weight: bold;
	background-color: #5f9df7;
	font-size: 1rem;
	line-height: 1rem;
	padding: 4px;
	margin: 3px;
	border-radius: 5px;
`;

export const Footer = styled.div`
	background-color: lightblue;
	width: 100vw;
	height: 30vh;
	display: flex;
	text-align: center;
	flex-direction: column;
	overflow: auto;
	padding: 2rem;
`;

export default GlobalStyle;
