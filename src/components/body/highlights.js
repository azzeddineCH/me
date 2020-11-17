import { TwitterTweetEmbed } from "react-twitter-embed";

export default function Highlights() {
  const tweets = [
    "1187032883640307712",
    "1185088135790825472",
    "1207650032654209025",
    "1204582776063905792",
    "1301958563850526721",
    "1263080908049059848",
    "1216132091236311040",
    "1208713739047972864",
    "1188542064985812992",
  ];
  return (
    <div>
      <h1 className="text-3xl text-blue-700 font-bold mt-24 mb-4">Highlights</h1>
      <hr/>
      <div className="flex flex-row flex-wrap justify-around items-center">
        {tweets.map((t) => (
          <div className="relative w-full sm:w-1/2 px-2 cursor-pointer">
            <TwitterTweetEmbed tweetId={t} />
          </div>
        ))}
      </div>
    </div>
  );
}
