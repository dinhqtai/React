
import { useEffect, useState } from 'react'
import Product from '../components/products'
import { IProduct } from '../models'
import { getAll, searchProductsName } from '../api/products'
import { getAllcategory } from '../api/category'
import { ICategory } from '../model/category'
import Category from '../components/category'
import { useForm } from "react-hook-form"
import { ISearchProductName } from '../model/products'
const Home = () => {
    const [products, setProducts] = useState<IProduct[]>([])
    const [category, setCategory] = useState<ICategory[]>([])
    const [mess, setMess] = useState("")
    const { register, handleSubmit } = useForm<ISearchProductName>({})
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
    const onSubmit = async (data: ISearchProductName) => {
        try {
            const search = await searchProductsName(data)
            if (search.data.checkSearchName.length === 0) {
                setMess("Sản phẩm không tồn tại")
                setProducts([])
            } else {
                setProducts(search.data.checkSearchName)
            }
        } catch (errors) {
            console.log(errors)
        }

    }
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
                                <button type='submit' className="sr-only" onClick={handleSubmit(onSubmit)}>Search</button>
                                <div className="relative w-full">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <input type="text" {...register("name")} id="simple-search" className=" block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Tìm kiếm sản phẩm" ></input>
                                    {/* <button type="submit" onClick={handleSubmit(onChange)}>Search</button> */}
                                </div>
                            </form>
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
                {mess}
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
				<path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd"></path>
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
				<path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd"></path>
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
				<path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd"></path>
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
				<path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd"></path>
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
				<path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd"></path>
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
				<path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd"></path>
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
<section className="p-4 lg:p-8 dark:bg-gray-800 dark:text-gray-100">
	<div className="container mx-auto space-y-12">
		<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
			<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQal9J-nQz47j4ASoSn1Hpr3lfGR8qXZXANM5WLaOksq5YG74eVBw7RE_MkYW1Hj1qANGo&usqp=CAU" alt="" className="h-80 dark:bg-gray-500 aspect-video"></img>
			<div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
				<span className="text-xs uppercase dark:text-gray-400">Join, it's free</span>
				<h3 className="text-3xl font-bold">We're not reinventing the wheel</h3>
				<p className="my-6 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus quas, error esse quos.</p>
				<button type="button" className="self-start">Action</button>
			</div>
		</div>
		<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
			<img src="data:image/jpeg;base64,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" alt="" className="h-80 dark:bg-gray-500 aspect-video"></img>
			<div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
				<span className="text-xs uppercase dark:text-gray-400">Join, it's free</span>
				<h3 className="text-3xl font-bold">We're not reinventing the wheel</h3>
				<p className="my-6 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus quas, error esse quos.</p>
				<button type="button" className="self-start">Action</button>
			</div>
		</div>
		<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
			<img src="data:image/jpeg;base64,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" alt="" className="h-80 dark:bg-gray-500 aspect-video"></img>
			<div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
				<span className="text-xs uppercase dark:text-gray-400">Join, it's free</span>
				<h3 className="text-3xl font-bold">We're not reinventing the wheel</h3>
				<p className="my-6 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus quas, error esse quos.</p>
				<button type="button" className="self-start">Action</button>
			</div>
		</div>
	</div>
</section>
    </>
}

export default Home