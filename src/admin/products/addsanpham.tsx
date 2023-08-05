import React, { useEffect, useState } from "react";
import { Button, Form, Input, InputNumber, message, Select, Space } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { IProduct } from "../../models";
import { postId } from "../../api/products";
import { getAllCategory } from "../../api/category";

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

  const onFinish = async (values: IProduct) => {
    try {
      const checkEdit = await postId(values);
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
            <Input className="" />
          </Form.Item>

          <Form.Item
            name="short_description"
            label="Mô tả ngắn"
            rules={[{ required: true }]}
          >
            <Input.TextArea />
          </Form.Item>

          <Form.Item name="desc" label="Mô tả" rules={[{ required: true }]}>
            <Input.TextArea />
          </Form.Item>

          <Form.Item name="specifications" label="Biến thể">
            <Form.List name="variants">
              {(fields, { add, remove }) => (
                <>
                  {fields.map((field) => (
                    <div className="">
                      <div key={field.key} className="flex items-center">
                        <FormItem
                          {...field}
                          label="Tên màu"
                          name={[field.name, "nameColor"]}
                          rules={[
                            {
                              required: true,
                              message: "Vui lòng nhập name",
                            },
                          ]}
                          className="mt-5"
                        >
                          <Input placeholder="Nhập name" />
                        </FormItem>
                        <FormItem
                          {...field}
                          label="Code"
                          name={[field.name, "codeColor"]}
                          rules={[
                            {
                              required: true,
                              message: "Vui lòng nhập code",
                            },
                          ]}
                          className="mt-5"
                        >
                          <Input placeholder="Nhập link code" />
                        </FormItem>
                      </div>
                      <div className="">
                        <FormItem
                          {...field}
                          label="soLuong"
                          name={[field.name, "soLuong"]}
                          rules={[
                            {
                              required: true,
                              message: "Vui lòng nhập soLuong",
                            },
                          ]}
                          className="mt-5"
                        >
                          <Input placeholder="Nhập link soLuong" />
                        </FormItem>
                        <FormItem
                          {...field}
                          label="Dung lượng"
                          name={[field.name, "capacity"]}
                          className="mt-5"
                        >
                          <Input placeholder="Nhập Dung lượng" />
                        </FormItem>
                        <FormItem
                          {...field}
                          label="price"
                          name={[field.name, "price"]}
                          rules={[
                            {
                              required: true,
                              message: "Vui lòng nhập price",
                            },
                          ]}
                          className="mt-5"
                        >
                          <Input placeholder="Nhập price" />
                        </FormItem>
                        <FormItem
                          {...field}
                          label="Original_price"
                          name={[field.name, "original_price"]}
                          rules={[
                            {
                              required: true,
                              message: "Vui lòng nhập original_price",
                            },
                          ]}
                          className="mt-5"
                        >
                          <Input placeholder="Nhập link original_price" />
                        </FormItem>
                        <button
                          onClick={() => remove(field.name)}
                          className="flex justify-center items-center"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          <p className="mx-auto text-center inline">Xóa</p>
                        </button>
                      </div>
                    </div>
                  ))}
                  <FormItem>
                    <Button
                      className="flex justify-center items-center"
                      type="dashed"
                      onClick={() => add()}
                      style={{ width: "100%" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>{" "}
                      Thêm ảnh
                    </Button>
                  </FormItem>
                </>
              )}
            </Form.List>
          </Form.Item>
          <Form.Item label="Ảnh">
            <Form.List name="images">
              {(fields, { add, remove }) => (
                <>
                  {fields.map((field) => (
                    <div key={field.key} className="flex items-center">
                      <FormItem
                        {...field}
                        label="Base url"
                        name={[field.name, "base_url"]}
                        rules={[
                          { required: true, message: "Vui lòng nhập base url" },
                        ]}
                        className="mt-5"
                      >
                        <Input placeholder="Nhập link base url" />
                      </FormItem>
                      <button
                        onClick={() => remove(field.name)}
                        className="flex justify-center items-center"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span className="ml-1">Xóa</span>
                      </button>
                    </div>
                  ))}
                  <FormItem>
                    <Button
                      className="flex justify-center items-center"
                      type="dashed"
                      onClick={() => add()}
                      style={{ width: "100%" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>{" "}
                      Thêm ảnh
                    </Button>
                  </FormItem>
                </>
              )}
            </Form.List>
          </Form.Item>

          <Form.Item name="specifications" label="Thông số">
            <Form.List name="specifications">
              {(fields, { add, remove }) => (
                <>
                  {fields.map((field) => (
                    <div key={field.key}>
                      <FormItem
                        {...field}
                        label="Tên"
                        name={[field.name, "name"]}
                        rules={[
                          { required: true, message: "Vui lòng nhập name" },
                        ]}
                      >
                        <Input placeholder="Enter name" />
                      </FormItem>
                      <FormItem label="Thuộc tính" className="flex">
                        <Form.List
                          name={[field.name, "attributes"]}
                          key={`${field.key} -attributes`}
                        >
                          {(
                            attributeFields,
                            { add: addAttribute, remove: removeAttribute }
                          ) => (
                            <>
                              {attributeFields.map((attributeField) => (
                                <div key={attributeField.key}>
                                  <FormItem
                                    {...attributeField}
                                    label="Code"
                                    name={[attributeField.name, "code"]}
                                    rules={[
                                      {
                                        required: true,
                                        message: "Vui lòng nhập code",
                                      },
                                    ]}
                                  >
                                    <Input placeholder="Enter code" />
                                  </FormItem>

                                  <FormItem
                                    {...attributeField}
                                    label="Name"
                                    name={[attributeField.name, "name"]}
                                    rules={[
                                      {
                                        required: true,
                                        message: "Vui lòng nhập name",
                                      },
                                    ]}
                                  >
                                    <Input placeholder="Enter name" />
                                  </FormItem>

                                  <FormItem
                                    {...attributeField}
                                    label="Value"
                                    name={[attributeField.name, "value"]}
                                    rules={[
                                      {
                                        required: true,
                                        message: "Vui lòng nhập value",
                                      },
                                    ]}
                                  >
                                    <Input placeholder="Enter value" />
                                  </FormItem>
                                  <button
                                    className="flex justify-center items-center my-3 ml-20"
                                    onClick={() =>
                                      removeAttribute(attributeField.name)
                                    }
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke-width="1.5"
                                      stroke="currentColor"
                                      className="w-6 h-6"
                                    >
                                      <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                      />
                                    </svg>
                                    <span className="ml-1">Xóa thuộc tính</span>
                                  </button>
                                </div>
                              ))}
                              <div>
                                <Button
                                  type="dashed"
                                  className="flex justify-center items-center ml-28 mt-2"
                                  onClick={() => addAttribute()}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                  >
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                  </svg>
                                  <span>Thêm thuộc tính</span>
                                </Button>
                              </div>
                            </>
                          )}
                        </Form.List>
                        <button
                          className="flex justify-center items-center ml-[180px] mt-10 border-b"
                          onClick={() => remove(field.name)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          <span className="ml-1">Xóa thông số</span>
                        </button>
                      </FormItem>
                    </div>
                  ))}
                  <FormItem>
                    <Button
                      className="flex justify-center items-center"
                      type="dashed"
                      onClick={() => add()}
                      style={{ width: "100%" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>{" "}
                      Thêm thông số
                    </Button>
                  </FormItem>
                </>
              )}
            </Form.List>
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
