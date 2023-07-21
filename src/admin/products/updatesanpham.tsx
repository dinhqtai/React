import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Button, Form, Input, InputNumber, message, Select } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { IProduct } from "../../models";
import { getById, putId } from "../../api/products";
import { getAllcategory } from "../../api/category";

export const AdminEditProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();
  const [cate, setCate] = useState();
  const navigate = useNavigate();

  const FormItem = Form.Item;

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  const validateMessages = {
    required: "${label} không được để trống!",
    types: {
      number: "${label} không phải là một số hợp lệ!",
    },
    number: {
      range: "${label} phải nằm trong khoảng từ ${min} đến ${max}",
      min: "${label} không được nhỏ hơn 1",
    },
  };

  const onFinish = async (values: IProduct) => {
    try {
      const checkEdit = await putId(values._id, values);
      if (checkEdit) {
        message.success("Cập nhật sản phẩm thành công!");
        setTimeout(() => {
          navigate("/admin/product");
        }, 1000);
      } else {
        throw new Error("Cập nhật sản phẩm thất bại!");
      }
    } catch (error: any) {
      message.error(error.message);
    }
  };

  useEffect(() => {
    let getProduct = async () => {
      const { data } = await getById(id as string);
      setProduct(data);
    };
    getProduct();

    let getCate = async () => {
      const { data } = await getAllcategory();
      setCate(data.map((c: any) => ({ value: c._id, label: c.name })));
    };
    getCate();
  }, []);

  return (
    <div>
      <div className="flex justify-center items-center border-b-[2px]">
        <span className="text-[25px] font-bold mb-5">Cập nhật sản phẩm</span>
      </div>

      <div className="mt-5">
        {product ? (
          <Form
            {...layout}
            name="nest-messages"
            onFinish={onFinish}
            style={{ maxWidth: 950 }}
            validateMessages={validateMessages}
            initialValues={product}
          >
            <Form.Item name="_id" label="Mã sản phẩm">
              <Input disabled />
            </Form.Item>

            <Form.Item
              name="name"
              label="Tên sản phẩm"
              rules={[{ required: true }]}
            >
              <Input className="rounded-lg" />
            </Form.Item>

            <Form.Item
              name="price"
              label="Giá bán"
              rules={[
                { required: true, type: "number", min: 1, max: 999999999 },
              ]}
            >
              <InputNumber className="w-full" />
            </Form.Item>

            <Form.Item
              name="category_id"
              label="Danh mục"
              rules={[{ required: true }]}
            >
              <Select
                showSearch
                className="w-[full"
                placeholder="Chọn danh mục"
                optionFilterProp="children"
                filterOption={(input, option) =>
                  ((option?.label as string) ?? "")
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
                options={cate}
              />
            </Form.Item>

            <Form.Item name="desc" label="Mô tả" rules={[{ required: true }]}>
              <Input.TextArea rows={15} />
            </Form.Item>

            <Form.Item name="images" label="Ảnh" rules={[{ required: true }]}>
              <Input className="rounded-lg" />
            </Form.Item>
            <Form.Item
              name="soLuong"
              label="Số lượng"
              rules={[{ required: true }]}
            >
              <Input className="rounded-lg" />
            </Form.Item>

            <Form.Item
              className="flex justify-center ml-72"
              wrapperCol={{ ...layout.wrapperCol, offset: 8 }}
            >
              <Button type="primary" ghost htmlType="submit">
                Cập nhật
              </Button>
            </Form.Item>
          </Form>
        ) : (
          <div className="flex justify-center">Đang lấy dữ liệu</div>
        )}
      </div>
    </div>
  );
};
