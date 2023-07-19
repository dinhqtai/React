
import { useEffect, useState } from 'react'
import Product from '../components/products'
import { IProduct } from '../models'
import { getAll } from '../api/products'
import { getAllcategory } from '../api/category'
import { ICategory } from '../model/category'
import Category from '../components/category'
const Home = () => {
    const [products, setProducts] = useState<IProduct[]>([])
    const [category, setCategory] = useState<ICategory[]>([])
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const { data } = await getAll()
                setProducts(data)

            } catch (err) {
                console.log(err);
            }
        }
        fetchProduct()
        const fetchCategory = async () => {
            try {
                const { data } = await getAllcategory()
                setCategory(data)
            } catch (err) {
                console.log(err);

            }
        }
        fetchCategory()
    }, [])
    return <>
        <section className="bg-white dark:bg-gray-900">
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className="mr-auto place-self-center lg:col-span-7">
                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Payments tool for software companies</h1>
                    <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.</p>
                    <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                        Go to shop
                    </a>
                </div>
                <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="mockup"></img>
                </div>
            </div>
        </section>
        <div className='w-[90%] mx-auto my-[40px]'>
            <div className="max-w-screen-xl px-4 mx-auto lg:px-12 w-full">
                <div className="relative bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
                    <div className="flex flex-col items-center justify-between p-4 space-y-3 md:flex-row md:space-y-0 md:space-x-4">
                        <div className="w-full md:w-1/2">
                            <form className="flex items-center">
                                <label className="sr-only">Search</label>
                                <div className="relative w-full">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <form action="">
                                        <input type="text" id="simple-search" className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Tìm kiếm sản phẩm" ></input>
                                        {/* <button type="submit" onClick={handleSubmit(onChange)}>Search</button> */}
                                    </form>
                                </div>
                            </form>
                        </div>
                        <div className="flex flex-col items-stretch justify-end flex-shrink-0 w-full space-y-2 md:w-auto md:flex-row md:space-y-0 md:items-center md:space-x-3">
                            <button type="button" className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
                                <svg className="h-3.5 w-3.5 mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path clipRule="evenodd" fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
                                </svg>
                                Add product
                            </button>
                            <div className="flex items-center w-full space-x-3 md:w-auto">
                                <button id="actionsDropdownButton" data-dropdown-toggle="actionsDropdown" className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg md:w-auto focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" type="button">
                                    <svg className="-ml-1 mr-1.5 w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path clipRule="evenodd" fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                                    </svg>
                                    Actions
                                </button>
                                <div id="actionsDropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                                    <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="actionsDropdownButton">
                                        <li>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Mass Edit</a>
                                        </li>
                                    </ul>
                                    <div className="py-1">
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete all</a>
                                    </div>
                                </div>
                                <button id="filterDropdownButton" data-dropdown-toggle="filterDropdown" className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg md:w-auto focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" type="button">
                                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-4 h-4 mr-2 text-gray-400" fill="currentColor">
                                        <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd" />
                                    </svg>
                                    Filter
                                    <svg className="-mr-1 ml-1.5 w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path clipRule="evenodd" fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                                    </svg>
                                </button>
                                <div id="filterDropdown" className="z-10 hidden w-48 p-3 bg-white rounded-lg shadow dark:bg-gray-700">
                                    <h6 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
                                        Category
                                    </h6>
                                    <ul className="space-y-2 text-sm" aria-labelledby="dropdownDefault">
                                        <li className="flex items-center">
                                            <input id="apple" type="checkbox" value=""
                                                className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                            <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                                                Apple (56)
                                            </label>
                                        </li>
                                        <li className="flex items-center">
                                            <input id="fitbit" type="checkbox" value=""
                                                className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                            <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                                                Fitbit (56)
                                            </label>
                                        </li>
                                        <li className="flex items-center">
                                            <input id="dell" type="checkbox" value=""
                                                className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                            <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                                                Dell (56)
                                            </label>
                                        </li>
                                        <li className="flex items-center">
                                            <input id="asus" type="checkbox" value=""
                                                className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                            <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                                                Asus (97)
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='my-[45px] mb-4 text-xl tracking-tight font-extrabold text-gray-900 dark:text-white'>
                Danh mục sản phẩm
            </div>
            <div id="container" className="w-8/10 mx-auto">
                <div className="flex flex-col sm:flex-row w-[30%]">
                    {category ? category.map(category => <Category
                        data={category}
                        key={category._id} />) : null}
                </div>
            </div>
            <div className='my-[45px] mb-4 text-xl tracking-tight font-extrabold text-gray-900 dark:text-white'>
                Danh sách sản phẩm
            </div>
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {products ? products.map(product => <Product
                    data={product}
                    key={product._id} />) : null}
            </div>
            <section className="bg-white dark:bg-gray-900">
                <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                    <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">We didn't reinvent the wheel</h2>
                        <p className="mb-4">We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need.</p>
                        <p>We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick.</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-8">
                        <img className="w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1"></img>
                        <img className="mt-4 w-full lg:mt-10 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2"></img>
                    </div>
                </div>
            </section>
        </div>
        <section className="m-4 md:m-8 dark:bg-gray-800 dark:text-gray-100">
            <div className="container mx-auto p-4 my-6 space-y-2 text-center">
                <h2 className="text-5xl font-bold">Built to empower every team</h2>
                <p className="dark:text-gray-400">Libero minima optio qui</p>
            </div>
            <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <div className="flex flex-col items-center p-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 dark:text-violet-400">
                        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
                    </svg>
                    <h3 className="my-3 text-3xl font-semibold">Product</h3>
                    <div className="space-y-1 leadi">
                        <p>Similique quas ea veniam</p>
                        <p>Tempore quasi porro</p>
                        <p>Blanditiis aut mollitia ex</p>
                    </div>
                </div>
                <div className="flex flex-col items-center p-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 dark:text-violet-400">
                        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
                    </svg>
                    <h3 className="my-3 text-3xl font-semibold">Product</h3>
                    <div className="space-y-1 leadi">
                        <p>Similique quas ea veniam</p>
                        <p>Tempore quasi porro</p>
                        <p>Blanditiis aut mollitia ex</p>
                    </div>
                </div>
                <div className="flex flex-col items-center p-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 dark:text-violet-400">
                        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
                    </svg>
                    <h3 className="my-3 text-3xl font-semibold">Product</h3>
                    <div className="space-y-1 leadi">
                        <p>Similique quas ea veniam</p>
                        <p>Tempore quasi porro</p>
                        <p>Blanditiis aut mollitia ex</p>
                    </div>
                </div>
                <div className="flex flex-col items-center p-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 dark:text-violet-400">
                        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
                    </svg>
                    <h3 className="my-3 text-3xl font-semibold">Product</h3>
                    <div className="space-y-1 leadi">
                        <p>Similique quas ea veniam</p>
                        <p>Tempore quasi porro</p>
                        <p>Blanditiis aut mollitia ex</p>
                    </div>
                </div>
                <div className="flex flex-col items-center p-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 dark:text-violet-400">
                        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
                    </svg>
                    <h3 className="my-3 text-3xl font-semibold">Product</h3>
                    <div className="space-y-1 leadi">
                        <p>Similique quas ea veniam</p>
                        <p>Tempore quasi porro</p>
                        <p>Blanditiis aut mollitia ex</p>
                    </div>
                </div>
                <div className="flex flex-col items-center p-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 dark:text-violet-400">
                        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
                    </svg>
                    <h3 className="my-3 text-3xl font-semibold">Product</h3>
                    <div className="space-y-1 leadi">
                        <p>Similique quas ea veniam</p>
                        <p>Tempore quasi porro</p>
                        <p>Blanditiis aut mollitia ex</p>
                    </div>
                </div>
            </div>
        </section>
        <div className='mx-auto max-w-screen-xl sm:py-16 lg:px-6'>
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white flex justify-center">Blogs</h2>
            <div className='grid grid-cols-3 gap-4 py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6'>
                <article
                    className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm"
                >
                    <img
                        alt="Office"
                        src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                        className="h-56 w-full object-cover"
                    />

                    <div className="p-4 sm:p-6">
                        <a href="#">
                            <h3 className="text-lg font-medium text-gray-900">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </h3>
                        </a>

                        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                            dolores, possimus pariatur animi temporibus nesciunt praesentium dolore
                            sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta,
                            voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
                            Molestias explicabo corporis voluptatem?
                        </p>

                        <a
                            href="#"
                            className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
                        >
                            Find out more

                            <span
                                aria-hidden="true"
                                className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                            >
                                &rarr;
                            </span>
                        </a>
                    </div>
                </article>
                <article
                    className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm"
                >
                    <img
                        alt="Office"
                        src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                        className="h-56 w-full object-cover"
                    />

                    <div className="p-4 sm:p-6">
                        <a href="#">
                            <h3 className="text-lg font-medium text-gray-900">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </h3>
                        </a>

                        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                            dolores, possimus pariatur animi temporibus nesciunt praesentium dolore
                            sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta,
                            voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
                            Molestias explicabo corporis voluptatem?
                        </p>

                        <a
                            href="#"
                            className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
                        >
                            Find out more

                            <span
                                aria-hidden="true"
                                className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                            >
                                &rarr;
                            </span>
                        </a>
                    </div>
                </article>
                <article
                    className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm"
                >
                    <img
                        alt="Office"
                        src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                        className="h-56 w-full object-cover"
                    />

                    <div className="p-4 sm:p-6">
                        <a href="#">
                            <h3 className="text-lg font-medium text-gray-900">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </h3>
                        </a>

                        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                            dolores, possimus pariatur animi temporibus nesciunt praesentium dolore
                            sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta,
                            voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
                            Molestias explicabo corporis voluptatem?
                        </p>

                        <a
                            href="#"
                            className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
                        >
                            Find out more

                            <span
                                aria-hidden="true"
                                className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                            >
                                &rarr;
                            </span>
                        </a>
                    </div>
                </article>
            </div>
        </div>
    </>
}

export default Home