import React from "react";

import {Card, CardHeader, Divider, Image} from "@nextui-org/react";

export default function ProjectPreview() {
  return (
    <Card className="max-w-[400px] cursor-pointer">
      <CardHeader className="flex gap-3">
        <Image
          alt="nextui logo"
          height={120}
          radius="sm"
          src="./TE.png"
          width={120}
        />
        <div className="flex flex-col">
          <p className="text-md">Tiquicia Express</p>
          <p className="text-small text-default-500">tiquiciaexpress.com</p>
        </div>
      </CardHeader>
      <Divider/>
    </Card>
  );
}
