import {Quote} from "lucide-react";
import {cn} from "@/src/lib/utils";

interface TestimonialProps {
  title: string;
  author: string;
  bio: string;
  highlight?: boolean;
  className?: string;
}

export function Testimonial({title, author, bio, highlight = false, className}: TestimonialProps) {
  return (
    <div className={cn("flex flex-col", className)}>
      {/* Quote Icon */}
      <Quote className="w-12 h-12 text-blue-600 p-2 rounded [path]:fill-current" />

      {/* Quote Text */}
      <blockquote className="flex-1 mb-6">
        <p className={cn(" leading-relaxed", highlight && "bg-blue-600 text-white p-3 rounded")}>{title}</p>
      </blockquote>

      {/* Author Info */}
      <div className="mt-auto">
        <cite className="not-italic">
          <div className="font-bold text-blue-600 text-lg mb-1">- {author}</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">{bio}</div>
        </cite>
      </div>
    </div>
  );
}
