"use client";

import { Star } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

interface Review {
  initials: string;
  username: string;
  country: string;
  rating: number;
  text: string;
}

const REVIEWS: Review[] = [
  {
    initials: "DS",
    username: "davidsusina",
    country: "Slovakia",
    rating: 5,
    text: "I was in a desperate time crunch and needed help with a big Power BI project. DataNova Labz managed it exceptionally well in less than 24 hours, always on call and meeting all requirements.",
  },
  {
    initials: "KR",
    username: "karthickreddy11",
    country: "United States",
    rating: 5,
    text: "Professional, responsive, and very supportive throughout. They built and improved the dashboard exactly as required, explained the logic clearly, and made quick revisions. Great experience overall.",
  },
  {
    initials: "SH",
    username: "shaddykhan452",
    country: "Lithuania",
    rating: 5,
    text: "Excellent experience! Very professional, responsive, and delivered exactly what I needed on time. High-quality work with great attention to detail. I would definitely recommend and use their services again.",
  },
  {
    initials: "R",
    username: "raspas86",
    country: "Spain",
    rating: 5,
    text: "Extremely happy with DataNova Labz! They were a pleasure to work with — always helpful, professional, and focused on delivering a great result. The final dashboard turned out really well.",
  },
  {
    initials: "TP",
    username: "tjeerdprins",
    country: "Netherlands",
    rating: 5,
    text: "Very good communication, quick response time, and high quality output. Would definitely recommend.",
  },
  {
    initials: "X",
    username: "xavotech",
    country: "United Kingdom",
    rating: 5,
    text: "DataNova Labz delivered an excellent dashboard and made the entire process simple and straightforward. Communication was great, the work was completed on time, and the final result exceeded my expectations.",
  },
];

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className="size-4"
          style={{
            color: i < rating ? "#facc15" : "#3a4a6a",
            fill: i < rating ? "#facc15" : "transparent",
          }}
        />
      ))}
    </div>
  );
}

function ReviewCard({ review, index }: { review: Review; index: number }) {
  return (
    <Reveal delay={index * 80} className="h-full">
      <div
        className="relative h-full overflow-hidden rounded-2xl p-[1.5px] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(56,189,248,0.15)]"
        style={{
          background: "linear-gradient(135deg, #24B8FF 0%, #7C3AED 50%, #FF8A2A 100%)",
          boxShadow: "0 0 20px rgba(36,184,255,0.12), 0 0 40px rgba(124,58,237,0.06)",
        }}
      >
        <div
          className="flex h-full flex-col overflow-hidden rounded-[14px] p-5 sm:p-6"
          style={{ background: "linear-gradient(135deg, #18263D 0%, #0D1A49 55%, #2F174F 100%)" }}
        >
          <div className="flex items-start gap-3.5">
            {/* Avatar initials */}
            <div
              className="flex size-11 shrink-0 items-center justify-center rounded-full text-sm font-bold sm:size-12 sm:text-base"
              style={{
                background: "linear-gradient(135deg, rgba(36,184,255,0.15), rgba(124,58,237,0.2))",
                border: "1.5px solid rgba(36,184,255,0.35)",
                color: "#38bdf8",
              }}
            >
              {review.initials}
            </div>

            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-frost leading-tight">
                {review.username}
              </p>
              <p className="mt-0.5 text-xs text-muted">
                {review.country}
              </p>
            </div>
          </div>

          {/* Stars */}
          <div className="mt-3">
            <Stars rating={review.rating} />
          </div>

          {/* Review text */}
          <p
            className="mt-3 flex-1 text-sm leading-relaxed sm:text-[15px]"
            style={{ color: "#B8C3D6" }}
          >
            &ldquo;{review.text}&rdquo;
          </p>
        </div>
      </div>
    </Reveal>
  );
}

export default function ClientReviews() {
  return (
    <section id="reviews" className="relative">
      <div className="mx-auto max-w-[1240px] px-5 py-20 sm:px-6 sm:py-24 md:py-28 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Client Reviews"
            title={<>What Our <span style={{ color: "#facc15" }}>Clients</span> Say</>}
            description="Real feedback from real clients across the globe."
            align="left"
          />
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-14 sm:gap-6 sm:grid-cols-2">
          {REVIEWS.map((review, i) => (
            <ReviewCard key={review.username} review={review} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
