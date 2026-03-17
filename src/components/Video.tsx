export default function Video() {
    return (
        <>
            <video controls preload="none" className="min-w-full min-h-80 rounded-3xl rounded-b-none">
                <source src="https://www.youtube.com/watch?v=sPqWC1XvWL4" type="video/mp4" />
                <track
                    src="/path/to/captions.vtt"
                    kind="subtitles"
                    srcLang="en"
                    label="English"
                />
                Your browser does not support the video tag.
            </video>
        </>
    )
}