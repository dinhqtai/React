const Shop = () => {
    return <>
    <div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
		<div className="flex flex-row flex-wrap-reverse justify-center">
			
			<div className="flex flex-col justify-center m-8 text-center">
				<img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJrCXLeMRU5gUS7dmcMNM0byZPE4yoie82rg&usqp=CAU"></img>
				<p className="text-xl font-semibold leadi">Dien thoai</p>
				<p className="dark:text-gray-400">Visual Designer</p>
			</div>
			<div className="flex flex-col justify-center m-8 text-center">
				<img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="data:image/jpeg;base64,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"></img>
				<p className="text-xl font-semibold leadi">laptop</p>
				<p className="dark:text-gray-400">Visual Designer</p>
			</div>
			<div className="flex flex-col justify-center m-8 text-center">
				<img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="data:image/jpeg;base64,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"></img>
				<p className="text-xl font-semibold leadi">dong ho</p>
				<p className="dark:text-gray-400">Visual Designer</p>
			</div>
			<div className="flex flex-col justify-center m-8 text-center">
				<img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?4"></img>
				<p className="text-xl font-semibold leadi">phu kien</p>
				<p className="dark:text-gray-400">Visual Designer</p>
			</div>
			
		</div>
	</div>
        <div className="max-w-screen-xl px-4 mx-auto lg:px-12 w-full mt-10 ">
            <div className="relative bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
                <div className="flex flex-col items-center justify-between p-4 space-y-3 md:flex-row md:space-y-0 md:space-x-4">
                    <div className="w-full md:w-1/2 ">
                        <form className="flex items-center">
                            <label className="sr-only">Search</label>
                            <div className="relative w-full">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
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
                    <button type="button" className="px-8 py-3 font-semibold border rounded dark:border-gray-100 dark:text-gray-100">sap xep theo gia</button>
                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                            <path d="M18.85 1.1A1.99 1.99 0 0 0 17.063 0H2.937a2 2 0 0 0-1.566 3.242L6.99 9.868 7 14a1 1 0 0 0 .4.8l4 3A1 1 0 0 0 13 17l.01-7.134 5.66-6.676a1.99 1.99 0 0 0 .18-2.09Z" />
                        </svg>
                    </div>

                </div>
            </div>
        </div>
        <section className="py-6 dark:bg-gray-800 dark:text-gray-100">
	
</section>
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Smart Phone</h2>
                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    <div className="group relative">
                        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                            <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" alt="Front of men&#039;s Basic Tee in black." className="h-full w-full object-cover object-center lg:h-full lg:w-full"></img>
                        </div>
                        <div className="mt-4 flex justify-between">
                            <div>
                                <h3 className="text-sm text-gray-700">
                                    <a href="#">
                                        <span aria-hidden="true" className="absolute inset-0"></span>
                                        Basic Tee
                                    </a>
                                </h3>
                                <p className="mt-1 text-sm text-gray-500">Black</p>
                            </div>
                            <p className="text-sm font-medium text-gray-900">$35</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Lap Top</h2>
                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    <div className="group relative">
                        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                            <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" alt="Front of men&#039;s Basic Tee in black." className="h-full w-full object-cover object-center lg:h-full lg:w-full"></img>
                        </div>
                        <div className="mt-4 flex justify-between">
                            <div>
                                <h3 className="text-sm text-gray-700">
                                    <a href="#">
                                        <span aria-hidden="true" className="absolute inset-0"></span>
                                        Basic Tee
                                    </a>
                                </h3>
                                <p className="mt-1 text-sm text-gray-500">Black</p>
                            </div>
                            <p className="text-sm font-medium text-gray-900">$35</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Đồng Hồ</h2>
                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    <div className="group relative">
                        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                            <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" alt="Front of men&#039;s Basic Tee in black." className="h-full w-full object-cover object-center lg:h-full lg:w-full"></img>
                        </div>
                        <div className="mt-4 flex justify-between">
                            <div>
                                <h3 className="text-sm text-gray-700">
                                    <a href="#">
                                        <span aria-hidden="true" className="absolute inset-0"></span>
                                        Basic Tee
                                    </a>
                                </h3>
                                <p className="mt-1 text-sm text-gray-500">Black</p>
                            </div>
                            <p className="text-sm font-medium text-gray-900">$35</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}
export default Shop