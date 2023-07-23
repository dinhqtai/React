import React, { useEffect, useState } from 'react';
import { Button, Form, Input, message, Upload } from 'antd';
import { getByIdCategory, putIdcategory } from '../../api/category';
import { useNavigate, useParams } from 'react-router-dom';
import { ICategory } from '../../model/category';
const AddCate: React.FC = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState()
  const { id } = useParams()
  useEffect(() => {
    const getCate = async () => {
      const { data } = await getByIdCategory(id as string);
      setCategory(data)
    };
    getCate()
  }, [])

  const onFinish = async (values: ICategory) => {
    const put = await putIdcategory(id as string, values);
    if (put) {
      message.success("Cập nhật danh mục thành công!");
      setTimeout(() => {
        navigate("/admin/category");
      }, 500);
    } else {
      throw new Error("Cập nhật danh mục thất bại!");
    }

  };
  return (
    <div>
      <div className="flex justify-center items-center border-b-[2px]">
        <span className="text-[25px] font-bold mb-5">Cập nhật danh mục</span>
      </div>

      <div className="mt-5">
        {category ? (
          < Form
            onFinish={onFinish}
            initialValues={category}
            className="mx-auto mb-0 mt-8 max-w-md space-y-4 mb-9">

            <div>
              <Form.Item className='w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm'
                name="name"
                label="Tên danh mục"
                rules={[{ required: true }]}
              >
                <Input className="rounded-md" />
              </Form.Item>
            </div>
            <div>

              <Form.Item className='w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm' name="image" label="Thêm ảnh" rules={[{ required: true }]}>
                <Input className="rounded-md" />
              </Form.Item>
            </div>
            <Button type="primary" ghost htmlType="submit">
              Cập nhật
            </Button>
          </Form>
        ) : (
          <div className="flex justify-center">Đang lấy dữ liệu</div>
        )}
      </div>
    </div >
  );
};

export default AddCate;
