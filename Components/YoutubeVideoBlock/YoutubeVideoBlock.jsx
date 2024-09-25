import React from "react";

export default function YoutubeVideoBlock({ block }) {
  const content =
    block.attributes?.content || (block.originalContent && block.saveContent);
  const urlMatch = content?.match(/(https?:\/\/[^\s]+)/);
  const url = urlMatch ? urlMatch[0] : null;

  if (!url) return null;

  let youtubeId = null;

  const videoUrlMatch = url.match(
    /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i
  );
  if (videoUrlMatch) {
    youtubeId = videoUrlMatch[1];
  } else {
    const liveStreamMatch = url.match(
      /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:live\/)))([^"&?\/\s]+)/i
    );
    if (liveStreamMatch) {
      youtubeId = liveStreamMatch[1];
    }
  }

  if (!youtubeId) return null;

  return (
    <div className="embed-responsive embed-responsive-16by9">
      <iframe
        width="100%"
        height="600"
        src={`https://www.youtube.com/embed/${youtubeId}`}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}
