import { Link } from "react-router-dom";
import { SVGProps } from "react";
interface CheckIconProps extends SVGProps<SVGSVGElement> {}

function CheckIcon(props: CheckIconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default function Component() {
  return (
    <section className="section-container">
      <div className="content-container">
        <div className="layout-grid">
          <img
            alt="Project Image"
            className="project-image"
            height="310"
            src="/placeholder.svg"
            width="550"
          />
          <div className="text-container">
            <div className="header-container">
              <h2 className="project-title">Project Overview</h2>
              <p className="project-description">
                This project is a full-stack application built with modern web
                technologies. It's designed to provide a seamless user
                experience.
              </p>
            </div>
            <ul className="features-list">
              <li>
                <CheckIcon className="check-icon" />
                Built with React and Node.js
              </li>
              <li>
                <CheckIcon className="check-icon" />
                Responsive and accessible design
              </li>
              <li>
                <CheckIcon className="check-icon" />
                Integrated with third-party APIs
              </li>
            </ul>
            <div className="buttons-container">
              <Link className="view-project-button" to="#">
                View Project
              </Link>
              <Link className="source-code-button" to="#">
                Source Code
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
