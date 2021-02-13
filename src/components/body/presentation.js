export default function Presentation({ src, title }) {
  return (
    <div className="px-2 py-4 h-full">
      <div className="border rounded-xl h-full overflow-hidden">
        <iframe
          src={src}
          height={292}
          frameBorder={0}
          marginWidth={0}
          marginHeight={0}
          className="w-full"
          scrolling="no"
          allowFullScreen
        ></iframe>

        <div className="p-4 border-t-2 relative">
          <h1>
            <a
              href="https://www.slideshare.net/azeddinechenine"
              className="text-lg font-bold"
              title={title}
              target="_blank"
            >
              {title}
            </a>
          </h1>
        </div>
      </div>
    </div>
  );
}
