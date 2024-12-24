import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import endpoint from "@/util/woo";
import { gql, request } from 'graphql-request';
import Link from "next/link";

export default async function Home() {
  
  const productsCategoriesQuery = gql`
    query {
      products (first: 4, where: {orderby: {field: DATE, order: DESC}}) {
        nodes {
          slug
          productid: databaseId
          name
          onSale
          sku
          shortDescription
          type
          featured
          image {
            altText
            id
            sourceUrl
            srcSet
          }
          ... on SimpleProduct {
            price
            regularPrice
            id
          }
          ... on VariableProduct {
            price
            id
            regularPrice
          }
          ... on ExternalProduct {
            price
            id
            externalUrl
            regularPrice
          }
        }
      }
      productCategories (first: 5) {
        nodes {
          id
          name
          slug
          image {
            altText
            id
            sourceUrl
            srcSet
          }
        }
      }
    }
  `;


  const data = await request(endpoint, productsCategoriesQuery) as { products: { nodes: any[] }, productCategories: { nodes: any[] } };
  const products = data.products.nodes;

  return (
   <>
      <Navigation /> 
      <main>
        <Hero />

        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <div className="md:flex md:items-center md:justify-between">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">New products</h2>
              <Link href="/products" className="hidden text-sm font-medium text-indigo-600 hover:text-indigo-500 md:block">
                Shop all products
                <span aria-hidden="true"> &rarr;</span>
              </Link>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8">
              {products.map((product) => (
                <div key={product.id} className="group relative">
                  <div className="h-56 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-72 xl:h-80">
                    <img alt={product.image.altText} src={product.image.sourceUrl} srcSet={product.image.srcSet} className="size-full object-cover" />
                  </div>
                  <h3 className="mt-4 text-sm text-gray-700">
                    <Link href={'/products/' + product.slug}>
                      <span className="absolute inset-0" />
                      {product.name}
                    </Link>
                  </h3>
                  {/* <p className="mt-1 text-sm text-gray-500">{product.color}</p> */}
                  <p className="mt-1 text-sm font-medium text-gray-900">{product.price}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 text-sm md:hidden">
              <Link href="/products" className="font-medium text-indigo-600 hover:text-indigo-500">
                Shop all products
                <span aria-hidden="true"> &rarr;</span>
              </Link>
            </div>
          </div>
        </div>

        {/* <div className="bg-white">
          <div className="py-16 sm:py-24 xl:mx-auto xl:max-w-7xl xl:px-8">
            <div className="px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">Shop by Category</h2>
              <a href="#" className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">
                Shop all products
                <span aria-hidden="true"> &rarr;</span>
              </a>
            </div>

            <div className="mt-4 flow-root">
              <div className="-my-2">
                <div className="relative box-content h-80 overflow-x-auto py-2 xl:overflow-visible">
                  <div className="absolute flex space-x-8 px-4 sm:px-6 lg:px-8 xl:relative xl:grid xl:grid-cols-5 xl:gap-x-8 xl:space-x-0 xl:px-0">
                    {categories.map((category) => (
                      <a
                        key={category.name}
                        href={category.href}
                        className="relative flex h-80 w-56 flex-col overflow-hidden rounded-lg p-6 hover:opacity-75 xl:w-auto"
                      >
                        <span aria-hidden="true" className="absolute inset-0">
                          <img alt="" src={category.imageSrc} className="size-full object-cover" />
                        </span>
                        <span
                          aria-hidden="true"
                          className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"
                        />
                        <span className="relative mt-auto text-center text-xl font-bold text-white">{category.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 px-4 sm:hidden">
              <a href="#" className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
                Shop all products
                <span aria-hidden="true"> &rarr;</span>
              </a>
            </div>
          </div>
        </div> */}

      </main>

      <Footer />
   </>
  );
}
