import Card from "@/components/home/Card";
import SecHero from "@/components/service/SecHero";
import Banner from "@/components/home/Banner";
import PnS from "@/components/home/PnS";
import Review from "@/components/home/Review";
import NewCard from "@/components/home/NewCard";
import Slider1 from "@/components/layout/Slider";
import Slider from "@/components/Sliders/Slider";
import BecomClient from "@/components/layout/BecomClient";
import NCard from "@/components/home/NCard";
// import { createClient } from "next-sanity";

const cardData = [
  {
    id: 1,
    title: "Custom Patches",
    slug: "patches",
    desc: "Personalized embroidered patches provide a premium appearance without breaking the bank. You have the flexibility to add your personalized patch design on any article of clothing, regardless of its size, shape, or material.Customers can easily obtain the unique patches they want thanks to our step-by-step ordering process.",
    label: "24/7 Support",
    label1: "Fast Delivery",
    label2: "High Standards!",
    image: "/customp.webp",
  },
  {
    id: 2,
    title: "Custom Embroidery",
    slug: "embroidery",
    desc: "Use our custom embroidery to uplift your brand’s sophistication. Our skilled makers precisely stitch your designs into high-quality textiles to give them a plush, textured feel. Elegance blends with precision to guarantee that your clothes convey the outstanding quality that is associated with your brand. ",
    label: "24/7 Support",
    label1: "Fast Delivery",
    label2: "High Standards",
    image: "/emb.webp",
  },
  // {
  //   id: 3,
  //   title: "Custom Printing",
  //   slug: "screen-printing",
  //   desc: "Use our custom screen printing service to create an outstanding impression on your customers. We apply vibrant, long-lasting inks to imprint your company's name, images, and messaging onto high-quality textiles. Our state-of-the-art technology guarantees vivid, striking designs that draw in viewers.",
  //   label: "24/7 Support",
  //   label1: " Fast Delivery",
  //   label2: "High Standards",
  //   image: "/ee.webp",
  // },
];

export default function Home() {
  return (
    <main className="bg-transparent ">
      <Banner />
      <PnS />
      {/* <DBanner /> */}
      <div className="">
        <Slider />
      </div>
      <Review />

      <NCard
        title={"Don't settle for custom shirts no one will wear."}
        image={"/nc.jpg"}
        p1={
          "Print O Thread's library of soft custom shirts, unique print options, and simple order process make it easier than ever to order shirts you'll love and wear proudly."
        }
        p={
          " Your brand is too valuable to print on scratchy, ill-fitting shirts that no one will wear."
        }
        lin={"/screen-printing"}
      />
      <div className=" md:pt-20 lg:pt-0">
        <Card cardData={cardData} />
        <BecomClient />
      </div>
      <NewCard
        title={"Don't settle for  Patches"}
        image={"/a1.webp"}
        p1={
          "Print O Thread's library of soft custom Patches, unique print options, and simple order process make it easier than ever to order Print Patches you'll love and wear proudly."
        }
        p={
          " Personalized patches worthy of a royalty. Handmade, personalized bullion patches are the way to go if you're searching for high-end patches similar to the ones used by any well-known brand."
        }
      />

      <div className="md:pt-10 md:pb-20">
        <SecHero
          heading="Your products—processed, packed and delivered worldwide by Print O Thread"
          description="Print-on-demand eliminates upfront costs and leftover stock by fulfilling products only when your customer places an order. No upfront fees. No minimums. Just effortless fulfillment.  "
        />
        <Slider1 />
      </div>
    </main>
  );
}
// export async function getServerSideProps(context) {
//   const client = createClient({
//     projectId: "n79zw5rc",
//     dataset: "production",
//     useCdn: true,
//   });
//   const query = `*[_type == "post"]`;
//   const posts = await client.fetch(query);
//   return {
//     props: {
//       posts,
//     },
//   };
// }
