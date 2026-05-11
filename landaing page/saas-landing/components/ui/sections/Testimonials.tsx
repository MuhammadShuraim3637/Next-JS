/**
 * Testimonials — two-row staggered grid layout
 */

import { Star } from "lucide-react";
import { Section, SectionHeader, Card } from "@/components/ui/primitives";
import { TESTIMONIALS } from "@/app/constants";
import { cn } from "@/lib/utils";

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={cn(
            "w-3.5 h-3.5",
            i < count ? "text-amber-400 fill-amber-400" : "text-surface-200"
          )}
        />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <Section id="testimonials" className="bg-white">
      <SectionHeader
        eyebrow="Customers"
        title={
          <>
            Loved by{" "}
            <span className="bg-text-gradient bg-clip-text text-transparent">
              engineers
            </span>
          </>
        }
        subtitle="Don't take our word for it. Here's what teams building with Axiom have to say."
      />

      {/*
        TEACHING — columns trick for masonry-like feel:
        `columns-1 sm:columns-2 lg:columns-3` creates a CSS columns layout.
        `break-inside-avoid` prevents a card from splitting across columns.
        This gives an organic, unequal-height grid without JS.
        For a true masonry grid at scale, reach for react-masonry-css.
      */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {TESTIMONIALS.map((t, i) => (
          <Card
            key={t.id}
            className="break-inside-avoid group"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <StarRating count={t.rating} />

            <blockquote className="mt-4 text-sm font-body text-surface-700 leading-relaxed">
              &ldquo;{t.quote}&rdquo;
            </blockquote>

            <div className="mt-5 flex items-center gap-3">
              {/* Avatar */}
              <div className="w-9 h-9 rounded-full bg-brand-gradient flex items-center justify-center text-white text-xs font-bold shrink-0">
                {t.author.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <div>
                <p className="text-sm font-semibold font-body text-surface-900">
                  {t.author.name}
                </p>
                <p className="text-xs text-surface-400 font-body">
                  {t.author.title} · {t.author.company}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}