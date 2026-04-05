import { HERO_MEDIA } from "../lib/constants";

export default function Hero() {
  return (
    <section className="hero-fullscreen">
      <div className="hero-video-container" aria-hidden="true">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="hero-video-placeholder"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        >
          <source
            media="(max-width: 767px)"
            src={HERO_MEDIA.mobileVideo}
            type="video/mp4"
          />
          <source src={HERO_MEDIA.desktopVideo} type="video/mp4" />
        </video>
      </div>

      <div className="page-container hero-content-wrapper">
        <div className="hero-content">
          <div className="hero-dual-cta" />
        </div>
      </div>
    </section>
  );
}
