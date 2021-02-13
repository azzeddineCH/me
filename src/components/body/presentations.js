import Presentation from "./presentation";

const pres = [
  {
    src: "//www.slideshare.net/slideshow/embed_code/key/lQfytxNOtj9Rw8",
    title: "AI Evreytime evreywhere 2020, Deep Q-learning",
  },
  {
    src: "//www.slideshare.net/slideshow/embed_code/key/spUr3nfwfdoRum",
    title: "MENA Digital days 2020, firebase cloud functions",
  },
  {
    src: "//www.slideshare.net/slideshow/embed_code/key/EbNxGpbhnElyqC",
    title:
      "Algeria2.0 2019, Machine learning for Mobile software Engineers, MLKit",
  },
  {
    src: "//www.slideshare.net/slideshow/embed_code/key/f2XTNf5mDlCXsY",
    title: "Devfest 2018, Sweet about Android Pie!",
  },
  {
    src: "//www.slideshare.net/slideshow/embed_code/key/9o7PsRN95fnjYI",
    title: "Google I/O extended 2018, What's new ?",
  },
  {
    src: "//www.slideshare.net/slideshow/embed_code/key/ccDdUHlfzBnsb9",
    title: "Cloud StudyJams 2018, Kubernates",
  },
  {
    src: "//www.slideshare.net/slideshow/embed_code/key/ldsNfKstGIMjyS",
    title: "GDD India extended 2017, Android architecture components",
  },
];

export default function Presentations() {
  return (
    <div>
      <h1 className="text-3xl text-blue-700 font-bold mt-24 mb-4">Presentations</h1>
      <hr />
      <div className="flex flex-row flex-wrap mt-12">
        {pres.map((b) => (
          <div className="w-full xl:w-1/3">
            <Presentation {...b} />
          </div>
        ))}
      </div>
    </div>
  );
}
