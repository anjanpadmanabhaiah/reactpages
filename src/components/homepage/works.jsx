import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./facebook.png"
								alt="DIT"
								className="work-image"
							/>
							<div className="work-title">Dependable IT</div>
							<div className="work-subtitle">
								Technical Support Representative
							</div>
							<div className="work-duration">11/2022 - 04/2024</div>
						</div>

						<div className="work">
							<img
								/*src="./twitter.png"*/
								alt="CGI"
								className="work-image"
							/>
							<div className="work-title">CGI Inc.</div>
							<div className="work-subtitle">
								Full Stack Developer
							</div>
							<div className="work-duration">01/2021 - 07/2022</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
