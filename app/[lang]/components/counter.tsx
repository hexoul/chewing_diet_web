"use client";

import { useState } from "react";
import { type getDictionary } from "../../../get-dictionary";

export default function Counter({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>["appstore"];
}) {
  const [count, setCount] = useState(0);
  return (
    <p>
      This component is rendered on client:
      <button onClick={() => setCount((n) => n - 1)}>
        {dictionary.src}
      </button>
      {count}
      <button onClick={() => setCount((n) => n + 1)}>
        {dictionary.src}
      </button>
    </p>
  );
}
