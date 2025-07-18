"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const REVIEWS = [
  {
    review:
      "Love the concept! As someone who is a fast eater, I really enjoyed using this timer app to help me regulate how fast I eat. I also love the science behind how eating slower can help me. I hope that I will see more updates with better translation and better instructions! Being able to change the chewing timer face is a bonus!",
    reviewer: "Elizabeth “EJ” R",
  },
  {
    review:
      "Very simple but effective app, for those who eat too quickly or can't do it without some monitoring to keep them in line. It's really very useful, thank you very much.",
    reviewer: "Gerga Chan",
  },
  {
    review:
      "I love this app, it's helped slow down my pace when eating! I also find myself drinking more water and hearing my hunger ques when I use this app. The app is great for people who want to eat slower :)",
    reviewer: "Ashley Arellano",
  },
  { review: "It’s a really good app and it’s cute", reviewer: "jajendne" },
  {
    review:
      "Actually I loved this application. This is really helpful to get a good habit of chewing.",
    reviewer: "Sanket warkhandkar",
  },
  {
    review:
      "I have used this app religiously. I am preparing for bariatric surgery. This has taught me to slow down. Also, recommend this to many people!",
    reviewer: "Shelly",
  },
  {
    review:
      "Love this! It makes me more conscious about how fast I eat, because I always eat too fast. This app really helps with slowing down and relaxing. It also helps with my bloating and actually feeling better because if I eat too fast, I can quickly get a stomach ache. This is perfect!",
    reviewer: "eepyweepy 77",
  },
  {
    review:
      "Much better, amazing 😍. It definitely what i am looking for and easy to use. The main of it is what I need. So thank you",
    reviewer: "hollie dixon",
  },
  {
    review: "The app itself is beautifully designed and very helpful!",
    reviewer: "Tom Tom",
  },
  {
    review:
      "I knew the importance of eating slowly and that I had been eating quite quickly, but I had never practiced it. I decided to improve my eating habits with the help of my body and mind skills! I was very surprised at the significant difference in feeling full even though I ate the same amount as usual ;)",
    reviewer: "티아렐린 (라카노트)",
  },
];

export default function UserReview() {
  return (
    <Carousel
      className="w-full max-w-2xs md:max-w-xl mt-10"
      opts={{ align: "start" }}
    >
      <CarouselContent>
        {REVIEWS.map((v, idx) => (
          <CarouselItem
            key={`review${idx}`}
            className="basis-3/4 md:basis-1/3 py-1 pr-1 hover:-translate-y-1 transform transition duration-300"
          >
            <Card className="bg-gradient-to-br from-white via-orange-50 to-orange-100 border-orange-200 h-60">
              <CardContent className="flex flex-col aspect-square justify-between gap-y-4 pb-4 md:pb-0">
                <div>
                  <span className="text-3xl font-serif text-gray-300">“</span>
                  <div className="text-sm md:text-xs text-gray-700 break-words line-clamp-5">
                    {v.review}
                  </div>
                </div>
                <div className="w-full text-gray-500 text-xs text-right">
                  {v.reviewer}
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
