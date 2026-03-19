export default function Video({ youtubeId }: { youtubeId: string }) {
  return (
    <div className="relative pt-[50.25%] w-full bg-black rounded-xl overflow-hidden rounded-b-none">
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=0`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  )
}