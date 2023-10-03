import React from "react";

import {Card, CardHeader, Divider, Image} from "@nextui-org/react";

export default function ProjectPreview({size = 120, textSize = "md"}) {
  return (
    <Card className="max-w-[400px] cursor-pointer">
      <CardHeader className="flex gap-3">
        <Image
          alt="brand logo"
          height={size}
          radius="sm"
          src="../TE.png"
          width={size}
        />
        <div className="flex flex-col">
          <p className={`text-${textSize}`}>Tiquicia Express</p>
          <p className={`text-${textSize} text-default-500`}>tiquiciaexpress.com</p>
        </div>
      </CardHeader>
      <Divider/>
    </Card>
  );
}
