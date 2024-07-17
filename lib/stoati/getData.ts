import { dataFormat } from "@/lib/stoati/DataFormat";
import { Component } from "@stoati/shared-types";
import { z } from "zod";

const getData = async () => {
  const stoatiId = process.env.NEXT_PUBLIC_STOATI_ID || process.env.STOATI_ID;
  let stoatiSecret: string | undefined = process.env.STOATI_SECRET;
  const url = process.env.STOATI_URL;

  if (!stoatiSecret) {
    const params = new URLSearchParams(document.location.search);

    stoatiSecret = params.get("stoatiEdit") || undefined;
  }

  if (!stoatiId) {
    throw new Error(
      "The Stoati tools have not been properly initialized please add a NEXT_PUBLIC_STOATI_ID env variable"
    );
  }

  if (!stoatiSecret) {
    return null;
  }

  const data = await fetch(url + "/shops/" + stoatiId + "/components/data", {
    headers: {
      authorization: `Bearer ${stoatiSecret}`,
    },
    cache: "no-store",
  });

  if (!data.ok) {
    throw data;
  }

  const response = await data.json();

  if (response === null) {
    return null;
  }

  return z.array(dataFormat).parse(response);
};

export default getData;
