import React from "react";
import { useQuery, gql } from "@apollo/client";
import ReactMarkdown from "react-markdown";

import Wave from "../components/Wave/Wave";
import Navigation from "../components/Navigation/Navigation";
import Skill from "../components/Skill/Skill";
import "./About.scss";

const ABOUT = gql`
	query GetAbout {
		about {
			data {
				attributes {
					about
				}
			}
		}
	}
`;

export default function About() {
	const { loading, error, data } = useQuery(ABOUT);
	if (error) console.log(error);

	return (
		<>
			<Navigation />

			<Wave height="2rem" />

			<main className="main--about">
				<section className="container">
					<h2 className="bio__title">&#128214; - About Me</h2>
					{loading ? (
						<p>Loading...</p>
					) : (
						<ReactMarkdown
							children={data.about.data.attributes.about}
						/>
					)}
				</section>

				<aside className="container skills">
					<Skill skill="html" />
					<Skill skill="css" />
					<Skill skill="js" caption="es6" />
					<Skill skill="sass" />
					<Skill skill="react" />
					<Skill skill="firebase" />
					<Skill skill="graphql" />
					<Skill skill="git" />
				</aside>
			</main>
			<Wave flipped={true} />
		</>
	);
}
