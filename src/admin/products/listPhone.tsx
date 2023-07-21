import React, { useEffect, useState } from "react";
import { Space, Table, Button, Popconfirm, message, Image } from "antd";

import type { ColumnsType } from "antd/es/table";

import { NavLink } from "react-router-dom";
import { deleteId, getAll } from "../../api/products";
import { IProduct } from "../../models";

interface DataType {
  key: string;
  name: string;
  price: number;
  original_price: number;
  short_description: string;
  description: string;
  images: string;
  brand: string;
}

const columns: ColumnsType<DataType> = [
  {
    key: "name",
    title: "Tên",
    dataIndex: "name",
    align: "center",
    width: "10%",
  },
  {
    key: "price",
    title: "Giá",
    dataIndex: "price",
    align: "center",
    width: "10%",
  },

  {
    key: "description",
    title: "Mô tả",
    dataIndex: "description",
    align: "center",
    width: "15%",
    render: (text) => (
      <span>{text.length > 20 ? `${text.slice(0, 30)}...` : text}</span>
    ),
  },
  {
    key: "soLuong",
    title: "Số lượng",
    dataIndex: "soLuong",
    align: "center",
    width: "10%",
  },
  {
    key: "images",
    title: "Hình ảnh",
    dataIndex: "images",
    align: "center",
    width: "20%",
    render: (text: string) => <Image width={100} src={text} />,
  },

  {
    key: "action",
    title: "Thao tác",
    align: "center",
    width: "15%",
    render: (_, record) => (
      <Space size="middle">
        <NavLink to={`/admin/product/edit/${record.key}`}>
          <Button>
            <div className="flex ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-pencil-square"
                viewBox="0 0 16 16"
              >
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                <path
                  fill-rule="evenodd"
                  d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                />
              </svg>
            </div>
          </Button>
        </NavLink>

        <Popconfirm
          placement="topLeft"
          title="Bạn muốn xóa sản phẩm?"
          description="Xóa sẽ mất sản phẩm này trong database!"
          onConfirm={() => {
            deleteId(record.key);
            message.success("Xóa sản phẩm thành công!");
          }}
          okText="Yes"
          cancelText="No"
          okButtonProps={{
            style: { backgroundColor: "#007bff", color: "white" },
          }}
          cancelButtonProps={{
            style: { backgroundColor: "#dc3545", color: "white" },
          }}
        >
          <Button>
            <div className="flex ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-trash-fill"
                viewBox="0 0 16 16"
              >
                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
              </svg>
            </div>
          </Button>
        </Popconfirm>
      </Space>
    ),
  },
];

export const ListPhone: React.FC = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProduct() {
      let { data } = await getAll();

      setProducts(
        data.map((item: IProduct) => {
          return {
            key: item._id,
            name: item.name,
            price: item.price,
            soLuong: item.soLuong,
            description: item.desc,
            images: item.images,
          };
        })
      );
    }

    fetchProduct();
  }, [products]);

  return (
    <Table
      columns={columns}
      dataSource={products}
      pagination={{ pageSize: 3 }}
    />
  );
};
