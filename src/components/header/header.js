import az from "../../img/az.jpeg";
import classnames from "classnames";
import bg from "../../img/bg.png";
import Media from "./media";

export default function Header() {
  const pad_cls = "pl-6 sm:pl-12 lg:pr-12";
  const text_cls = "text-white font-thin text-lg";
  return (
    <div
      className="w-full pr-12 bg-cover bg-no-repeat lg:w-1/3"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className="w-full relative mt-12 mb-6 lg:fixed lg:w-1/3 lg:h-screen">
        <div
          className={classnames(
            pad_cls,
            "flex justify-end flex-col text-left lg:text-right"
          )}
        >
          <div className="inline">
            <img
              src={az}
              className={classnames("inline-block h-32 w-32 rounded-xl")}
            />
          </div>

          <div className="mt-4">
            <h1 className={classnames("text-white font-bold text-3xl mb-2")}>
              Azzeddine CHENINE
            </h1>
            <h1 className={classnames(text_cls)}>Software Engineer</h1>
            <h1 className={classnames(text_cls)}>AI Research Engineer at InstaDeep</h1>
            <h1 className={classnames(text_cls)}>Google Developers Group Algiers Alumni</h1>
          </div>

          <div className={classnames("mt-8")}>
            <a
              className={classnames(
                "gras inline-block bg-white hover:bg-gray-200 px-6 py-2 rounded-xl text-lg cursor-pointer"
              )}
              download="AZZEDDINE_CHENINE_CV"
              target="blank"
              href="https://drive.google.com/file/d/15wEYyt8sNcTMLadEv8HPNx7E9fakf_xA/view?usp=sharing"
            >
              Download my CV
            </a>
          </div>
        </div>

        <div
          className={classnames(
            pad_cls,
            "bottom-0 right-0 mt-6 sm:absolute lg:mb-48 "
          )}
        >
          <Media />
        </div>
      </div>
    </div>
  );
}
