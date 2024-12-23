import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'
import endpoint from '@/util/woo';
import { gql, request } from 'graphql-request';

export default async function Products() {
    
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
    const categories = data.productCategories.nodes;
    console.log(products);
    console.log(categories);

  return (
    <div className="bg-white">

      <Navigation />

      <div>
      
        <main className="mx-auto max-w-2xl px-4 lg:max-w-7xl lg:px-8">
          <div className="border-b border-gray-200 pb-10 pt-24">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">Products</h1>
            <p className="mt-4 text-base text-gray-500">
              Checkout out the latest release of Basic Tees, new and improved with four openings!
            </p>
          </div>

          {/* <div className="pb-24 pt-12 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4"> */}
          <div className="pb-24 pt-12">
            {/* <aside>
              <h2 className="sr-only">Filters</h2>

              <button
                type="button"
                onClick={() => setMobileFiltersOpen(true)}
                className="inline-flex items-center lg:hidden"
              >
                <span className="text-sm font-medium text-gray-700">Filters</span>
                <PlusIcon aria-hidden="true" className="ml-1 size-5 shrink-0 text-gray-400" />
              </button>

              <div className="hidden lg:block">
                <form className="space-y-10 divide-y divide-gray-200">
                  {filters.map((section, sectionIdx) => (
                    <div key={section.name} className={sectionIdx === 0 ? null : 'pt-10'}>
                      <fieldset>
                        <legend className="block text-sm font-medium text-gray-900">{section.name}</legend>
                        <div className="space-y-3 pt-6">
                          {section.options.map((option, optionIdx) => (
                            <div key={option.value} className="flex gap-3">
                              <div className="flex h-5 shrink-0 items-center">
                                <div className="group grid size-4 grid-cols-1">
                                  <input
                                    defaultValue={option.value}
                                    id={`${section.id}-${optionIdx}`}
                                    name={`${section.id}[]`}
                                    type="checkbox"
                                    className="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                  />
                                  <svg
                                    fill="none"
                                    viewBox="0 0 14 14"
                                    className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                                  >
                                    <path
                                      d="M3 8L6 11L11 3.5"
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className="opacity-0 group-has-[:checked]:opacity-100"
                                    />
                                    <path
                                      d="M3 7H11"
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className="opacity-0 group-has-[:indeterminate]:opacity-100"
                                    />
                                  </svg>
                                </div>
                              </div>
                              <label htmlFor={`${section.id}-${optionIdx}`} className="text-sm text-gray-600">
                                {option.label}
                              </label>
                            </div>
                          ))}
                        </div>
                      </fieldset>
                    </div>
                  ))}
                </form>
              </div>
            </aside> */}

            <section aria-labelledby="product-heading" className="mt-6 lg:col-span-2 lg:mt-0 xl:col-span-3">
              <h2 id="product-heading" className="sr-only">
                Products
              </h2>

              <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8">
                {products.map((product) => (
                  <div key={product.id} className="group relative">
                    <div className="h-56 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-72 xl:h-80">
                      <img alt={product.image.altText} src={product.image.sourceUrl} srcSet={product.image.srcSet} className="size-full object-cover" />
                    </div>
                    <h3 className="mt-4 text-sm text-gray-700">
                      <a href={'/products/' + product.slug}>
                        <span className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    {/* <p className="mt-1 text-sm text-gray-500">{product.color}</p> */}
                    <p className="mt-1 text-sm font-medium text-gray-900">{product.price}</p>
                  </div>
                ))}
              </div>

            </section>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  )
}
