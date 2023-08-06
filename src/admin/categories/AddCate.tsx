import React, { useEffect } from 'react';
import { UploadOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import { Button, Form, Input, message, Upload } from 'antd';
import { postIdcategory } from '../../api/category';
import { AddCategory } from '../../model/category';
import { useNavigate } from 'react-router-dom';
const AddCate: React.FC = () => {
  const navigate = useNavigate();
  const onFinish = async (data: AddCategory) => {
    const post = await postIdcategory(data);
    if (post) {
      message.success("Thêm danh mục sản phẩm thành công!");
      setTimeout(() => {
        navigate("/admin/category");
      }, 500);
    } else {
      throw new Error("Thêm danh mục thất bại!");
    }

  };
  return (
    <div>
      <div className="flex justify-center items-center border-b-[2px]">
        <span className="text-[25px] font-bold mb-5">Thêm mới danh mục</span>
      </div>

      <div className="mt-5">

        <Form
          onFinish={onFinish} className="mx-auto mb-0 mt-8 max-w-md space-y-4 mb-9">
          <div>
            <Form.Item className='w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm'
              name="name"
              label="Tên sản phẩm"
              rules={[{ required: true }]}
            >
              <Input className="rounded-md" />
            </Form.Item>
          </div>
          <div>
            <Form.Item className='w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm' name="image" label="Thêm ảnh"
              rules={[{ required: true }]}>
              <Input className="rounded-md" />
            </Form.Item >
          </div>
          <Button type="primary" ghost htmlType="submit">
            Thêm mới
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default AddCate;
