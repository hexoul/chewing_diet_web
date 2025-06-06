import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { getDictionary } from "../../get-dictionary";
import { Locale } from "../../i18n-config";

export default async function IndexPage(props: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await props.params;

  const dict = await getDictionary(lang);

  return (
    <div className="p-4 flex flex-col items-center">
      <div className="flex flex-row items-center gap-x-4 m-4">
        <Image
          src="/spoon.png"
          className="rounded-xl"
          width={48}
          height={48}
          priority
          alt="Logo"
        />
        <h1 className="text-3xl font-bold text-gray-800">{dict.title}</h1>
      </div>
      <div className="text-xl text-gray-700 mb-6">{dict.shortDescription}</div>

      <div className="flex flex-col md:w-xl items-center gap-6 mb-8">
        <Card className="border-orange-200 p-6">
          <CardContent className="flex flex-row items-center gap-x-3">
            <div className="size-12 rounded-full border-4 border-gray-300 flex items-center justify-center font-bold text-purple-400">
              20
            </div>
            +
            <div className="size-12 rounded-full border-4 border-gray-300 flex items-center justify-center font-bold text-orange-400">
              15
            </div>
            =
            <Image
              src="/result.png"
              alt="Expected result"
              width={100}
              height={100}
            />
          </CardContent>
        </Card>

        <div className="text-gray-800">
          <p className="mb-4">
            Designed to help you overcome fast eating habits. By encouraging you
            to chew each bite at least{" "}
            <b className="text-purple-400 text-lg">20 </b>
            times and extend meals to a minimum of
            <b className="text-orange-400 text-lg"> 15</b> minutes, it helps
            prevent overeating and supports weight loss.
          </p>
          <h3 className="text-lg font-bold mt-6 mb-1">Key Features</h3>
          <ul className="text-sm space-y-2">
            <li>
              • ⏱️ <i>Chewing timer</i>
            </li>
            <li>
              • ⏳ <i>Meal duration tracker</i>
            </li>
            <li>
              • ⌚︎ <i>Wearable integration</i>
            </li>
            <li>
              • 📝 <i>Meal diary</i>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-row gap-4 justify-center items-center">
        <Link href={dict.playstore.url} target="_blank">
          <Image
            src={dict.playstore.src}
            width={150}
            height={45}
            alt="Get it on Google Play"
          />
        </Link>
        <Link href={dict.appstore.url} target="_blank">
          <Image
            src={dict.appstore.src}
            width={150}
            height={45}
            alt="Download on the App Store"
          />
        </Link>
      </div>

      <div className="text-center mt-8 mb-3">{dict.encourage}</div>

      <div className="flex mb-44 ">
        <Link href="https://coff.ee/chewing.diet" target="_blank">
          <Image
            src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
            className="h-[60px] w-[217px] rounded-lg"
            width={150}
            height={45}
            alt="Buy Me A Coffee"
          />
        </Link>
      </div>
    </div>
  );
}
