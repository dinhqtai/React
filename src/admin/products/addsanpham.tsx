import React, { useEffect, useState } from "react";
import { Button, Form, Input, InputNumber, message, Select } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { IProduct } from "../../models";

import { getAllCategory } from "../../api/category";
import { postId } from "../../api/products";

export const Addsanpham = () => {
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

  const onFinish = async (data: IProduct) => {
    try {
      const checkEdit = await postId(data);
      if (checkEdit) {
        message.success("Thêm mới sản phẩm thành công!");
        setTimeout(() => {
          navigate("/admin/product");
        }, 1000);
      } else {
        throw new Error("Thêm mới sản phẩm thất bại!");
      }
    } catch (error: any) {
      message.error(error.message);
    }
  };

  useEffect(() => {
    let getCate = async () => {
      const { data } = await getAllCategory();
      setCate(data.map((c: any) => ({ value: c._id, label: c.name })));
    };
    getCate();
  }, []);

  return (
    <div>
      <div className="flex justify-center items-center border-b-[2px]">
        <span className="text-[25px] font-bold mb-5">Thêm mới sản phẩm</span>
      </div>

      <div className="mt-5">
        <Form
          {...layout}
          name="nest-messages"
          onFinish={onFinish}
          style={{ maxWidth: 950 }}
          validateMessages={validateMessages}
        >
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
            rules={[{ required: true, type: "number", min: 1, max: 999999999 }]}
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
            <Input.TextArea />
          </Form.Item>
          <Form.Item
            name="soLuong"
            label="Số lượng"
            rules={[{ required: true, type: "number", min: 1, max: 999999999 }]}
          >
            <InputNumber className="w-full" />
          </Form.Item>

          <Form.Item name="images" label="Ảnh" rules={[{ required: true }]}>
            <Input className="w-full rounded-lg" />
          </Form.Item>

          <Form.Item
            className="flex justify-center ml-72"
            wrapperCol={{ ...layout.wrapperCol, offset: 8 }}
          >
            <Button type="primary" ghost htmlType="submit">
              Thêm
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
