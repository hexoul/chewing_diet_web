import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { getDictionary } from "../../get-dictionary";
import { Locale } from "../../i18n-config";
import Link from "next/link";

export default async function IndexPage(props: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await props.params;

  const dict = await getDictionary(lang);

  return (
    <div className="min-h-screen bg-orange-50 p-6 flex flex-col items-center">
      <div className="max-w-2xl w-full">
        <div className="flex items-center space-x-4 mb-6">
          <div className="bg-orange-600 p-2 rounded-md">
            <Image src="/spoon-icon.png" alt="Logo" width={32} height={32} />
          </div>
          <h1 className="text-3xl font-bold text-gray-800">{dict.title}</h1>
        </div>
        <p className="text-xl text-gray-700 mb-6">
          Eat slowly, eat healthy, make it a habit
        </p>

        <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
          <Card className="bg-orange-500 text-white p-6 w-full max-w-sm">
            <CardContent className="flex flex-col items-center">
              <h2 className="text-lg font-semibold mb-2">Chewing Diet</h2>
              <div className="w-24 h-24 rounded-full border-8 border-white flex items-center justify-center text-2xl font-bold">
                20
              </div>
              <p className="mt-2">CHEWS</p>
              <p className="text-lg mt-4">Meal duration</p>
              <p className="text-2xl font-bold">15:00</p>
              <Button className="mt-4 bg-green-700 hover:bg-green-800 text-white w-full">
                STOP
              </Button>
            </CardContent>
          </Card>

          <div className="text-gray-800">
            <p className="mb-4">
              Chewing Diet is an app that helps improve fast eating habits:
              Chewing each bite at least 20 times and eating for at least 15
              minutes can prevent overeating and weight gain.
            </p>
            <h3 className="text-lg font-semibold mb-2">Key Features</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Chew timer: prompts 20+ chews per bite</li>
              <li>Meal duration tracking: encourages 15+ minute meals</li>
              <li>Wearable integration: vibration alerts on smartwatches</li>
              <li>Meal diary: record meals with photos</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-row gap-4 items-center">
          <Link
            href="https://play.google.com/store/apps/details?id=hexoul.chewing.diet"
            target="_blank"
          >
            <Image
              src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
              alt="Get it on Google Play"
              width={150}
              height={45}
            />
          </Link>
          <Link href="https://apps.apple.com/app/id6444375180" target="_blank">
            <Image
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="Download on the App Store"
              width={150}
              height={45}
            />
          </Link>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
          <Link href="https://coff.ee/chewing.diet" target="_blank">
            <Image
              src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
              alt="Buy Me A Coffee"
              style={{ height: "60px", width: "217px" }}
              width={150}
              height={45}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
