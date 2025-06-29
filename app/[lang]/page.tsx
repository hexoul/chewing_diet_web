import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

import { getDictionary } from "../../get-dictionary";
import { Locale } from "../../i18n-config";
import LocaleSwitcher from "./components/locale-switcher";

const REFERENCES = [
  {
    title:
      "Eating slowly led to decreases in energy intake within meals in healthy women",
    url: "https://pubmed.ncbi.nlm.nih.gov/18589027/",
  },
  {
    title:
      "The joint impact on being overweight of self reported behaviours of eating quickly and eating until full: cross sectional survey",
    url: "https://pubmed.ncbi.nlm.nih.gov/18940848/",
  },
  {
    title:
      "Association between eating rate and obesity: a systematic review and meta-analysis",
    url: "https://pubmed.ncbi.nlm.nih.gov/26100137/",
  },
  {
    title:
      "Faster self-reported speed of eating is related to higher body mass index in a nationwide survey of middle-aged women",
    url: "https://pubmed.ncbi.nlm.nih.gov/21802566/",
  },
  {
    title:
      "Eating fast leads to obesity: findings based on self-administered questionnaires among middle-aged Japanese men and women",
    url: "https://pubmed.ncbi.nlm.nih.gov/16710080/",
  },
  {
    title:
      "Rate of eating and body weight in patients with type 2 diabetes or hyperlipidaemia",
    url: "https://pubmed.ncbi.nlm.nih.gov/12235929/",
  },
];

export default async function IndexPage(props: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await props.params;

  const dict = await getDictionary(lang);

  return (
    <div className="p-4 flex flex-col items-center">
      <div className="self-end">
        <LocaleSwitcher />
      </div>
      <div className="flex flex-row items-center gap-x-4 m-4">
        <Image
          src="/spoon.png"
          className="rounded-xl"
          width={48}
          height={48}
          alt="Logo"
          priority
        />
        <h1 className="text-gray-800">{dict.title}</h1>
      </div>
      <div className="text-lg text-gray-700 text-center mb-6">{`"${dict.shortDescription}"`}</div>

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
              width={100}
              height={100}
              alt="Expected result"
              priority
            />
          </CardContent>
        </Card>

        <div className="text-gray-800">
          <p className="mb-4">
            {dict.longDescription[0]}
            <b className="text-purple-400 text-lg"> 20 </b>
            {dict.longDescription[1]}
            <b className="text-orange-400 text-lg"> 15 </b>
            {dict.longDescription[2]}
          </p>
          <h2 className="mt-6">{dict.keyFeatures}</h2>
          <ul className="text-sm space-y-2">
            {dict.features.map((v, idx) => (
              <li key={`feature${idx}`}>{v}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-row gap-4 justify-center items-center">
        <Link href={dict.playstore.url} target="_blank">
          <Image
            src={dict.playstore.src}
            width={160}
            height={45}
            alt="Get it on Google Play"
            style={{ width: "auto" }}
          />
        </Link>
        <Link href={dict.appstore.url} target="_blank">
          <Image
            src={dict.appstore.src}
            width={150}
            height={45}
            alt="Download on the App Store"
            style={{ width: "auto" }}
          />
        </Link>
      </div>

      <div className="text-center mt-8 mb-3 whitespace-pre-line">
        {dict.encourage}
      </div>

      <div className="flex mb-10">
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

      <div className="flex flex-col w-full md:w-xl items-start my-8">
        <h2>{dict.howItWorks.title}</h2>
        <div className="whitespace-pre-line">{dict.howItWorks.content}</div>
      </div>

      <div className="flex flex-col w-full md:w-xl items-start">
        <h2>References</h2>
        <ol className="list-decimal pl-4">
          {dict.references.map((ref, idx) => (
            <li key={`ref-localized${idx}`} className="mb-2">
              <Link href={ref.url} target="blank">
                {ref.title}
              </Link>
            </li>
          ))}
          {REFERENCES.map((ref, idx) => (
            <li key={`ref-paper${idx}`} className="mb-2">
              <Link href={ref.url} target="blank">
                {ref.title}
              </Link>
            </li>
          ))}
        </ol>
      </div>

      <div className="flex flex-col items-center w-full mt-24 py-2 gap-y-1 text-sm text-gray-500 bg-black/5">
        <div>
          {"© 2025 "}
          <Link href="https://hexoul.github.io/about/" target="blank">
            Seunggon Kim
          </Link>
          . All rights reserved.
        </div>
        <div>
          <Link
            href="https://github.com/hexoul/privacy-policy/wiki/Terms-&-Conditions-for-Chewing-Diet"
            target="blank"
          >
            Terms of Service
          </Link>
          {" | "}
          <Link
            href="https://github.com/hexoul/privacy-policy/wiki/Privacy-Policy-for-Chewing-Diet"
            target="blank"
          >
            Privacy Policy
          </Link>
        </div>
        <p className="mt-4 mb-8">contact: crosien+diet@gmail.com</p>
      </div>
    </div>
  );
}
