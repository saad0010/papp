import { PortableText } from "@portabletext/react";
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import React from "react";
import Image from "next/image";

let posts = [];
let author;

const page = async ({ params }) => {
  const slug = params.blog;
  const client = createClient({
    projectId: "n79zw5rc",
    dataset: "production",
    apiVersion: "2024-01-29",
    useCdn: false,
  });
  const query = `*[slug.current == '${slug}'][0]`;
  posts = await client.fetch(query);

  const authRef = posts.author._ref;

  const query1 = `*[ _id == '${authRef}']`;
  author = await client.fetch(query1);

  const builder = imageUrlBuilder(client);

  function formatDate(string) {
    var options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(string).toLocaleDateString([], options);
  }

  const SampleImageComponent = ({ value, isInline }) => {
    return (
      <img
        className="my-4 h-96 mx-auto"
        src={builder.image(value).width(600).fit("max").auto("format").url()}
        alt={value.alt || " "}
        loading="lazy"
        style={{
          // Display alongside text if image appears inside a block text span
          display: isInline ? "inline-block" : "block",

          // Avoid jumping around with aspect-ratio CSS property
          // aspectRatio: width / height,
        }}
      />
    );
  };

  const components = {
    block: {
      // Ex. 1: customizing common block types
      h1: ({ children }) => <h1 className="text-4xl mt-4">{children}</h1>,
      h2: ({ children }) => <h2 className="text-2xl mt-4">{children}</h2>,
      h3: ({ children }) => <h3 className="text-xl mt-4">{children}</h3>,
      h4: ({ children }) => <h4 className="text-xl mt-4">{children}</h4>,
      blockquote: ({ children }) => (
        <blockquote className="border-l-purple-500 my-4">{children}</blockquote>
      ),

      // Ex. 2: rendering custom styles
      customHeading: ({ children }) => (
        <h2 className="text-lg text-primary text-purple-700">{children}</h2>
      ),
    },

    types: {
      image: SampleImageComponent,
    },
    list: {
      // Ex. 1: customizing common list types
      bullet: ({ children }) => <ul className="mt-xl">{children}</ul>,
      number: ({ children }) => <ol className="mt-lg">{children}</ol>,

      // Ex. 2: rendering custom lists
      checkmarks: ({ children }) => (
        <ol className="m-auto text-lg">{children}</ol>
      ),
    },
    listItem: {
      // Ex. 1: customizing common list types
      bullet: ({ children }) => (
        <li style={{ listStyleType: "disclosure-closed" }}>{children}</li>
      ),

      // Ex. 2: rendering custom list items
      checkmarks: ({ children }) => <li>✅ {children}</li>,
    },
    marks: {
      // Ex. 1: custom renderer for the em / italics decorator
      em: ({ children }) => (
        <em className="text-gray-600 font-semibold">{children}</em>
      ),

      // Ex. 2: rendering a custom `link` annotation
      link: ({ value, children }) => {
        const target = (value?.href || "").startsWith("http")
          ? "_blank"
          : undefined;
        return (
          <a
            href={value?.href}
            target={target}
            className="italic text-yellow-600"
            rel={target === "_blank" && "noindex nofollow"}
          >
            {children}
          </a>
        );
      },
    },
  };

  return (
    <>
      <div className="border border-t-2">
        <div className="container py-6 md:py-10">
          <div className="mx-auto max-w-4xl  p-5">
            <div>
              <h1 className="pt-5 text-center font-body leading-8 text-3xl font-semibold text-midnigh sm:text-4xl md:text-5xl xl:text-[2.5rem]">
                {posts.title}
              </h1>
              <Image
                width={1200}
                height={1200}
                className="mt-10 mx-auto  w-full h-full object-fill"
                src={
                  posts.mainImage
                    ? builder.image(posts.mainImage).width(800).url()
                    : "/img.png"
                }
                alt={posts.title}
              />
              <div className="flex text-midnigh items-center pt-5 md:pt-10">
                <div>
                  <img
                    src={builder.image(author[0].image).width(400).url()}
                    className="h-10 w-10 lg:h-16 lg:w-16 rounded-full border-2 border-grey-70 shadow"
                    alt={`${author[0].name} image`}
                  />
                </div>
                <div className="pl-5">
                  <span className="block font-body text-xs lg:text-md font-bold text-grey-10">
                    {author[0].name}
                  </span>
                  <span className="block pt-1 font-body text-xs lg:text-md font-bold text-grey-30">
                    {formatDate(posts.publishedAt)}
                  </span>
                </div>
              </div>
            </div>
            <div className="prose max-w-none pt-8">
              <PortableText
                value={posts.body}
                components={components}
                projectId="n79zw5rc"
                dataset="production"
              />
            </div>

            <div className="mt-10 flex justify-between border-t border-lila py-12">
              <a href="/" className="flex items-center">
                <i className="bx bx-left-arrow-alt text-2xl text-primary" />
                <button className="px-8 py-2 bg-midnigh text-white text-sm font-medium rounded hover:bg-btnyel hover:text-black focus:outline-none focus:bg-btnyel">
                  Previous Post
                </button>
              </a>
              <a href="/" className="flex items-center">
                <button className="px-8 py-2 bg-btnyel text-black text-sm font-medium rounded hover:bg-midnigh hover:text-white focus:outline-none focus:bg-btnyel">
                  Next Post
                </button>
                <i className="bx bx-right-arrow-alt text-2xl text-primary" />
              </a>
            </div>
            <div className="flex flex-col items-center border-t border-lila py-12 pt-12 md:flex-row md:items-start xl:pb-20">
              <div className="w-3/4 sm:w-2/5 lg:w-1/4 xl:w-1/5 grid justify-items-center">
                <img
                  src={builder.image(author[0].image).width(400).url()}
                  className="rounded-full h-32 w-32 shadow"
                  alt={`${author[0].name} image`}
                />
              </div>
              <div className="ml-0 text-center md:ml-10 md:w-5/6 md:text-left">
                <h3 className="pt-10 font-body text-2xl font-bold text-midnigh md:pt-0">
                  {author[0].name}
                </h3>

                <PortableText
                  value={author[0].bio}
                  components={components}
                  projectId="n79zw5rc"
                  dataset="production"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
export const dynamic = "force-dynamic";
