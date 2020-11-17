import {
  FaTwitterSquare,
  FaLinkedin,
  FaGithubSquare,
  FaMedium,
  FaEnvelopeSquare
} from "react-icons/fa";


import classnames from "classnames";

export default function Media() {
  const icon_cls =
    "text-opacity-25 text-white h-8 w-8 mx-1 hover:text-opacity-100 cursor-pointer rounded-xl";
 
  return (
    <div>
      <div className={classnames("flex flex-row sm:justify-end")}>
      <a  href="mailto:azzeddine.chenine.pro@gmail.com">
          <FaEnvelopeSquare className={icon_cls} />
        </a>
        <a target="blank" href="https://twitter.com/azzeddineCH_">
          <FaTwitterSquare className={icon_cls} />
        </a>
        <a target="blank" href="https://www.linkedin.com/in/azzeddine-chenine/">
          <FaLinkedin className={icon_cls} />
        </a>
        <a target="blank" href="https://github.com/azzeddineCH">
          <FaGithubSquare className={icon_cls} />
        </a>
        <a target="blank" href="https://medium.com/@azzeddineCH_">
          <FaMedium className={icon_cls} />
        </a>
      </div>
    </div>
  );
}
