import React, { useEffect, useState } from "react";
import {
  Form,
  Input,
  InputNumber,
  Popconfirm,
  Table,
  Typography,
  Select,
  message,
  Button,
  Image,
} from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import {
  deleteIdCategory,
  getAllCategory,
  postIdcategory,
  putIdcategory,
} from "../../api/category";
import { ICategory } from "../../models";

interface Item {
  key: string;
  name: string;
  image: string;
}

interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
  editing: boolean;
  dataIndex: string;
  title: string;
  inputType: "number" | "text";
  record: Item;
  index: number;
  children: React.ReactNode;
}

const EditableCell: React.FC<EditableCellProps> = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === "text" ? <Input /> : <InputNumber />;

  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{ margin: 0 }}
          rules={[
            {
              required: true,
              message: `Vui lòng nhập ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

export const AdminShowCategory = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState<Item[]>([]);
  const [editingKey, setEditingKey] = useState("");

  useEffect(() => {
    async function fetchProduct() {
      let { data } = await getAllCategory();

      setData(
        data.map((item: ICategory) => {
          return {
            key: item._id,
            name: item.name,
            image: item.image,
          };
        })
      );
    }

    fetchProduct();
  }, [data]);

  const isEditing = (record: Item) => record.key === editingKey;

  const edit = (record: Partial<Item> & { key: React.Key }) => {
    form.setFieldsValue({ name: record.name, image: record.image });
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey("");
  };

  const save = async (key: React.Key) => {
    try {
      const row = await form.validateFields();

      const newData = [...data];
      const index = newData.findIndex((item: Item) => key === item.key);
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        setData(newData);
        setEditingKey("");
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey("");
      }

      await putIdcategory(row, key as string);
      message.success("Chỉnh sửa danh mục thành công!");
    } catch (errInfo) {
      console.log("Validate Failed:", errInfo);
    }
  };

  const columns = [
    {
      title: "Tên danh mục",
      dataIndex: "name",
      align: "center",
      width: "33%",
      editable: true,
    },
    {
      title: "image",
      dataIndex: "image",
      align: "center",
      width: "33%",
      editable: true,
      render: (text: string) => (
        <Image width={50} src={text} className="rounded-full" />
      ),
    },
    {
      title: "Thao tác",
      dataIndex: "key",
      align: "center",
      width: "33%",
      render: (_: any, record: Item) => {
        const editable = isEditing(record);
        return (
          <div className="flex justify-center items-center">
            {editable ? (
              <span>
                <Typography.Link
                  onClick={() => save(record.key)}
                  className="mr-3"
                >
                  Lưu
                </Typography.Link>
                <Popconfirm
                  title="Bạn có muốn hủy?"
                  okText="Yes"
                  cancelText="No"
                  okButtonProps={{
                    style: { backgroundColor: "#007bff", color: "white" },
                  }}
                  onConfirm={cancel}
                >
                  <button>Hủy</button>
                </Popconfirm>
              </span>
            ) : (
              <Typography.Link
                disabled={editingKey !== ""}
                onClick={() => edit(record)}
              >
                <svg
                  viewBox="64 64 896 896"
                  focusable="false"
                  data-icon="edit"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"></path>
                </svg>
              </Typography.Link>
            )}
            <div className="text-blue-500 ml-3">
              <Popconfirm
                title="Bạn có muốn xóa?"
                okText="Yes"
                cancelText="No"
                okButtonProps={{
                  style: { backgroundColor: "#007bff", color: "white" },
                }}
                onConfirm={() => {
                  message.success("Xóa danh mục thành công!");
                  deleteIdCategory(record.key);
                }}
              >
                <svg
                  viewBox="64 64 896 896"
                  focusable="false"
                  data-icon="delete"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"></path>
                </svg>
              </Popconfirm>
            </div>
          </div>
        );
      },
    },
  ];

  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record: Item) => ({
        record,
        inputType: col.dataIndex === "number" ? "number" : "text",
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  const handleAdd = async () => {
    const newCate: any = {
      name: "Default",
      image: "Default",
    };
    try {
      const checkCreate = await postIdcategory(newCate);
      if (checkCreate) {
        message.success("Thêm mới danh mục thành công!");
      } else {
        throw new Error("Thêm mới danh mục  thất bại!");
      }
    } catch (error: any) {
      message.error(error.message);
    }
  };

  return (
    <Form form={form} component={false}>
      <Button
        type="primary"
        onClick={handleAdd}
        ghost
        style={{ marginBottom: 16 }}
      >
        Thêm danh mục
      </Button>
      <Table
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        bordered
        dataSource={data}
        columns={mergedColumns}
        rowClassName="editable-row"
        pagination={{
          onChange: cancel,
          pageSize: 10,
        }}
      />
    </Form>
  );
};
