export default function Blog({ data }) {
  return (
    <div className="px-2 py-2 h-full">
      <div className="border rounded-xl h-full overflow-hidden">
        <div
          className="h-56 overflow-hidden relative bg-cover"
          style={{
            backgroundImage: "url(" + data.thumbnail + ")",
          }}
        ></div>
        <div className="p-4 border-t-2 relative">
          <h1>
            <a href={data.link} target="blank">
              {data.title}
            </a>
          </h1>
        </div>
      </div>
     </div>
  );
}
