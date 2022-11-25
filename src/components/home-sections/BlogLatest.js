import Image from "../image";
export default function BlogLatest() {
  return (
    <section className="bg-white">
      <div className="container px-6 py-10 mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl">
            From the blog
          </h1>

          <p className="max-w-lg mx-auto mt-4 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
            veritatis sint autem nesciunt, laudantium quia tempore delect
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-2">
          <div>
            <Image
              width="600"
              height="384"
              altText="Blog feature Image"
              title="Blog feature Image"
              className="relative z-10 object-cover w-full rounded-md h-96"
              sourceUrl="http://phpstack-691725-3019044.cloudwaysapps.com/wp-content/uploads/2022/11/zara-scaled.webp"
            />

            <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow">
              <a
                href="#"
                className="font-semibold hover:underline  md:text-xl text-teal-600"
              >
                Zara opineng new branch in Dubai
              </a>

              <p className="mt-3 text-sm text-gray-500  md:text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                veritatis sint autem nesciunt, laudantium quia tempore delect
              </p>

              <p className="mt-3 text-sm text-teal-500">21 October 2019</p>
            </div>
          </div>

          <div>
            <Image
              width="600"
              height="384"
              altText="Blog feature Image"
              title="Blog feature Image"
              className="relative z-10 object-cover w-full rounded-md h-96"
              sourceUrl="http://phpstack-691725-3019044.cloudwaysapps.com/wp-content/uploads/2022/11/nike.webp"
            />

            <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow ">
              <a
                href="#"
                className="font-semibold hover:underline  md:text-xl text-teal-600"
              >
                How to buy best sale from nike with low cost
              </a>

              <p className="mt-3 text-sm text-gray-500  md:text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                veritatis sint autem nesciunt, laudantium quia tempore delect
              </p>

              <p className="mt-3 text-sm text-teal-500">20 October 2019</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
