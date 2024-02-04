import React from "react";
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import Link from "next/link";
import PostList from "@/components/blog/PostList";
let posts = [];
let cate;
let query;
const ListBlogs = async () => {
  const revalidate = 60; //Time interval
  const client = createClient({
    projectId: "n79zw5rc",
    dataset: "production",
    apiVersion: "2024-01-29",
    useCdn: false,
  });
  query = `*[_type == "post"] | order(publishedAt desc)`;

  posts = await client.fetch(query, { cache: "no-store" });

  // getPost();
  const builder = imageUrlBuilder(client);

  function formatDate(string) {
    var options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(string).toLocaleDateString([], options);
  }

  const query1 = `*[_type == "category"]`;
  cate = await client.fetch(query1);
  //   console.log(posts);
  return (
    <>
      <div className="mx-auto grid max-w-screen-lg grid-cols-1 gap-5 p-5 sm:grid-cols-2 md:grid-cols-3 lg:gap-10">
        {posts.map((item) => (
          <Link
            key={item.slug}
            // href={`blogs/${item.slug}`}
            className="shadow"
            href={`blogs/${item.slug.current}`}
          >
            <article
              key={posts._id}
              className="group h-full overflow-hidden rounded-lg border-2 border-gray-200 border-opacity-60 shadow-lg"
            >
              <img
                className="w-full transform object-cover object-center transition duration-500 ease-in-out group-hover:scale-105 md:h-36 lg:h-48"
                src={
                  item.mainImage
                    ? builder.image(item.mainImage).width(400).url()
                    : "/img.png"
                }
                alt="blog"
              />
              <h2 className="title-font inline-block cursor-pointer px-6 pt-4 pb-1 text-xs font-semibold uppercase tracking-widest text-orange-600 hover:font-bold">
                {cate.title}
              </h2>
              <div className="py-1 px-6">
                <h1 className="title-font mb-3 inline-block cursor-pointer text-lg capitali font-extrabold tracking-wide text-gray-800">
                  {item.title}
                </h1>
                <p className="line-clamp-6 mb-3 cursor-pointer overflow-hidden leading-relaxed text-gray-500">
                  {item.metadesc}
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-between px-6 pt-1 pb-4">
                <div className="flex flex-wrap text-sm text-gray-500">
                  <span className="mr-1">{formatDate(item.publishedAt)}</span>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </>
  );
};

export default ListBlogs;

export const dynamic = "force-dynamic";
