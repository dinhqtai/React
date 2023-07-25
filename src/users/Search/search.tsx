import { useEffect, useMemo, useState } from "react";

import { NavLink, useParams } from "react-router-dom";
import { IProduct } from "../../models";
import { getAll } from "../../api/products";

export const SearchPage = () => {
  const formatter = (value: number) =>
    `${value} ₫`.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  const [products, setProducts] = useState<IProduct[]>([]);
  const { searchValue = "" } = useParams<{ searchValue: string }>();

  useEffect(() => {
    async function fetchProduct() {
      let { data } = await getAll();
      setProducts(data);
    }
    fetchProduct();
  }, []);

  const filteredProducts = useMemo(
    () =>
      products.filter((product: IProduct) =>
        product.name.toLowerCase().includes(searchValue.toLowerCase())
      ),
    [products, searchValue]
  );

  return (
    <div>
      {filteredProducts && filteredProducts.length > 0 ? (
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-4 sm:grid-cols-2 lg:grid-cols-4 shadow-2xl place-items-center rounded-lg p-1">
          {filteredProducts.map((product: IProduct) => (
            <NavLink key={product._id} to={`detail/${product._id}`}>
              <div
                key={product._id}
                className="group z-[-99] relative border shadow rounded-[10px] p-4 w-[300px]"
              >
                <div className="flex justify-center items-center min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md  lg:aspect-none group-hover:opacity-75 lg:h-50">
                  <img
                    title="image"
                    src={product.images[0].base_url}
                    className="h-full w-full m-4 object-cover object-center lg:h-full lg:w-full"
                  />
                </div>

                <div className="mt-4">
                  <h3 className="text-[#1D1D1F] font-bold text-[18px]">
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                  </h3>
                </div>

                <div className="flex items-center mt-4 space-x-4">
                  <span className="text-[#0066CC] font-bold text-[16px]">
                    {formatter(product?.variants[0]?.price)}
                  </span>
                  <span className="text-[#86868B] line-through text-[14px]">
                    {formatter(product?.variants[0]?.original_price)}
                  </span>
                  <span className="text-[#86868B] text-[14px]">
                    -
                    {Math.round(
                      ((product?.variants[0]?.original_price -
                        product?.variants[0]?.price) /
                        product?.variants[0]?.original_price) *
                        100
                    )}
                    %
                  </span>
                </div>

                <div className="mt-4 text-[#f59e0b] text-[13px]">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
              </div>
            </NavLink>
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <span className="m-10 text-[18px] font-semibold">
            Không có kết quả
          </span>
        </div>
      )}
    </div>
  );
};
