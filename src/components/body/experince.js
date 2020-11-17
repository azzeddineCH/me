export default function Experience({ data }) {
  return (
    <div className="my-8">
      <div className="flex flex-col md:flex-row justify-between">
        <div>
          <h1 className="text-xl font-semibold">{data.company}</h1>
          <h1 className="text-lg font-medium">{data.position}</h1>
        </div>
        <div className="text-left md:text-right font-light italic">
          <h1>{data.place}</h1>
          <h1>{data.period}</h1>
        </div>
      </div>
      <div className="my-4 font-normal">
        {data.work.map((w) => (
          <p>➟ {w}</p>
        ))}
      </div>
      <div className="flex flex-wrap">
        {data.tools.map((t) => (
          <h1 className="mr-4 bg-blue-700 text-white font-medium py-1 px-6 rounded-xl my-1">{t}</h1>
        ))}
      </div>
    </div>
  );
}
