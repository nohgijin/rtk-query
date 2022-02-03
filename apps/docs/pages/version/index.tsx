import { Button } from "ui";
import { useGetVersionQuery } from "../../api/version";
import { useState, useEffect } from "react";
import parse from "html-react-parser";

export default function Version() {
  const { data: versionData, isLoading } = useGetVersionQuery();

  if (!versionData) return <></>;

  return (
    <div>
      <div>버전 정보</div>
      {versionData.data.map((d) => {
        return (
          <div key={d.id}>
            <div>{d.attributes.title}</div>
            <div>{parse(d.attributes.content)}</div>
          </div>
        );
      })}
    </div>
  );
}
