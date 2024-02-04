import imageUrlBuilder from "@sanity/image-url";
import { createClient } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const PostList = ({
  post,
  aspect,
  minimal,
  pathPrefix,
  preloadImage,
  fontSize,
  fontWeight,
}) => {
  const client = createClient({
    projectId: "n79zw5rc",
    dataset: "production",
    apiVersion: "2024-01-29",
    useCdn: true,
  });
  const builder = imageUrlBuilder(client);
  const imageProps = post?.mainImage;
  const AuthorimageProps = post?.author?.image;
  return <></>;
};

export default PostList;
