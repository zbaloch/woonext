import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { gql, request } from 'graphql-request';

import {
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from '@headlessui/react'
import { StarIcon } from '@heroicons/react/20/solid'
import endpoint from "@/util/woo";

const product = {
  name: 'Zip Tote Basket',
  price: '$140',
  rating: 4,
  images: [
    {
      id: 1,
      name: 'Angled view',
      src: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-03-product-01.jpg',
      alt: 'Angled front view with bag zipped and handles upright.',
    },
    {
        id: 2,
        name: 'Angled view',
        src: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-03-product-01.jpg',
        alt: 'Angled front view with bag zipped and handles upright.',
    },
    {
        id: 3,
        name: 'Angled view',
        src: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-03-product-01.jpg',
        alt: 'Angled front view with bag zipped and handles upright.',
    },
    {
        id: 4,
        name: 'Angled view',
        src: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-03-product-01.jpg',
        alt: 'Angled front view with bag zipped and handles upright.',
    }
  ],
  colors: [
    { name: 'Washed Black', bgColor: 'bg-gray-700', selectedColor: 'ring-gray-700' },
    { name: 'White', bgColor: 'bg-white', selectedColor: 'ring-gray-400' },
    { name: 'Washed Gray', bgColor: 'bg-gray-500', selectedColor: 'ring-gray-500' },
  ],
  description: `
    <p>The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.</p>
  `,
  details: [
    {
      name: 'Features',
      items: [
        'Multiple strap configurations',
        'Spacious interior with top zip',
        'Leather handle and tabs',
        'Interior dividers',
        'Stainless strap loops',
        'Double stitched construction',
        'Water-resistant',
      ],
    },
    // More sections...
  ],
}

function classNames(...classes: (string | boolean | undefined)[]): string {
  return classes.filter(Boolean).join(' ')
}

export default async function Home() {

//   const [selectedColor, setSelectedColor] = useState(product.colors[0])
  
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
   <>
      <Navigation /> 
        <main>
        <div className="bg-white">
            

            <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-6 lg:max-w-7xl lg:px-8">
                
                {/* <nav aria-label="Breadcrumb">
                    <ol role="list" className="flex items-center space-x-4">
                        <li>
                        <div className="flex items-center">
                            <a href="#" className="mr-4 text-sm font-medium text-gray-900">Women</a>
                            <svg viewBox="0 0 6 20" aria-hidden="true" className="h-5 w-auto text-gray-300">
                            <path d="M4.878 4.34H3.551L.27 16.532h1.327l3.281-12.19z" fill="currentColor" />
                            </svg>
                        </div>
                        </li>
                        <li>
                        <div className="flex items-center">
                            <a href="#" className="mr-4 text-sm font-medium text-gray-900">Clothing</a>
                            <svg viewBox="0 0 6 20" aria-hidden="true" className="h-5 w-auto text-gray-300">
                            <path d="M4.878 4.34H3.551L.27 16.532h1.327l3.281-12.19z" fill="currentColor" />
                            </svg>
                        </div>
                        </li>

                        <li className="text-sm">
                        <a href="#" aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">Basic Tee</a>
                        </li>
                    </ol>
                </nav> */}


                <div className="mt-4 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
                {/* Image gallery */}
                <TabGroup className="flex flex-col-reverse">
                    {/* Image selector */}
                    <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
                    <TabList className="grid grid-cols-4 gap-6">
                        {product.images.map((image) => (
                        <Tab
                            key={image.id}
                            className="group relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-indigo-500/50 focus:ring-offset-4"
                        >
                            <span className="sr-only">{image.name}</span>
                            <span className="absolute inset-0 overflow-hidden rounded-md">
                            <img alt="" src={image.src} className="size-full object-cover" />
                            </span>
                            <span
                            aria-hidden="true"
                            className="pointer-events-none absolute inset-0 rounded-md ring-2 ring-transparent ring-offset-2 group-data-[selected]:ring-indigo-500"
                            />
                        </Tab>
                        ))}
                    </TabList>
                    </div>

                    <TabPanels>
                    {product.images.map((image) => (
                        <TabPanel key={image.id}>
                        <img alt={image.alt} src={image.src} className="aspect-square w-full object-cover sm:rounded-lg" />
                        </TabPanel>
                    ))}
                    </TabPanels>
                </TabGroup>

                {/* Product info */}
                <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">{product.name}</h1>

                    <div className="mt-3">
                    <h2 className="sr-only">Product information</h2>
                    <p className="text-3xl tracking-tight text-gray-900">{product.price}</p>
                    </div>

                    {/* Reviews */}
                    <div className="mt-3">
                    <h3 className="sr-only">Reviews</h3>
                    <div className="flex items-center">
                        <div className="flex items-center">
                        {[0, 1, 2, 3, 4].map((rating) => (
                            <StarIcon
                            key={rating}
                            aria-hidden="true"
                            className={classNames(
                                product.rating > rating ? 'text-indigo-500' : 'text-gray-300',
                                'size-5 shrink-0',
                            )}
                            />
                        ))}
                        </div>
                        <p className="sr-only">{product.rating} out of 5 stars</p>
                    </div>
                    </div>

                    <div className="mt-6">
                    <h3 className="sr-only">Description</h3>

                    <div
                        dangerouslySetInnerHTML={{ __html: product.description }}
                        className="space-y-6 text-base text-gray-700"
                    />
                    </div>

                    <form className="mt-6">
                    {/* Colors */}
                    {/* <div>
                        <h3 className="text-sm font-medium text-gray-600">Color</h3>

                        <fieldset aria-label="Choose a color" className="mt-2">
                        <RadioGroup value={selectedColor} onChange={setSelectedColor} className="flex items-center gap-x-3">
                            {product.colors.map((color) => (
                            <Radio
                                key={color.name}
                                value={color}
                                aria-label={color.name}
                                className={classNames(
                                color.selectedColor,
                                'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none data-[checked]:ring-2 data-[focus]:data-[checked]:ring data-[focus]:data-[checked]:ring-offset-1',
                                )}
                            >
                                <span
                                aria-hidden="true"
                                className={classNames(color.bgColor, 'size-8 rounded-full border border-black/10')}
                                />
                            </Radio>
                            ))}
                        </RadioGroup>
                        </fieldset>
                    </div> */}

                    <div className="mt-10 flex">
                        <button
                        type="submit"
                        className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
                        >
                        Add to bag
                        </button>

                        {/* <button
                        type="button"
                        className="ml-4 flex items-center justify-center rounded-md px-3 py-3 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
                        >
                        <HeartIcon aria-hidden="true" className="size-6 shrink-0" />
                        <span className="sr-only">Add to favorites</span>
                        </button> */}
                    </div>
                    </form>

                    {/* <section aria-labelledby="detailed-description" className="py-12">
                        <h2 id="detailed-description" className="sr-only">
                            Detailed description
                        </h2>
                    
                        <div className="divide-y divide-gray-200 border-t">
                            <div
                                dangerouslySetInnerHTML={{ __html: product.description }}
                                className="space-y-6 text-base text-gray-700 mt-6"
                            />
                        </div>
                    </section> */}

                    {/* <section aria-labelledby="details-heading" className="mt-12">
                    <h2 id="details-heading" className="sr-only">
                        Additional details
                    </h2>

                    <div className="divide-y divide-gray-200 border-t">
                        {product.details.map((detail) => (
                        <Disclosure key={detail.name} as="div">
                            <h3>
                            <DisclosureButton className="group relative flex w-full items-center justify-between py-6 text-left">
                                <span className="text-sm font-medium text-gray-900 group-data-[open]:text-indigo-600">
                                {detail.name}
                                </span>
                                <span className="ml-6 flex items-center">
                                <PlusIcon
                                    aria-hidden="true"
                                    className="block size-6 text-gray-400 group-hover:text-gray-500 group-data-[open]:hidden"
                                />
                                <MinusIcon
                                    aria-hidden="true"
                                    className="hidden size-6 text-indigo-400 group-hover:text-indigo-500 group-data-[open]:block"
                                />
                                </span>
                            </DisclosureButton>
                            </h3>
                            <DisclosurePanel className="pb-6">
                            <ul role="list" className="list-disc space-y-1 pl-5 text-sm/6 text-gray-700 marker:text-gray-300">
                                {detail.items.map((item) => (
                                <li key={item} className="pl-2">
                                    {item}
                                </li>
                                ))}
                            </ul>
                            </DisclosurePanel>
                        </Disclosure>
                        ))}
                    </div>

                    </section> */}

                </div>
                </div>
            </div>
            </div>
        </main>
      <Footer />
   </>
  );
}
